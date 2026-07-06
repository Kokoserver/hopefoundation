import Link from "next/link";
import { notFound } from "next/navigation";
import { getContactMessageById } from "@/db/queries";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { updateContactMessageAction } from "../actions";

type Props = { params: Promise<{ id: string }> };

export default async function ContactMessagePage({ params }: Props) {
  const { id } = await params;
  const msg = await getContactMessageById(id);
  if (!msg) notFound();

  return (
    <div>
      <Link
        href="/dashboard/contact"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-[#17191f]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to messages
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold text-[#17191f]">{msg.subject}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              From {msg.fullName} &lt;{msg.email}&gt;
            </p>
          </div>
          <Badge
            variant={
              msg.status === "unread"
                ? "destructive"
                : msg.status === "read"
                  ? "warning"
                  : "success"
            }
          >
            {msg.status}
          </Badge>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
            {msg.message}
          </p>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-6">
          <h3 className="mb-3 text-sm font-semibold text-[#17191f]">
            Update Status
          </h3>
          <form action={updateContactMessageAction} className="flex items-center gap-3">
            <input type="hidden" name="id" value={msg.id} />
            <select
              name="status"
              defaultValue={msg.status}
              className="flex h-10 w-40 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="unread">Unread</option>
              <option value="read">Read</option>
              <option value="responded">Responded</option>
            </select>
            <Button type="submit" size="sm">
              Update
            </Button>
          </form>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          Received: {new Date(msg.createdAt).toLocaleString()}
        </div>
      </div>
    </div>
  );
}
