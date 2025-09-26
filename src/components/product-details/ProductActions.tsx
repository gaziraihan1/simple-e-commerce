import { Product } from '@/types/product';

type Props = {
  product: Product;
  onBuy: (product: Product) => void; 
}

export default function ProductActions({ product, onBuy }: Props) {
  return (
    <div className="mt-6 flex gap-4">
        {/* Show modal when click on Buy */}
      <button
        disabled={product.stock === 0}
        onClick={() => onBuy(product)}
        className={`px-6 py-2 rounded-lg text-white font-semibold ${
          product.stock > 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        {product.stock > 0 ? 'Add to Cart' : 'Unavailable'}
      </button>
      <button
        onClick={() => onBuy(product)} // can also use same onBuy for Buy Now if desired
        className="px-6 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700"
      >
        Buy Now
      </button>
    </div>
  );
}
