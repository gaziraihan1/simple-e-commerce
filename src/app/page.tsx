import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Welcome to <span className="text-blue-600">Product Store</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Discover amazing products with smooth shopping experience, fast checkout, and modern design.
          </p>
          <Link
            href="/product-list"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Explore Products →
          </Link>
        </div>
      </section>


    </div>
  );
}
