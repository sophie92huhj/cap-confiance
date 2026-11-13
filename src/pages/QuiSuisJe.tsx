import { GraduationCap, Heart, BookOpen, Award, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useInView } from '../hooks/useInView';

export const QuiSuisJe = () => {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);

  const parcours = [
    { year: "2025", items: ["Certificat Psychopédagogie et troubles du neurodéveloppement", "Certificat Conseillère en orientation scolaire indépendante (COSI)"] },
    { year: "2002", items: ["Diplôme de professeur des écoles"] },
    { year: "1995", items: ["Licence de sociologie"] },
  ];

  const stats = [
    { icon: BookOpen, title: "+ de 20 ans", sub: "d'expérience en enseignement" },
    { icon: Heart, title: "Écoute", sub: "bienveillante et personnalisée" },
    { icon: GraduationCap, title: "Double expertise", sub: "Psychopédagogie & Orientation" },
    { icon: Award, title: "Certifiée", sub: "Formations reconnues" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-teal-700 text-white">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-teal-600 opacity-30 blur-3xl pointer-events-none" />
        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center relative transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Qui suis-je ?</h1>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up" className="bg-stone-50 rounded-2xl p-8 md:p-12 mb-10">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="flex-shrink-0">
                <img
                  src="/elo.jpeg"
                  alt="Élodie, psychopédagogue et conseillère en orientation"
                  className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover shadow-md border-4 border-white"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h2 className="text-3xl font-bold text-teal-800 mb-2">Élodie</h2>
                <p className="text-gray-500 text-base">Psychopédagogue et conseillère en orientation scolaire</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                <><strong className="text-teal-700">Enseignante depuis plus de 20 ans</strong>, j'ai développé une solide expérience pédagogique et une connaissance fine du système scolaire. Cette longue pratique m'a permis d'observer les différentes façons d'apprendre des élèves et de comprendre les obstacles qu'ils peuvent rencontrer.</>,
                <>Désireuse d'aller plus loin dans l'accompagnement des apprenants, j'ai choisi de me former en <strong className="text-teal-700">psychopédagogie</strong> pour proposer un suivi individualisé et approfondi. Cette approche me permet de travailler sur les dimensions cognitives et émotionnelles des apprentissages.</>,
                <><strong className="text-teal-700">Maman de deux jeunes adultes</strong>, j'ai vécu de l'intérieur les questionnements liés à l'orientation et à la réorientation. Cette expérience personnelle m'a sensibilisée aux enjeux de ces moments clés.</>,
                <>C'est pourquoi j'ai également suivi une formation de <strong className="text-teal-700">conseillère en orientation scolaire indépendante (COSI)</strong>. Je suis convaincue que l'orientation et la psychopédagogie sont étroitement liées.</>,
              ].map((text, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-sm">{text}</p>
              ))}
            </div>
          </AnimatedSection>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((item, i) => {
              const { ref, isInView } = useInView(0.1);
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  ref={ref as React.RefObject<HTMLDivElement>}
                  className={`bg-stone-50 rounded-xl p-5 text-center hover:bg-teal-50 hover:shadow-md transition-all duration-300
                    ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="bg-white rounded-full p-3 inline-block mb-3 shadow-sm">
                    <Icon className="text-teal-600" size={22} />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 title-underline">Mon parcours</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {parcours.map((entry, index) => {
              const { ref, isInView } = useInView(0.1);
              return (
                <div
                  key={index}
                  ref={ref as React.RefObject<HTMLDivElement>}
                  className={`flex gap-5 transition-all duration-500
                    ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="bg-teal-700 text-white font-semibold px-4 py-2 rounded-lg text-sm">{entry.year}</div>
                  </div>
                  <div className="flex-grow space-y-2">
                    {entry.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white rounded-xl p-4 border-l-4 border-teal-500 shadow-sm hover:shadow transition-shadow">
                        <p className="text-gray-700 text-sm font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Citation + CTA */}
      <AnimatedSection animation="fade-up" className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-700 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Ma conviction</h2>
          <p className="text-lg text-teal-100 leading-relaxed italic mb-10">
            « L'orientation et la psychopédagogie sont étroitement liées : mieux se connaître,
            c'est aussi mieux comprendre ses aspirations et construire un projet qui nous ressemble. »
          </p>
          <a href="#contact" className="btn-shimmer inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-3.5 rounded-xl hover:bg-stone-50 transition-colors duration-200 font-semibold text-base shadow-md group">
            Prenons contact
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </AnimatedSection>

    </div>
  );
};
