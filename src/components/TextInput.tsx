export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      className="w-full border-2 border-gray-100 bg-gray-100 rounded-lg px-3 py-2 outline-gray-300"
      {...props}
    />
  );
}
