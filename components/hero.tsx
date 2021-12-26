import Link from 'next/link';

export default function Hero() {
  return (
    <div className="md:mt-10 mt-5 flex-grow px-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">
        Hai, Saya Dimas Kurniawan
      </h1>
      <p className="text-gray-700 md:text-lg mb-5">
        Blog ini berisi tulisan dan dokumentasi tentang apa yang saya pelajari
        tentang Javascript, Typescript, NextJs dan Python.
      </p>
      <Link href="/">
        <a className="text-gray-700 text-sm bg-gray-200 hover:bg-gray-300 rounded-sm px-3 py-1.5 mr-2">
          Tentang Saya
        </a>
      </Link>
      <Link href="https://github.com/kdimas12">
        <a className="text-gray-700 text-sm bg-gray-200 hover:bg-gray-300 rounded-sm px-3 py-1.5 mr-2">
          Github
        </a>
      </Link>
    </div>
  );
}
