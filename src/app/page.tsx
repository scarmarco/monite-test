import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div>
        <h1 className="text-xl font-semibold text-center mb-8">Products</h1>
        <Link className="underline" href="/products">Go to products page</Link>  
      </div>
    </div>
  );
}
