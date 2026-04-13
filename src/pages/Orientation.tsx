import { Users, Target, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useInView } from '../hooks/useInView';

export const Orientation = () => {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);

  const benefices = [
    "Mieux se connaître : identifier ses centres d'intérêt, ses valeurs et ses compétences",
    "Redonner du sens au parcours scolaire et retrouver la motivation",
    "Découvrir des métiers et secteurs d'activité en adéquation avec son profil",
    "Construire un projet d'orientation réaliste et réalisable",
    "Gagner en confiance pour faire des choix éclairés",
    "Être accompagné dans les démarches d'orientation (Parcoursup, choix de spécialités...)"
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-teal-700 text-white">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-teal-600 opacity-30 blur-3xl pointer-events-none" />
        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center relative transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bilan d'Orientation</h1>
          <p className="text-lg text-teal-100 leading-relaxed">Trouver sa voie et construire un projet d'avenir qui vous ressemble</p>
        </div>
      </section>

      {/* 3 piliers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Users, title: "Public", text: "Collégien.ne.s, lycéen.ne.s et étudiant.e.s", delay: 0 },
              { icon: Target, title: "Objectif", text: "Définir un projet d'études ou de formation adapté à votre profil", delay: 100 },
              { icon: Lightbulb, title: "Approche", text: "Mieux se connaître pour mieux s'orienter", delay: 200 },
            ].map((item, i) => {
              const { ref, isInView } = useInView(0.1);
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  ref={ref as React.RefObject<HTMLDivElement>}
                  className={`bg-stone-50 rounded-xl p-6 text-center hover:bg-teal-50 hover:shadow-md transition-all duration-300
                    ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transition: 'opacity 0.5s ease, transform 0.5s ease, background 0.2s, box-shadow 0.2s', transitionDelay: `${item.delay}ms` }}
                >
                  <div className="bg-white rounded-full p-3 inline-block mb-3 shadow-sm">
                    <Icon className="text-teal-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up" className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center title-underline">
              Intéressé(e) par un bilan d'orientation ?
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <p className="text-gray-600 text-sm mb-3">Vous entendez parler de bilan d'orientation scolaire, mais sans savoir exactement de quoi il s'agit…</p>
              <p className="text-gray-600 text-sm mb-3">Vous voulez en savoir plus ? Comprendre les tenants et les aboutissements ?</p>
              <p className="font-semibold text-teal-700 text-sm">C'est parti ! Je réponds ci-dessous à toutes vos questions.</p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {/* Q1 */}
            <AnimatedSection animation="fade-up" delay={0} className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <h3 className="text-xl font-bold text-teal-800 mb-4">1) À qui est-il destiné ?</h3>
              <p className="text-gray-600 text-sm mb-3">Il est destiné aux <strong className="text-gray-800">collégiens, lycéens, et étudiants en réorientation.</strong></p>
              <ul className="space-y-2.5">
                {[
                  { niveau: "3e", texte: "de choisir leur poursuite d'études : lycée général et technologique ou lycée professionnel ou CAP." },
                  { niveau: "Seconde", texte: "de sélectionner les enseignements de spécialités pour la classe de première." },
                  { niveau: "Première", texte: "de repérer les filières de formation et d'anticiper sur les attendus des établissements supérieurs." },
                  { niveau: "Terminale", texte: "d'élaborer des scénarios pragmatiques en tenant compte de leur projet d'études et de leurs capacités scolaires." },
                  { niveau: "Étudiants en réorientation", texte: "de trouver rapidement une autre voie vraiment adaptée à leur profil." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-600 text-sm">Aux élèves de <strong className="text-gray-800">{item.niveau}</strong> {item.texte}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Q2 */}
            <AnimatedSection animation="fade-up" delay={0} className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <h3 className="text-xl font-bold text-teal-800 mb-4">2) À quoi sert un bilan d'orientation ?</h3>
              <ul className="space-y-1.5 mb-5 text-gray-500 text-sm">
                {[
                  "J'ai un projet précis mais j'aimerais être sûr(e) qu'il me convienne",
                  "Je n'ai aucun projet professionnel pour l'avenir et cela m'angoisse",
                  "Quelles spécialités choisir en fin de seconde ?",
                  "Vers quelles études me tourner après le bac ?",
                  "Je me suis trompé(e) dans mon orientation postbac. Puis-je changer de filière ?",
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-teal-400 mt-0.5">•</span><span>{q}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-teal-50 rounded-xl p-4 mb-5 text-center border border-teal-100">
                <p className="font-semibold text-teal-800 text-sm">Alors le bilan d'orientation est fait pour vous !</p>
              </div>
              <p className="text-gray-600 text-sm mb-3">En 3 séances, vous obtiendrez :</p>
              <ul className="space-y-1.5 mb-5 text-gray-500 text-sm">
                <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">•</span><span>un véritable tour d'horizon de votre personnalité</span></li>
                <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">•</span><span>3 secteurs professionnels spécialement identifiés pour vous.</span></li>
              </ul>
              <div className="bg-stone-50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-3 text-sm">Les bénéfices :</p>
                <ul className="space-y-2">
                  {["l'élève reprend confiance en lui,", "il retrouve du sens aux apprentissages scolaires,", "et il bâtit un projet d'orientation réaliste."].map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-600 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Q3 */}
            <AnimatedSection animation="fade-up" delay={0} className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <h3 className="text-xl font-bold text-teal-800 mb-4">3) Concrètement, comment ça marche ?</h3>
              <p className="text-gray-600 text-sm mb-6">En présentiel ou en visioconférence (Zoom), en 3 étapes :</p>
              <div className="space-y-3">
                {[
                  { n: 1, text: "Entretien approfondi avec l'élève (1h30 à 2h)" },
                  { n: 2, text: "Questionnaires psychométriques pour cerner l'ensemble de la personnalité (1h à 1h30)" },
                  { n: 3, text: "Restitution orale avec l'élève et ses parents + dossier récapitulatif complet (1h30)" },
                ].map((step, i) => {
                  const { ref, isInView } = useInView(0.1);
                  return (
                    <div
                      key={step.n}
                      ref={ref as React.RefObject<HTMLDivElement>}
                      className={`flex items-start gap-4 bg-stone-50 rounded-xl p-4 hover:bg-teal-50 transition-all duration-300
                        ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className="bg-teal-700 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        {step.n}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Q4 */}
            <AnimatedSection animation="fade-up" delay={0} className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <h3 className="text-xl font-bold text-teal-800 mb-4">4) Pourquoi attendre ? Passez à l'action !</h3>
              <p className="text-gray-600 text-sm mb-3">Sortez du brouillard, gagnez en motivation et en confiance.</p>
              <p className="font-semibold text-teal-700 text-sm mb-4">Vous verrez, il y aura un avant et un après.</p>
              <div className="bg-stone-50 rounded-xl p-5">
                <p className="text-gray-600 text-sm mb-2">Si vous souhaitez me rencontrer avant de réserver, c'est tout à fait possible. Prenez RDV pour une séance découverte offerte.</p>
                <p className="text-gray-500 text-sm italic">Nous verrons ensemble comment je peux vous aider dans ce processus de réflexion tellement important pour votre avenir.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 title-underline">Les bénéfices du bilan</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {benefices.map((benefit, index) => {
              const { ref, isInView } = useInView(0.1);
              return (
                <div
                  key={index}
                  ref={ref as React.RefObject<HTMLDivElement>}
                  className={`bg-stone-50 rounded-xl p-4 flex items-start gap-3 hover:bg-teal-50 transition-all duration-300
                    ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <CheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-gray-600 text-sm">{benefit}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tarif + CTA */}
      <AnimatedSection animation="fade-up" className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-700 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Tarif</h2>
          <p className="text-6xl font-bold mb-1">450 €</p>
          <p className="text-teal-100 mb-1">le bilan complet</p>
          <p className="text-teal-200 text-sm mb-8">Incluant les 3 séances et le compte-rendu détaillé</p>
          <a href="#contact" className="btn-shimmer inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-3.5 rounded-xl hover:bg-stone-50 transition-colors duration-200 font-semibold text-base shadow-md group">
            Prendre rendez-vous
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </AnimatedSection>

    </div>
  );
};
