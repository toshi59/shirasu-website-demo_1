import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = router.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return router.pathname === path ? 'active-nav-link' : 'nav-link';
  };

  const navBackground = isHome
    ? isScrolled
      ? 'bg-white shadow-md'
      : 'bg-transparent bg-opacity-0'
    : 'bg-white shadow-md';

  const linkColor = isHome && !isScrolled
    ? 'text-white hover:text-white/80'
    : 'text-gray-600 hover:text-indigo-600';

  const logoColor = isHome && !isScrolled
    ? 'text-white'
    : 'text-indigo-600';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className={`text-2xl font-bold transition-colors duration-300 ${logoColor}`}
            >
              しらす株式会社
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link 
                href="/about" 
                className={`font-medium transition-colors duration-300 ${linkColor}`}
              >
                会社概要
              </Link>
              <Link 
                href="/works" 
                className={`font-medium transition-colors duration-300 ${linkColor}`}
              >
                実績
              </Link>
              <Link 
                href="/tools" 
                className={`font-medium transition-colors duration-300 ${linkColor}`}
              >
                ツール
              </Link>
              <Link 
                href="/contact" 
                className={`button-primary ${
                  isHome && !isScrolled
                    ? 'bg-white text-indigo-600'
                    : 'bg-indigo-600 text-white'
                }`}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
