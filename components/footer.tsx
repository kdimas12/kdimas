import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-5 px-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">
            &copy; 2021 Dimas - Powered by{' '}
            <Link href="https://nextjs.org/">
              <a className="hover:text-gray-800">NextJs</a>
            </Link>
          </p>
        </div>
        <div className="items-center">
          <div className="flex flex-col-row">
            <Link href="/donate">
              <a className="my-1 text-gray-500 hover:text-gray-900 mx-2 md:mx-4 md:my-0">
                Donate
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
