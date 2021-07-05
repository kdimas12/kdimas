import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  // const toggleButton = () => {
  //   {
  //     theme === 'dark' ? (
  //       <i className="fas fa-sun text-gray-600"></i>
  //     ) : (
  //       <i className="fas fa-moon text-gray-600"></i>
  //     );
  //   }
  // };

  return (
    <nav className="flex justify-between">
      <div className="flex items-center space-x-3">
        <Link href="/">
          <a>
            <span className="font-bold">Dimas</span>
          </a>
        </Link>
      </div>
      <div className="flex items-center space-x-3">
        <Link href="/posts">
          <a className="p-2 md:mx-4 opacity-70 hover:opacity-100">
            <span className="font-normal">Blog</span>
          </a>
        </Link>
        <Link href="/about">
          <a className="p-2 md:mx-4 opacity-70 hover:opacity-100">
            <span className="font-normal">About</span>
          </a>
        </Link>
        <Link href="/contact">
          <a className="p-2 md:mx-4 opacity-70 hover:opacity-100">
            <span className="font-normal">Contact</span>
          </a>
        </Link>
        {/* {ThemeChanger()} */}
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="p-3 h-12 w-12 order-2 md:order-3"
          onClick={switchTheme}
        >
          {isMounted &&
            (theme === 'dark' ? (
              <i className="fas fa-sun text-gray-600"></i>
            ) : (
              <i className="fas fa-moon text-gray-600"></i>
            ))}
        </button>
      </div>
    </nav>
  );
}
