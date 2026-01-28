import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { navItems } from '../types/navigation';
import { PageId } from '../types/navigation';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageId>('accueil');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) as PageId;
      setCurrentPage(hash || 'accueil');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#accueil" className="flex items-center gap-3">
            <img
              src="/design_sans_titre_(1).png"
              alt="Cap Confiance Logo"
              className="h-16 w-16 object-contain"
            />
            <span className="text-2xl font-semibold text-teal-700">Cap Confiance</span>
          </a>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className={`text-gray-700 hover:text-teal-600 transition-colors font-medium pb-1 ${
                  currentPage === item.id ? 'border-b-2 border-teal-600 text-teal-600' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-gray-700 hover:text-teal-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className={`block py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium ${
                  currentPage === item.id ? 'text-teal-600 font-bold' : ''
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
