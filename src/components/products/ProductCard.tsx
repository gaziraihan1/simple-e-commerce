"use client"
import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
type ProductCardProps = {
  product: Product;
  onBuy: (product: Product) => void;
}

// product card component (multiple cards one component)

export default function ProductCard({product, onBuy}: ProductCardProps) {
  return (
    <div className="border p-4 rounded-md shadow-sm flex flex-col justify-between">
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={160}
        className="w-full h-40 object-center object-cover mb-2 rounded"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p className="text-blue-600 font-bold">${product.price}</p>
      <div className='mt-2 flex justify-between'>

      <button className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700'>
        <Link href={`product-list/${product.id}`}>
        Details</Link>
      </button>
      <button
        onClick={() => onBuy(product)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Buy
      </button>
      </div>
    </div>
  )
}
