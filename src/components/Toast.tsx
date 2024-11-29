import { XMarkIcon } from "@heroicons/react/24/outline";

type ToastProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export function Toast({ children, onClick }: ToastProps) {
  return (
    <div
      className="flex gap-8 p-8 bg-green-500 text-white rounded-2xl cursor-pointer"
      onClick={onClick}
    >
      <span className="font-semibold">{children}</span>
      <XMarkIcon className="size-6" />
    </div>
  );
}
