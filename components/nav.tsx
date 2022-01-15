import Link from 'next/link';
import { Router, useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();

  return (
    <nav className="py-4 md:px-5">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <a className="text-xl font-semibold">Dimas</a>
          </Link>
        </div>
        <div className="items-center">
          <div className="flex flex-col-row">
            <Link href="/tentang">
              <a
                className={
                  router.pathname == '/tentang'
                    ? 'my-1 text-gray-900 ml-4 md:ml-8 md:my-0'
                    : 'my-1 text-gray-500 hover:text-gray-900 ml-4 md:ml-8 md:my-0'
                }
              >
                Tentang
              </a>
            </Link>
            <Link href="/blog">
              <a
                className={
                  router.pathname == '/blog'
                    ? 'my-1 text-gray-900 ml-4 md:ml-8 md:my-0'
                    : 'my-1 text-gray-500 hover:text-gray-900 ml-4 md:ml-8 md:my-0'
                }
              >
                Blog
              </a>
            </Link>
            <Link href="/projek">
              <a
                className={
                  router.pathname == '/projek'
                    ? 'my-1 text-gray-900 ml-4 md:ml-8 md:my-0'
                    : 'my-1 text-gray-500 hover:text-gray-900 ml-4 md:ml-8 md:my-0'
                }
              >
                Projek
              </a>
            </Link>
            <Link href="/kontak">
              <a
                className={
                  router.pathname == '/kontak'
                    ? 'my-1 text-gray-900 ml-4 md:ml-8 md:my-0'
                    : 'my-1 text-gray-500 hover:text-gray-900 ml-4 md:ml-8 md:my-0'
                }
              >
                Kontak
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
