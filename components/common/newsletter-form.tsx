"use client";

import { useActionState } from "react";
import { Mail } from "lucide-react";
import {
  subscribeToNewsletterAction,
  type NewsletterState,
} from "@/app/(public)/newsletter/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type NewsletterFormProps = {
  compact?: boolean;
  className?: string;
};

const initialState: NewsletterState = {
  message: "",
  success: false,
};

export function NewsletterForm({
  compact = false,
  className,
}: NewsletterFormProps) {
  const [state, action, isPending] = useActionState(
    subscribeToNewsletterAction,
    initialState
  );

  return (
    <form action={action} className={cn("space-y-2", className)}>
      <div className={cn("flex gap-2", !compact && "flex-col")}>
        <Input
          name="email"
          type="email"
          required
          aria-label="Email address"
          placeholder="your@email.com"
          className={cn(
            "!bg-white !text-[#17191f] placeholder:!text-gray-500",
            compact
              ? "h-9 rounded-xl border-[#efdcc4] text-[12px]"
              : "h-9 rounded-full border-0 px-4"
          )}
        />
        <Button
          type="submit"
          disabled={isPending}
          className={cn(
            "!bg-gold font-semibold !text-white hover:!bg-gold/90",
            compact
              ? "h-9 rounded-xl px-3 text-[11px]"
              : "h-9 rounded-full px-6 text-[13px]"
          )}
        >
          {compact ? <Mail className="h-3.5 w-3.5" /> : isPending ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
      {state.message && (
        <p
          role="status"
          className={cn(
            "text-xs font-medium",
            state.success ? "!text-emerald-600" : "!text-red-500"
          )}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
