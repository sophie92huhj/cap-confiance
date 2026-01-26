import { useState, useEffect } from 'react';
import { PageId } from '../types/navigation';

export const useNavigation = () => {
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

  return currentPage;
};
