import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlatformLogo } from "@/components/common/platform-logo";
import { loginAction, redirectAuthenticatedAdmin } from "./actions";

type Props = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: Props) {
  await redirectAuthenticatedAdmin();
  const { error } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <PlatformLogo className="mb-4 justify-center" imageClassName="h-20 w-20" />
          <h1 className="text-2xl font-bold text-[#17191f]">Admin login</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to manage the Achebe Hope Foundation platform.
          </p>
        </div>

        {error === "invalid" && (
          <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            Invalid email or password.
          </p>
        )}

        <form action={loginAction} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </main>
  );
}
