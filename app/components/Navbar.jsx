import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex items-center justify-center p-4 z-[100] w-full flex-wrap gap-4 lg:justify-between md:justify-between sm:justify-between">
      <h1 className="text-4xl font-bold text-red-600 cursor-pointer">Blacksushi Beats</h1>
      <div className="flex gap-4 text-white">
        <Link href="/">
          <button className="px-6 py-2 text-white bg-red-500 rounded cursor-pointer">Homepage</button>
        </Link>
        <Link href="/beats">
          <button className="px-6 py-2 text-white bg-orange-500 rounded cursor-pointer">Beats</button>
        </Link>
        <Link href="/about">
          <button className="px-6 py-2 text-white bg-yellow-500 rounded cursor-pointer">About</button>
        </Link>
        <Link href="/cart">
          <button className="px-6 py-2 text-white bg-yellow-300 rounded cursor-pointer">My cart</button>
        </Link>
      </div>
    </div>
  );
}
