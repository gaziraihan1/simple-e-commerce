"use client";
import { Product } from "@/types/product";
import Image from "next/image";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};
// Reusable Product modal component
export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 mx-4 rounded-lg max-w-lg w-full relative shadow-lg overflow-y-auto max-h-[90vh]">

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-lg font-bold text-gray-500 hover:text-red-500"
        >
          ✖
        </button>

        <Image
          width={300}
          height={300}
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded mb-4"
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {product.name}
        </h2>

        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p>
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>
          <p>
            <span className="font-semibold">Price:</span>{" "}
            <span className="text-green-600 font-bold">${product.price}</span>
          </p>
          <p>
            <span className="font-semibold">Discount:</span>{" "}
            {product.discount}%
          </p>
          <p>
            <span className="font-semibold">Stock:</span> {product.stock} units
          </p>
          <p>
            <span className="font-semibold">Rating:</span> ⭐ {product.rating} (
            {product.reviews} reviews)
          </p>
        </div>
      </div>
    </div>
  );
}
