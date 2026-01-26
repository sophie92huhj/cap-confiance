export type PageId = 'accueil' | 'orientation' | 'accompagnements' | 'qui-suis-je' | 'faq' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { id: 'accueil', label: 'Accueil', path: '#accueil' },
  { id: 'orientation', label: 'Orientation', path: '#orientation' },
  { id: 'accompagnements', label: 'Accompagnements & Tarifs', path: '#accompagnements' },
  { id: 'qui-suis-je', label: 'Qui suis-je ?', path: '#qui-suis-je' },
  { id: 'faq', label: 'FAQ', path: '#faq' },
  { id: 'contact', label: 'Contact', path: '#contact' }
];
