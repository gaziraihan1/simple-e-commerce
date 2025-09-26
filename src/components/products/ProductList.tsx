"use client"
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
type Props = {
    products: Product[];
    onBuy: (product: Product) => void;
}

export default function ProductList({products, onBuy}: Props) {
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onBuy={onBuy} />
      ))}
    </div>
  )
}
