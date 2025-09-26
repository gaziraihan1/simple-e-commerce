import Image from 'next/image';
import { Product } from '@/types/product';

type Props = { product: Product }

export default function ProductImage({ product }: Props) {
  return (
    <div className="md:w-1/2 flex justify-center">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="rounded-lg object-cover"
      />
    </div>
  );
}
