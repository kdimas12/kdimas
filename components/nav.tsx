import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="py-4 md:px-5">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <a className="text-xl font-semibold text-gray-700 hover:text-gray-900">
              Dimas
            </a>
          </Link>
        </div>
        <div className="items-center">
          <div className="flex flex-col-row">
            <Link href="/about">
              <a className="my-1 text-gray-500 hover:text-gray-900 mx-2 md:mx-4 md:my-0">
                Tentang
              </a>
            </Link>
            <Link href="/blog">
              <a className="my-1 text-gray-500 hover:text-gray-900 mx-2 md:mx-4 md:my-0">
                Blog
              </a>
            </Link>
            <Link href="/projek">
              <a className="my-1 text-gray-500 hover:text-gray-900 mx-2 md:mx-4 md:my-0">
                Projek
              </a>
            </Link>
            <Link href="/contact">
              <a className="my-1 text-gray-500 hover:text-gray-900 mx-2 md:mx-4 md:my-0">
                Kontak
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
