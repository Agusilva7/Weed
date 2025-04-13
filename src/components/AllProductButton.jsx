import Link from 'next/link';

export default function AllProductsButton() {
  return (
    <Link
      href="/products"
      className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
    >
      All Products
      <span className="ml-1">&rarr;</span>
    </Link>
  );
}
