export type PageId = 'accueil' | 'psychopedagogie' | 'orientation' | 'qui-suis-je' | 'faq' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { id: 'accueil', label: 'Accueil', path: '#accueil' },
  { id: 'psychopedagogie', label: 'Psychopédagogie', path: '#psychopedagogie' },
  { id: 'orientation', label: 'Orientation', path: '#orientation' },
  { id: 'qui-suis-je', label: 'Qui suis-je ?', path: '#qui-suis-je' },
  { id: 'faq', label: 'FAQ', path: '#faq' },
  { id: 'contact', label: 'Contact', path: '#contact' }
];
