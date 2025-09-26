import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 lg:px-30 2xl:px-50 flex justify-between items-center">
      <h1 className="text-xl font-bold">Product Store</h1>
      <nav className="flex gap-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/product-list" className="hover:underline">Product</Link>
      </nav>
    </header>
  );
}
