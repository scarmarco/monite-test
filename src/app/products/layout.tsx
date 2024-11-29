import Sidebar from "./components/Sidebar";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-screen h-screen">
      <Sidebar />

      <main className="flex-1 px-12 py-6">{children}</main>
    </section>
  );
}
