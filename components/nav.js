import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex justify-between">
      <div className="flex items-center space-x-3">
        <Link href="/">
          <a>
            <span className="font-bold">Dimas</span>
          </a>
        </Link>
      </div>
      <div className="flex items-center space-x-3">
        <Link href="/posts">
          <a className="p-2 md:mx-4 opacity-70 hover:opacity-100">
            <span className="font-normal">Blog</span>
          </a>
        </Link>
        <Link href="/about">
          <a className="p-2 md:mx-4 opacity-70 hover:opacity-100">
            <span className="font-normal">About</span>
          </a>
        </Link>
        <Link href="/contact">
          <a className="p-2 md:mx-4 opacity-70 hover:opacity-100">
            <span className="font-normal">Contact</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}
