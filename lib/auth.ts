import "server-only";

import {
  createHash,
  createHmac,
  randomBytes,
  timingSafeEqual,
} from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { and, eq, gt } from "drizzle-orm";
import { db } from "@/db";
import { adminSessions, adminUsers, databaseDriver } from "@/db/schema";
export { hashPassword, verifyPassword } from "@/lib/password";
const SESSION_COOKIE = "admin_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7;
const usesVercelDemoSessions =
  Boolean(process.env.VERCEL) &&
  databaseDriver === "sqlite" &&
  (process.env.SQLITE_DATABASE_URL || "file:").startsWith("file:");

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

function signSession(adminId: string, expiresAt: number, passwordHash: string) {
  const payload = `${adminId}.${expiresAt}`;
  const signature = createHmac("sha256", passwordHash)
    .update(payload)
    .digest("base64url");
  return `${payload}.${signature}`;
}

function signaturesMatch(actual: string, expected: string) {
  const actualBuffer = Buffer.from(actual);
  const expectedBuffer = Buffer.from(expected);
  return (
    actualBuffer.length === expectedBuffer.length &&
    timingSafeEqual(actualBuffer, expectedBuffer)
  );
}

export async function createAdminSession(adminId: string) {
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);
  let token: string;

  if (usesVercelDemoSessions) {
    const [admin] = await db
      .select({ passwordHash: adminUsers.passwordHash })
      .from(adminUsers)
      .where(eq(adminUsers.id, adminId))
      .limit(1);

    if (!admin) throw new Error("Administrator account was not found.");
    token = signSession(adminId, expiresAt.getTime(), admin.passwordHash);
  } else {
    token = randomBytes(32).toString("hex");
    await db.insert(adminSessions).values({
      adminId,
      tokenHash: hashToken(token),
      expiresAt,
    });
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });
}

export async function getCurrentAdmin() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;

  if (usesVercelDemoSessions) {
    const [adminId, expiresAtValue, signature] = token.split(".");
    const expiresAt = Number(expiresAtValue);
    if (!adminId || !signature || !expiresAt || expiresAt <= Date.now()) {
      return null;
    }

    const [admin] = await db
      .select({
        id: adminUsers.id,
        name: adminUsers.name,
        email: adminUsers.email,
        isDefault: adminUsers.isDefault,
        passwordHash: adminUsers.passwordHash,
      })
      .from(adminUsers)
      .where(eq(adminUsers.id, adminId))
      .limit(1);

    if (!admin) return null;
    const expectedToken = signSession(adminId, expiresAt, admin.passwordHash);
    const expectedSignature = expectedToken.split(".")[2];
    if (!signaturesMatch(signature, expectedSignature)) return null;

    return {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      isDefault: admin.isDefault,
    };
  }

  const [admin] = await db
    .select({
      id: adminUsers.id,
      name: adminUsers.name,
      email: adminUsers.email,
      isDefault: adminUsers.isDefault,
    })
    .from(adminSessions)
    .innerJoin(adminUsers, eq(adminSessions.adminId, adminUsers.id))
    .where(
      and(
        eq(adminSessions.tokenHash, hashToken(token)),
        gt(adminSessions.expiresAt, new Date())
      )
    )
    .limit(1);

  return admin ?? null;
}

export async function requireAdmin() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");
  return admin;
}

export async function deleteCurrentSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (token && !usesVercelDemoSessions) {
    await db
      .delete(adminSessions)
      .where(eq(adminSessions.tokenHash, hashToken(token)));
  }

  cookieStore.delete(SESSION_COOKIE);
}
