export function Checkbox(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      className="w-5 h-5 border-2 border-gray-200 rounded accent-black checked:border-black"
      {...props}
    />
  );
}
