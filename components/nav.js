import Link from 'next/link';

export default function Nav() {
  return (
    <nav class="flex justify-between">
      <div class="flex items-center space-x-3">
        <Link href="/">
          <a>
            <span className="font-bold">Dimas</span>
          </a>
        </Link>
      </div>
      <div className="flex items-center space-x-3">
        <Link href="/posts">
          <a class="p-2 md:mx-4 opacity-70 hover:opacity-100">
            <span className="font-normal">Blog</span>
          </a>
        </Link>
        <Link href="/about">
          <a class="p-2 md:mx-4 opacity-70 hover:opacity-100">
            <span className="font-normal">About</span>
          </a>
        </Link>
        <Link href="/contact">
          <a class="p-2 md:mx-4 opacity-70 hover:opacity-100">
            <span className="font-normal">Contact</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}
