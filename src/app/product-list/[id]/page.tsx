"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Product } from '@/types/product';
import ProductImage from '@/components/product-details/ProductImage';
import ProductInfo from '@/components/product-details/ProductInfo';
import ProductActions from '@/components/product-details/ProductActions';
import ProductModal from '@/components/products/ProductModal';


// type Props = {
//   onBuy: (product: Product) => void; 
// };

export default function ProductDetailsPage() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


   useEffect(() => {
    async function fetchProduct() {
      const res = await fetch("/product.json"); 
      const data: Product[] = await res.json();
      const foundProduct = data.find((p) => Number(p.id) === Number(id));
      setProduct(foundProduct || null);
    }
    fetchProduct();
  }, [id]);
  const handleBuy = (product: Product) => {
    setSelectedProduct(product); 
  };

  const closeModal = () => setSelectedProduct(null);

  if (!product) return <p className="text-center mt-20">Product not found</p>;

  if (!product) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8 min-h-screen justify-center items-center">
      <ProductImage product={product} />
      <div className="flex flex-col flex-1 gap-4">
        <ProductInfo product={product} />
        <ProductActions product={product} onBuy={handleBuy} />
      </div>
      <ProductModal product={selectedProduct} onClose={closeModal} />
    </div>
  );
}
