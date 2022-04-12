import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <div className='px-6'>
        <div className='max-w-screen-sm mx-auto'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}