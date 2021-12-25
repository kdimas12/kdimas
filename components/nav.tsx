import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="py-4">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <a className="text-xl font-semibold text-gray-800 transition-colors duration-200 transform hover:text-gray-700">
              dimas
            </a>
          </Link>
        </div>
        <div className="items-center">
          <div className="flex flex-col-row">
            <Link href="/about">
              <a className="my-1 text-gray-700 transition-colors duration-200 transform hover:text-blue-500 mx-2 md:mx-4 md:my-0">
                tentang
              </a>
            </Link>
            <Link href="/blog">
              <a className="my-1 text-gray-700 transition-colors duration-200 transform hover:text-blue-500 mx-2 md:mx-4 md:my-0">
                blog
              </a>
            </Link>
            <Link href="/projek">
              <a className="my-1 text-gray-700 transition-colors duration-200 transform hover:text-blue-500 mx-2 md:mx-4 md:my-0">
                projek
              </a>
            </Link>
            <Link href="/contact">
              <a className="my-1 text-gray-700 transition-colors duration-200 transform hover:text-blue-500 mx-2 md:mx-4 md:my-0">
                kontak
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
