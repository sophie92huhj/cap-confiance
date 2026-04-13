import { Brain, Heart, BookOpen, Target, Compass, Calendar, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { AnimatedSection } from '../components/AnimatedSection';

const situations = [
  { icon: Heart, text: "Votre enfant manque de confiance en lui et en ses apprentissages" },
  { icon: Compass, text: "Votre enfant a besoin d'apprendre à se connaître pour trouver sa voie" },
  { icon: TrendingUp, text: "Votre enfant bouge beaucoup et rencontre des difficultés pour se concentrer" },
  { icon: Target, text: "Vous êtes lycéen.ne ou étudiant.e et vous êtes perdu.e dans vos choix d'orientation" },
  { icon: BookOpen, text: "Votre enfant a du mal à lire, écrire, compter ou comprendre les consignes" },
  { icon: Calendar, text: "Le temps des devoirs est un moment compliqué" },
  { icon: Brain, text: "Votre adolescent a du mal à organiser ses révisions et est stressé par les examens" },
  { icon: Users, text: "Vous êtes sénior et souhaitez maintenir vos capacités cognitives" },
];

const StaggerCard = ({ situation, index }: { situation: typeof situations[0]; index: number }) => {
  const { ref, isInView } = useInView(0.1);
  const Icon = situation.icon;
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-stone-50 rounded-xl p-5 flex items-start gap-4 hover:bg-teal-50 hover:shadow-md transition-all duration-300 cursor-default
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transition: 'opacity 0.5s ease, transform 0.5s ease, background 0.2s, box-shadow 0.2s', transitionDelay: `${index * 70}ms` }}
    >
      <div className="bg-white rounded-full p-2.5 flex-shrink-0 shadow-sm group-hover:scale-110">
        <Icon className="text-teal-600" size={20} />
      </div>
      <p className="text-gray-700 leading-relaxed text-sm">{situation.text}</p>
    </div>
  );
};

export const Accueil = () => {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-stone-50 py-24 px-4 sm:px-6 lg:px-8">
        {/* Cercles décoratifs en arrière-plan */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-50 opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-teal-100 opacity-40 blur-3xl pointer-events-none" />

        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto text-center relative transition-all duration-800 ease-out ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDuration: '800ms' }}
        >
          <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Psychopédagogie & Orientation scolaire
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Apprendre avec{' '}
            <span className="relative text-teal-700">
              confiance
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6 Q50 2 100 5 Q150 8 198 4" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" fill="none"
                  style={{ strokeDasharray: 220, strokeDashoffset: heroInView ? 0 : 220, transition: 'stroke-dashoffset 0.8s ease 0.4s' }} />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            Être accompagné dans la compréhension de son fonctionnement cognitif et émotionnel
            pour qu'apprendre redevienne une source de confiance en soi et de bien-être.
          </p>

          {/* Liens rapides */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href="#psychopedagogie" className="inline-flex items-center gap-2 text-teal-700 border border-teal-200 bg-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-50 hover:border-teal-400 transition-all duration-200 shadow-sm hover:shadow">
              En quoi consiste la psychopédagogie ?
            </a>
            <a href="#orientation" className="inline-flex items-center gap-2 text-teal-700 border border-teal-200 bg-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-50 hover:border-teal-400 transition-all duration-200 shadow-sm hover:shadow">
              En quoi consiste l'orientation ?
            </a>
          </div>
        </div>
      </section>

      {/* ── 8 situations ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12" animation="fade-up">
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-3">Vous vous reconnaissez ?</p>
            <h2 className="text-3xl font-bold text-gray-900">Ces situations vous parlent…</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {situations.map((situation, index) => (
              <StaggerCard key={index} situation={situation} index={index} />
            ))}
          </div>

          <AnimatedSection animation="fade-up" className="text-center">
            <p className="text-lg text-gray-700 font-medium">
              Autant de raisons de consulter un psychopédagogue{' '}
              <span className="text-teal-700">ou un conseiller en orientation scolaire.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2 boutons ── */}
      <AnimatedSection animation="fade-up" className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#psychopedagogie"
              className="btn-shimmer flex-1 text-center bg-teal-700 text-white px-8 py-4 rounded-xl hover:bg-teal-800 transition-colors duration-200 font-semibold text-base shadow-md flex items-center justify-center gap-2 group"
            >
              Psychopédagogie
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#orientation"
              className="btn-shimmer flex-1 text-center bg-white border-2 border-teal-700 text-teal-700 px-8 py-4 rounded-xl hover:bg-teal-50 transition-colors duration-200 font-semibold text-base shadow-sm flex items-center justify-center gap-2 group"
            >
              Orientation
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* ── CTA Contact ── */}
      <AnimatedSection animation="fade-up" className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à prendre rendez-vous ?</h2>
          <p className="text-teal-100 mb-8 text-lg">
            N'hésitez pas à me contacter pour échanger sur vos besoins
          </p>
          <a
            href="#contact"
            className="btn-shimmer inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-3.5 rounded-xl hover:bg-stone-50 transition-colors duration-200 font-semibold text-base shadow-md group"
          >
            Me contacter
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </AnimatedSection>

    </div>
  );
};
