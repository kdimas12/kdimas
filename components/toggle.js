import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Toogle() {
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
  return (
    <button aria-label="Toggle Dark Mode" type="button" onClick={switchTheme}>
      {isMounted &&
        (theme === 'dark' ? (
          // <i className="fas fa-sun text-gray-600"></i>
          <FaSun />
        ) : (
          // <i className="fas fa-moon text-gray-600"></i>
          <FaMoon />
        ))}
    </button>
  );
}
