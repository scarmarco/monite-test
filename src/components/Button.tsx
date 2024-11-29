type ButtonVariant = "primary" | "secondary" | "default";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: React.ReactNode;
};

const BUTTON_VARIANT: Record<ButtonVariant, string> = {
  default: "text-gray-50 bg-blue-600",
  primary: "text-blue-500 bg-blue-50",
  secondary: "text-gray-900 bg-blue-50/80",
};

export function Button({ variant = "default", children }: ButtonProps) {
  return (
    <button
      className={`${BUTTON_VARIANT[variant]} text-sm font-semibold min-w-28 px-4 py-3 rounded-xl`}
    >
      {children}
    </button>
  );
}
