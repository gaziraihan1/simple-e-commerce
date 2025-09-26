import { Product } from '@/types/product';
// Product info for the details page

type Props = { product: Product }

export default function ProductInfo({ product }: Props) {
  const discountedPrice = (product.price * (1 - (product.discount || 0) / 100)).toFixed(2);

  return (
    <div className="md:w-1/2 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-600 text-lg">{product.brand} | {product.category}</p>

      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-green-600">${discountedPrice}</span>
        {product.discount > 0 && (
          <>
            <span className="line-through text-gray-400">${product.price}</span>
            <span className="text-red-500 font-medium">{product.discount}% OFF</span>
          </>
        )}
      </div>

      <p className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
      </p>

      <p className="text-yellow-500">
        {'⭐'.repeat(Math.floor(product.rating))} ({product.reviews} reviews)
      </p>

      <p className="text-gray-700 mt-4">{product.description}</p>
    </div>
  );
}
