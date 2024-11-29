"use client";
import { Toast } from "@/components/Toast";
import { useToastContext } from "@/contexts/ToastContext";

export default function ToastContainer() {
  const { toasts, removeToast } = useToastContext();

  return (
    <div className="flex flex-col gap-4 p-8">
      {toasts.map((toast, idx) => (
        <Toast key={idx} onClick={() => removeToast(toast)}>
          {toast}
        </Toast>
      ))}
    </div>
  );
}
