export default function Footer() {
  return (
    <footer className="py-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">
            © 2022 Dimas - Powered by
            <a className="text-gray-700 hover:text-gray-800" href="https://nextjs.org/"> NextJs</a>
          </p>
        </div>
        <div className="items-center">
          <div className="flex flex-col-row">
            <a className="my-1 text-gray-500 hover:text-gray-900 md:my-0" href="/donate">Donate</a>
          </div>
        </div>
      </div>
    </footer>
  )
}