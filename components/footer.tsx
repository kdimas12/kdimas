import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">
            Powered by{' '}
            <Link href="https://nextjs.org/">
              <a className="hover:text-gray-800">NextJs</a>
            </Link>
          </p>
        </div>
        <div className="items-center">
          <div className="flex flex-col-row">
            <Link href="/donate">
              <a className="my-1 text-gray-500 transition-colors duration-200 transform hover:text-blue-500 mx-2 md:mx-4 md:my-0">
                donate
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
