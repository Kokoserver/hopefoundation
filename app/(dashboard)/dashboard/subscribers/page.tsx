import { desc } from "drizzle-orm";
import { MailCheck } from "lucide-react";
import { db } from "@/db";
import { newsletterSubscriptions } from "@/db/schema";
import { requireAdmin } from "@/lib/auth";

export default async function SubscribersPage() {
  await requireAdmin();

  const subscribers = await db
    .select()
    .from(newsletterSubscriptions)
    .orderBy(desc(newsletterSubscriptions.createdAt));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold !text-[#17191f]">
          Newsletter Subscribers
        </h1>
        <p className="mt-1 text-sm !text-muted-foreground">
          People who requested updates from the website.
        </p>
      </div>

      <div className="rounded-xl border !border-gray-200 !bg-white p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl !bg-amber-50 !text-amber-700">
            <MailCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-2xl font-bold !text-[#17191f]">
              {subscribers.length}
            </p>
            <p className="text-xs !text-muted-foreground">
              Unique subscriber{subscribers.length === 1 ? "" : "s"}
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border !border-gray-200 !bg-white">
        {subscribers.length === 0 ? (
          <div className="px-6 py-14 text-center">
            <MailCheck className="mx-auto h-9 w-9 !text-gray-300" />
            <p className="mt-3 text-sm font-medium !text-gray-600">
              No newsletter subscribers yet.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b !border-gray-200 !bg-gray-50">
                <tr>
                  <th className="px-5 py-3 font-medium !text-gray-600">
                    Email address
                  </th>
                  <th className="px-5 py-3 font-medium !text-gray-600">
                    Subscribed
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y !divide-gray-100">
                {subscribers.map((subscriber) => (
                  <tr key={subscriber.id}>
                    <td className="px-5 py-4 font-medium !text-[#17191f]">
                      {subscriber.email}
                    </td>
                    <td className="px-5 py-4 !text-gray-600">
                      {subscriber.createdAt.toLocaleDateString("en-NG", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
