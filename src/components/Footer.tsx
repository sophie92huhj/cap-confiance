import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Cap Confiance</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Psychopédagogie & Orientation scolaire
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:elodie.capconfiance@gmail.com" className="flex items-center gap-2 text-stone-400 hover:text-teal-400 transition-colors text-sm">
                <Mail size={16} />
                <span>elodie.capconfiance@gmail.com</span>
              </a>
              <a href="tel:0745130551" className="flex items-center gap-2 text-stone-400 hover:text-teal-400 transition-colors text-sm">
                <Phone size={16} />
                <span>07 45 13 05 51</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Adresse</h3>
            <div className="flex items-start gap-2 text-stone-400 text-sm">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <div>
                <p>Médipôle de Lançon-Provence</p>
                <p>Allée Francisco Caravaca</p>
                <p>13680 Lançon-Provence</p>
                <p className="text-stone-500 mt-1">(1er étage, à côté du Carrefour Contact)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-6 text-center text-stone-500 text-xs">
          <p>&copy; 2025 Cap Confiance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
