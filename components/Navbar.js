import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="py-4 flex items-center justify-between">
      <div>
        <Link href="/">
          <a className="text-xl font-semibold text-gray-900">Dimas</a>
        </Link>
      </div>
      <div className="flex flex-col-row">
        <Link href="/blog">
          <a className="ml-5 text-gray-600 hover:text-gray-900 hover:underline">Blog</a>
        </Link>
        <Link href="/projek">
          <a className="ml-5 text-gray-600 hover:text-gray-900 hover:underline">Projek</a>
        </Link>
      </div>
    </nav>
  )
}