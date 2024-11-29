"use client";

import { type ElementRef, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  return createPortal(
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-gray-900/10 z-10 flex justify-center items-center">
      <dialog
        ref={dialogRef}
        className="min-w-96 min-h-60 rounded-2xl px-6 py-5 shadow-lg"
        onClose={onDismiss}
      >
        {children}
        <button onClick={onDismiss} className="absolute top-5 right-6">
          <XMarkIcon className="size-6 text-gray-500" />
        </button>
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
