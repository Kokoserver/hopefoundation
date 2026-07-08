"use client";

import { useRef, useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import { AlertTriangle, LoaderCircle, X } from "lucide-react";

type ConfirmSubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  message: string;
  title?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  children: ReactNode;
};

export function ConfirmSubmitButton({
  message,
  title = "Confirm action",
  confirmLabel = "Continue",
  cancelLabel = "Cancel",
  children,
  onClick,
  ...props
}: ConfirmSubmitButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function closeModal() {
    if (!isSubmitting) setIsOpen(false);
  }

  function confirmAction() {
    setIsSubmitting(true);
    buttonRef.current?.form?.requestSubmit(buttonRef.current);
  }

  return (
    <>
      <button
        {...props}
        ref={buttonRef}
        type="submit"
        onClick={(event) => {
          if (!isSubmitting) {
            event.preventDefault();
            setIsOpen(true);
            return;
          }

          setIsSubmitting(false);
          onClick?.(event);
        }}
      >
        {children}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-dialog-title"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md rounded-2xl !bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full !bg-amber-50 !text-amber-700">
                  <AlertTriangle className="h-5 w-5" />
                </span>
                <div>
                  <h2
                    id="confirm-dialog-title"
                    className="text-lg font-bold !text-[#17191f]"
                  >
                    {title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 !text-gray-600">
                    {message}
                  </p>
                </div>
              </div>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={closeModal}
                className="rounded-md p-1.5 !text-gray-500 hover:!bg-gray-100 hover:!text-[#17191f] disabled:opacity-50"
                aria-label="Close confirmation dialog"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={closeModal}
                className="rounded-full border !border-gray-300 !bg-white px-4 py-2 text-sm font-semibold !text-[#211b15] hover:!bg-gray-50 disabled:opacity-50"
              >
                {cancelLabel}
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={confirmAction}
                className="inline-flex items-center gap-2 rounded-full !bg-red-600 px-4 py-2 text-sm font-semibold !text-white hover:!bg-red-700 disabled:opacity-60"
              >
                {isSubmitting && (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                )}
                {confirmLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

type ConfirmButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  message: string;
  title?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  children: ReactNode;
  onConfirm: () => void;
};

export function ConfirmButton({
  message,
  title = "Confirm action",
  confirmLabel = "Continue",
  cancelLabel = "Cancel",
  children,
  onConfirm,
  onClick,
  ...props
}: ConfirmButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  function closeModal() {
    if (!isConfirming) setIsOpen(false);
  }

  async function confirmAction() {
    setIsConfirming(true);

    try {
      await onConfirm();
      setIsOpen(false);
    } finally {
      setIsConfirming(false);
    }
  }

  return (
    <>
      <button
        {...props}
        type="button"
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) setIsOpen(true);
        }}
      >
        {children}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-button-dialog-title"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md rounded-2xl !bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full !bg-amber-50 !text-amber-700">
                  <AlertTriangle className="h-5 w-5" />
                </span>
                <div>
                  <h2
                    id="confirm-button-dialog-title"
                    className="text-lg font-bold !text-[#17191f]"
                  >
                    {title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 !text-gray-600">
                    {message}
                  </p>
                </div>
              </div>
              <button
                type="button"
                disabled={isConfirming}
                onClick={closeModal}
                className="rounded-md p-1.5 !text-gray-500 hover:!bg-gray-100 hover:!text-[#17191f] disabled:opacity-50"
                aria-label="Close confirmation dialog"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                disabled={isConfirming}
                onClick={closeModal}
                className="rounded-full border !border-gray-300 !bg-white px-4 py-2 text-sm font-semibold !text-[#211b15] hover:!bg-gray-50 disabled:opacity-50"
              >
                {cancelLabel}
              </button>
              <button
                type="button"
                disabled={isConfirming}
                onClick={() => void confirmAction()}
                className="inline-flex items-center gap-2 rounded-full !bg-red-600 px-4 py-2 text-sm font-semibold !text-white hover:!bg-red-700 disabled:opacity-60"
              >
                {isConfirming && (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                )}
                {confirmLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
