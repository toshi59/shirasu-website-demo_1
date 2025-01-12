import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="/" 
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-indigo-600' : 'text-white'
              }`}
            >
              しらす株式会社
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link 
                href="/about" 
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? isActive('/about') : 'text-white hover:text-white/80'
                }`}
              >
                会社概要
              </Link>
              <Link 
                href="/works" 
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? isActive('/works') : 'text-white hover:text-white/80'
                }`}
              >
                実績
              </Link>
              <Link 
                href="/tools" 
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? isActive('/tools') : 'text-white hover:text-white/80'
                }`}
              >
                ツール
              </Link>
              <Link 
                href="/contact" 
                className={`button-primary ${
                  isScrolled ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'
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
