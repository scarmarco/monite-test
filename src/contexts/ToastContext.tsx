"use client";
import {
  useState,
  useCallback,
  useContext,
  createContext,
  PropsWithChildren,
} from "react";

type ToastContext = {
  toasts: string[];
  setToasts: (toast: string) => void;
  removeToast: (toast: string) => void;
};

const ToastContext = createContext<ToastContext>({
  toasts: [],
  setToasts: () => {},
  removeToast: () => {},
});

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<string[]>([]);

  const removeToast = useCallback((toast: string) => {
    setToasts((state) => {
      const index = state.findIndex((text) => text === toast);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    });
  }, []);

  const handleNewToast = useCallback(
    (toast: string) => {
      setToasts((state) => [...state, toast]);
      setTimeout(() => {
        removeToast(toast);
      }, 3000);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider
      value={{ toasts, setToasts: handleNewToast, removeToast }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
