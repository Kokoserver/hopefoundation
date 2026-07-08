import Link from "next/link";
import { getContactMessages } from "@/db/queries";
import { Badge } from "@/components/ui/badge";
import { ConfirmSubmitButton } from "@/components/dashboard/confirm-submit-button";
import { Trash2, Eye } from "lucide-react";
import { deleteContactMessageAction } from "./actions";

export default async function ContactPage() {
  const messages = await getContactMessages();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#17191f]">Contact Messages</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Review and manage messages from the contact form.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-medium text-muted-foreground">Name</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Email</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Subject</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Date</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {messages.map((msg) => (
              <tr key={msg.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-[#17191f]">{msg.fullName}</td>
                <td className="px-4 py-3 text-muted-foreground">{msg.email}</td>
                <td className="max-w-[200px] truncate px-4 py-3 text-muted-foreground">
                  {msg.subject}
                </td>
                <td className="px-4 py-3">
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
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/dashboard/contact/${msg.id}`}
                      className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-[#17191f]"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>
                    <form action={deleteContactMessageAction}>
                      <input type="hidden" name="id" value={msg.id} />
                      <ConfirmSubmitButton
                        title="Delete message?"
                        message={`Delete message from ${msg.fullName}? This cannot be undone.`}
                        confirmLabel="Delete message"
                        className="rounded-md p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </ConfirmSubmitButton>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {messages.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-sm text-muted-foreground">
                  No messages yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
