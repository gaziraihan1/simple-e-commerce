"use client";
import { Product } from "@/types/product";
import Pagination from "@/components/products/Pagination";
import ProductModal from "@/components/products/ProductModal";
import { useEffect, useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import Filter from "@/components/filter/Filter";


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const productsPerPage = 9;

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch("/product.json"); 
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(true)
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) =>
    filter ? p.category.toLowerCase().includes(filter.toLowerCase()) : true
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  if (loading) {
    return (
      <div className="p-6 min-h-screen flex justify-center items-center">
        <p>Loading products...</p>
      </div>
    );
  }
   if (error) {
    return (
      <div className="p-6 min-h-screen flex justify-center items-center">
        <p>Error occured while loading data...</p>
      </div>
    );
  }

  return (
    <div>
      <main className="p-6 lg:px-30 2xl:px-50">
        <Filter onFilter={setFilter} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuy={setSelectedProduct}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
