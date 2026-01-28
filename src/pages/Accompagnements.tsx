import { Baby, GraduationCap, Brain, Heart, Target, BookOpen, Euro, Lightbulb } from 'lucide-react';

export const Accompagnements = () => {
  const axesTravail = [
    {
      icon: Brain,
      title: "Renforcement des fonctions exécutives",
      description: "Mémoire de travail, attention, inhibition, planification"
    },
    {
      icon: Lightbulb,
      title: "Compréhension du fonctionnement cognitif",
      description: "Identifier ses forces et ses besoins pour mieux apprendre"
    },
    {
      icon: Heart,
      title: "Compréhension et régulation émotionnelle",
      description: "Apprendre à reconnaître et gérer ses émotions"
    },
    {
      icon: BookOpen,
      title: "Organisation du travail et méthodologie",
      description: "Développer des stratégies d'apprentissage efficaces"
    },
    {
      icon: Target,
      title: "Estime de soi, motivation et confiance",
      description: "Retrouver le plaisir d'apprendre et croire en ses capacités"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Accompagnements & Tarifs</h1>
          <p className="text-xl md:text-2xl text-teal-50 leading-relaxed">
            Psychopédagogie : un accompagnement personnalisé pour tous les âges
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-full p-4">
                <Baby className="text-teal-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-teal-800">
                Les Enfants
                <span className="block text-lg text-gray-600 font-normal mt-1">
                  Maternelle à primaire
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Accompagnement visant à comprendre les blocages, renforcer la confiance en soi et les
              capacités d'apprentissage. Possibilité de réaliser un bilan psychopédagogique pour adapter
              le suivi aux besoins spécifiques de l'enfant.
            </p>

            <h3 className="text-2xl font-bold text-teal-800 mb-6">Axes de travail</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {axesTravail.map((axe, index) => {
                const Icon = axe.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-5 flex items-start gap-4"
                  >
                    <div className="bg-white rounded-full p-2 flex-shrink-0">
                      <Icon className="text-teal-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-800 mb-1">{axe.title}</h4>
                      <p className="text-sm text-gray-700">{axe.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 border-l-4 border-teal-600">
              <div className="flex items-center gap-3 mb-3">
                <Euro className="text-teal-600" size={28} />
                <h3 className="text-2xl font-bold text-teal-800">Tarifs</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white rounded-lg p-4">
                  <div>
                    <p className="font-semibold text-gray-800">Bilan psychopédagogique</p>
                    <p className="text-sm text-gray-600">2 séances d'1h</p>
                  </div>
                  <p className="text-2xl font-bold text-teal-700">100 €</p>
                </div>
                <div className="flex justify-between items-center bg-white rounded-lg p-4">
                  <div>
                    <p className="font-semibold text-gray-800">Séance de suivi</p>
                    <p className="text-sm text-gray-600">50 min à 1h</p>
                  </div>
                  <p className="text-2xl font-bold text-teal-700">45 €</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-full p-4">
                <GraduationCap className="text-teal-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-teal-800">
                Collégiens / Lycéens / Étudiants
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Accompagnement pour apprendre à apprendre, s'organiser, reprendre confiance, gérer le stress
              des examens et travailler la connaissance de soi et l'orientation. Les séances sont adaptées
              aux enjeux spécifiques de chaque âge : gestion du stress, méthodologie, préparation aux examens,
              et construction d'un projet d'orientation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6 text-center">
                <Brain className="text-teal-600 mx-auto mb-3" size={36} />
                <h4 className="font-semibold text-teal-800 mb-2">Méthodologie</h4>
                <p className="text-sm text-gray-700">
                  Apprendre à organiser son travail et ses révisions efficacement
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6 text-center">
                <Heart className="text-teal-600 mx-auto mb-3" size={36} />
                <h4 className="font-semibold text-teal-800 mb-2">Confiance en soi</h4>
                <p className="text-sm text-gray-700">
                  Reprendre confiance et retrouver la motivation
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6 text-center">
                <Target className="text-teal-600 mx-auto mb-3" size={36} />
                <h4 className="font-semibold text-teal-800 mb-2">Orientation</h4>
                <p className="text-sm text-gray-700">
                  Construire son projet et trouver sa voie
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 border-l-4 border-teal-600">
              <div className="flex items-center gap-3 mb-3">
                <Euro className="text-teal-600" size={28} />
                <h3 className="text-2xl font-bold text-teal-800">Tarif</h3>
              </div>
              <div className="flex justify-between items-center bg-white rounded-lg p-4">
                <div>
                  <p className="font-semibold text-gray-800">Séance de suivi</p>
                  <p className="text-sm text-gray-600">1h</p>
                </div>
                <p className="text-2xl font-bold text-teal-700">45 €</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-teal-50/50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Modalités pratiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold text-xl mb-3 text-teal-800">Paiement</h3>
              <p className="text-gray-700">
                Chèque, espèces ou virement bancaire. Le règlement s'effectue à l'issue de chaque séance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold text-xl mb-3 text-teal-800">Annulation</h3>
              <p className="text-gray-700">
                Toute séance non annulée 48h à l'avance sera due.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Prêt à commencer l'accompagnement ?
          </p>
          <a
            href="#contact"
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 hover:scale-110 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </div>
  );
};
