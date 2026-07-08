"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { CheckCircle2, CircleAlert, X } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastState = {
  message: string;
  type: "success" | "error";
};

export function ToastListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [toast, setToast] = useState<ToastState | null>(null);

  useEffect(() => {
    function handleToast(event: Event) {
      const detail = (event as CustomEvent<ToastState>).detail;
      setToast(detail);
      window.setTimeout(() => setToast(null), 5000);
    }

    window.addEventListener("app-toast", handleToast);
    return () => window.removeEventListener("app-toast", handleToast);
  }, []);

  useEffect(() => {
    const message = searchParams.get("toast");
    if (!message) return;

    const type = searchParams.get("toastType") === "error" ? "error" : "success";
    const showTimeout = window.setTimeout(() => {
      setToast({ message, type });
    }, 0);

    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete("toast");
    nextParams.delete("toastType");
    const query = nextParams.toString();
    window.history.replaceState(null, "", query ? `${pathname}?${query}` : pathname);

    const dismissTimeout = window.setTimeout(() => setToast(null), 5000);
    return () => {
      window.clearTimeout(showTimeout);
      window.clearTimeout(dismissTimeout);
    };
  }, [pathname, searchParams]);

  if (!toast) return null;

  const Icon = toast.type === "success" ? CheckCircle2 : CircleAlert;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "fixed right-4 top-4 z-[100] flex w-[calc(100%-2rem)] max-w-sm items-start gap-3 rounded-xl border p-4 shadow-xl sm:right-6 sm:top-6",
        toast.type === "success"
          ? "!border-emerald-200 !bg-emerald-50 !text-emerald-900"
          : "!border-red-200 !bg-red-50 !text-red-900"
      )}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <p className="flex-1 text-sm font-medium">{toast.message}</p>
      <button
        type="button"
        aria-label="Dismiss notification"
        className="rounded p-0.5 opacity-60 transition hover:opacity-100"
        onClick={() => setToast(null)}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
