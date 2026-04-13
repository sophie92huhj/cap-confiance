import { useState } from 'react';
import { Baby, GraduationCap, Brain, Heart, Target, BookOpen, Euro, Lightbulb, FileText, Wrench, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useInView } from '../hooks/useInView';

type Category = 'enfants' | 'collegiens';

const axesTravail = [
  { icon: Brain, title: "Renforcement des fonctions exécutives", description: "Mémoire de travail, attention, inhibition, planification" },
  { icon: Lightbulb, title: "Compréhension du fonctionnement cognitif", description: "Identifier ses forces et ses besoins pour mieux apprendre" },
  { icon: Heart, title: "Compréhension et régulation émotionnelle", description: "Apprendre à reconnaître et gérer ses émotions" },
  { icon: BookOpen, title: "Organisation du travail et méthodologie", description: "Développer des stratégies d'apprentissage efficaces" },
  { icon: Target, title: "Estime de soi, motivation et confiance", description: "Retrouver le plaisir d'apprendre et croire en ses capacités" },
  { icon: Wrench, title: "Remédiation", description: "Renforcement des compétences fragiles avec un enseignement explicite et des outils adaptés" },
  { icon: FileText, title: "Bilan psychopédagogique si besoin", description: "Pour permettre d'orienter la prise en charge de façon efficace" },
];

const AxeCard = ({ axe, index }: { axe: typeof axesTravail[0]; index: number }) => {
  const { ref, isInView } = useInView(0.1);
  const Icon = axe.icon;
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-stone-50 rounded-xl p-4 flex items-start gap-3 transition-all duration-500 hover:bg-teal-50 hover:shadow-sm
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="bg-white rounded-full p-2 flex-shrink-0 shadow-sm">
        <Icon className="text-teal-600" size={18} />
      </div>
      <div>
        <h4 className="font-medium text-gray-800 text-sm mb-0.5">{axe.title}</h4>
        <p className="text-xs text-gray-500">{axe.description}</p>
      </div>
    </div>
  );
};

export const Psychopedagogie = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('enfants');
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-teal-700 text-white">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-teal-600 opacity-30 blur-3xl pointer-events-none" />
        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center relative transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Psychopédagogie</h1>
          <p className="text-lg text-teal-100 leading-relaxed">Un accompagnement personnalisé pour tous les âges</p>
        </div>
      </section>

      {/* Définition */}
      <AnimatedSection animation="fade-up" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center title-underline">
            En quoi consiste la psychopédagogie ?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10 text-base">
            La psychopédagogie consiste à accompagner les apprenants et apprenantes de tout âge
            (enfants, adolescents, adultes, séniors), afin de lever les blocages limitants et de
            mieux comprendre leur fonctionnement cognitif. Elle s'adresse aux personnes rencontrant
            des troubles des apprentissages, des blocages émotionnels, une perte de confiance en soi,
            des difficultés d'organisation, de concentration, une volonté de stimuler leur mémoire ou
            un besoin de trouver leur orientation. L'accompagnement repose sur une écoute bienveillante,
            des outils personnalisés et un travail de remédiation.
          </p>
          <div className="border-l-4 border-teal-500 pl-6 py-2 bg-teal-50 rounded-r-xl">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              « Utiliser la pédagogie non plus seulement comme support pour transmettre un savoir,
              mais comme médiation pour que cela ait des incidences positives sur l'ensemble de la personnalité »
            </p>
            <p className="text-teal-700 font-semibold mt-3 text-sm">– Serge Boimare</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Toggle + contenu */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up" className="flex justify-center mb-10">
            <div className="bg-white rounded-full p-1.5 shadow-sm border border-stone-200 inline-flex">
              <button
                onClick={() => setSelectedCategory('enfants')}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 ${
                  selectedCategory === 'enfants' ? 'bg-teal-700 text-white shadow-sm' : 'text-gray-500 hover:text-teal-700'
                }`}
              >
                Enfants
              </button>
              <button
                onClick={() => setSelectedCategory('collegiens')}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 ${
                  selectedCategory === 'collegiens' ? 'bg-teal-700 text-white shadow-sm' : 'text-gray-500 hover:text-teal-700'
                }`}
              >
                Collégiens / Lycéens / Étudiants
              </button>
            </div>
          </AnimatedSection>

          {selectedCategory === 'enfants' && (
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-10 animate-fadeIn">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-teal-50 rounded-full p-3">
                  <Baby className="text-teal-600" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-teal-800">Les Enfants</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Maternelle à primaire</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                Accompagnement visant à comprendre les blocages, renforcer la confiance en soi et les
                capacités d'apprentissage. Possibilité de réaliser un bilan psychopédagogique pour adapter
                le suivi aux besoins spécifiques de l'enfant.
              </p>
              <h3 className="text-lg font-semibold text-teal-800 mb-4">Axes de travail</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {axesTravail.map((axe, index) => <AxeCard key={index} axe={axe} index={index} />)}
              </div>
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                <div className="flex items-center gap-2 mb-4">
                  <Euro className="text-teal-600" size={20} />
                  <h3 className="text-lg font-semibold text-teal-800">Tarifs</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-sm hover:shadow transition-shadow">
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Bilan psychopédagogique</p>
                      <p className="text-xs text-gray-500 mt-0.5">2 séances d'1h + bilan écrit</p>
                    </div>
                    <p className="text-xl font-bold text-teal-700">150 €</p>
                  </div>
                  <div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-sm hover:shadow transition-shadow">
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Séance de suivi</p>
                      <p className="text-xs text-gray-500 mt-0.5">50 min à 1h</p>
                    </div>
                    <p className="text-xl font-bold text-teal-700">45 €</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCategory === 'collegiens' && (
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-10 animate-fadeIn">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-teal-50 rounded-full p-3">
                  <GraduationCap className="text-teal-600" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-teal-800">Collégiens / Lycéens / Étudiants</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                Accompagnement pour apprendre à apprendre, s'organiser, reprendre confiance, gérer le stress
                des examens et travailler la connaissance de soi et l'orientation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Brain, title: "Méthodologie", desc: "Organiser son travail et ses révisions efficacement" },
                  { icon: Heart, title: "Confiance en soi", desc: "Reprendre confiance et retrouver la motivation" },
                  { icon: Target, title: "Orientation", desc: "Construire son projet et trouver sa voie" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="bg-stone-50 rounded-xl p-5 text-center hover:bg-teal-50 transition-colors duration-200">
                      <Icon className="text-teal-600 mx-auto mb-3" size={28} />
                      <h4 className="font-medium text-gray-800 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                <div className="flex items-center gap-2 mb-4">
                  <Euro className="text-teal-600" size={20} />
                  <h3 className="text-lg font-semibold text-teal-800">Tarif</h3>
                </div>
                <div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-sm hover:shadow transition-shadow">
                  <div>
                    <p className="font-medium text-gray-800 text-sm">Séance de suivi</p>
                    <p className="text-xs text-gray-500 mt-0.5">1h</p>
                  </div>
                  <p className="text-xl font-bold text-teal-700">45 €</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modalités */}
      <AnimatedSection animation="fade-up" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">Modalités pratiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-stone-50 rounded-xl p-6 hover:bg-teal-50 transition-colors duration-200">
              <h3 className="font-semibold text-gray-800 mb-2">Paiement</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Chèque, espèces ou virement bancaire. Le règlement s'effectue à l'issue de chaque séance.</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-6 hover:bg-teal-50 transition-colors duration-200">
              <h3 className="font-semibold text-gray-800 mb-2">Annulation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Toute séance non annulée 48h à l'avance sera due.</p>
            </div>
          </div>
          <div className="text-center">
            <a href="#contact" className="btn-shimmer inline-flex items-center gap-2 bg-teal-700 text-white px-8 py-3.5 rounded-xl hover:bg-teal-800 transition-colors duration-200 font-semibold text-base shadow-md group">
              Prendre rendez-vous
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
};
