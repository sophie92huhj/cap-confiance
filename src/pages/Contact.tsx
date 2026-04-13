import { Mail, Phone, MapPin, Clock, Video, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useInView } from '../hooks/useInView';

export const Contact = () => {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);

  const cards = [
    {
      icon: Mail, title: "Email", label: "elodie.capconfiance@gmail.com",
      href: "mailto:elodie.capconfiance@gmail.com",
    },
    {
      icon: Phone, title: "Téléphone", label: "07 45 13 05 51",
      href: "tel:0745130551",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-teal-700 text-white">
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-600 opacity-30 blur-3xl pointer-events-none" />
        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center relative transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-teal-100 text-lg">Prenons contact pour échanger sur vos besoins</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Colonne gauche */}
            <div className="space-y-4">
              <AnimatedSection animation="fade-left" className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <h2 className="text-lg font-bold text-teal-800 mb-5">Coordonnées</h2>
                <div className="space-y-4">
                  {cards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="bg-teal-50 rounded-full p-2.5 flex-shrink-0">
                          <Icon className="text-teal-600" size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">{card.title}</p>
                          <a href={card.href} className="text-teal-700 hover:text-teal-800 transition-colors text-sm font-medium hover:underline">
                            {card.label}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={100} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-50 rounded-full p-2.5 flex-shrink-0">
                    <MapPin className="text-teal-600" size={18} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-teal-800 mb-2">Adresse</h2>
                    <p className="text-sm font-medium text-gray-700">Cabinet situé au médipôle de Lançon-Provence</p>
                    <p className="text-sm text-gray-500 mt-1">Allée Francisco Caravaca</p>
                    <p className="text-sm text-gray-500">13680 Lançon-Provence</p>
                    <p className="text-xs text-gray-400 mt-1">1er étage (à côté du Carrefour Contact)</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Colonne droite */}
            <div className="space-y-4">
              <AnimatedSection animation="fade-right" className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-teal-50 rounded-full p-2.5 flex-shrink-0">
                    <Clock className="text-teal-600" size={18} />
                  </div>
                  <h2 className="text-lg font-bold text-teal-800">Horaires</h2>
                </div>
                <p className="text-xs text-gray-400 mb-3">Sur rendez-vous uniquement</p>
                <div className="bg-stone-50 rounded-xl p-4 hover:bg-teal-50 transition-colors duration-200">
                  <p className="text-sm font-medium text-gray-700">Au cabinet</p>
                  <p className="text-sm text-gray-500 mt-1">Mercredi et samedi : 9h – 19h</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={100} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-teal-50 rounded-full p-2.5 flex-shrink-0">
                    <Video className="text-teal-600" size={18} />
                  </div>
                  <h2 className="text-lg font-bold text-teal-800">Téléconsultation</h2>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Les séances en visioconférence sont possibles, notamment pour les bilans d'orientation. N'hésitez pas à me contacter pour en discuter.
                </p>
              </AnimatedSection>

            </div>
          </div>
        </div>
      </section>

      {/* Étapes */}
      <AnimatedSection animation="fade-up" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Première prise de contact</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
            Lors de notre premier échange, nous prendrons le temps de discuter de vos besoins, de vos attentes et de la situation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
            {[
              { n: 1, label: "Contactez-moi" },
              { n: 2, label: "Échangeons sur vos besoins" },
              { n: 3, label: "Fixons un rendez-vous" },
            ].map((step, i) => {
              const { ref, isInView } = useInView(0.1);
              return (
                <div
                  key={step.n}
                  ref={ref as React.RefObject<HTMLDivElement>}
                  className={`text-center transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="bg-teal-700 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-white font-bold text-sm">{step.n}</span>
                  </div>
                  <p className="text-gray-700 font-medium text-sm">{step.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA final */}
      <AnimatedSection animation="fade-up" className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-700 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Prête à vous accompagner</h2>
          <p className="text-teal-100 text-sm mb-6">Contactez-moi par téléphone, SMS ou email</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0745130551" className="btn-shimmer inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-xl hover:bg-stone-50 transition-colors duration-200 font-semibold text-sm shadow-md group">
              <Phone size={16} />
              07 45 13 05 51
            </a>
            <a href="mailto:elodie.capconfiance@gmail.com" className="btn-shimmer inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl hover:bg-teal-500 transition-colors duration-200 font-semibold text-sm shadow-md border border-teal-500 group">
              <Mail size={16} />
              Envoyer un email
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
};
