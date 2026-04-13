import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { navItems } from '../types/navigation';
import { PageId } from '../types/navigation';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageId>('accueil');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) as PageId;
      setCurrentPage(hash || 'accueil');
    };
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 10);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      {/* Barre de progression */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-teal-100 w-full">
        <div
          className="h-full bg-teal-600 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <a href="#accueil" className="flex items-center gap-3 group">
            <img
              src={`${import.meta.env.BASE_URL}design_sans_titre_(1).png`}
              alt="Cap Confiance Logo"
              className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl font-semibold text-teal-700 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              Cap Confiance
            </span>
          </a>

          <nav className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-gray-600 hover:text-teal-700 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-teal-700 rounded-lg hover:bg-stone-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-1 border-t border-stone-100 pt-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-gray-600 hover:text-teal-700 hover:bg-stone-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
