export type ToastType = "success" | "error";

export function withToast(path: string, message: string, type: ToastType = "success") {
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}toast=${encodeURIComponent(message)}&toastType=${type}`;
}
