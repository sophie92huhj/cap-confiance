import { Users, Target, Lightbulb, FileText, Clock, CheckCircle } from 'lucide-react';

export const Orientation = () => {
  const sessions = [
    {
      number: 1,
      title: "Prise de contact",
      duration: "30 minutes",
      description: "Premier échange pour comprendre vos besoins et vos attentes"
    },
    {
      number: 2,
      title: "Entretien avec le jeune",
      duration: "1h30 à 2h",
      description: "Exploration approfondie des centres d'intérêt, des valeurs et du parcours"
    },
    {
      number: 3,
      title: "Passation de tests",
      duration: "1h",
      description: "Tests d'orientation et outils de photo-langage pour identifier les environnements professionnels"
    },
    {
      number: 4,
      title: "Restitution du bilan",
      duration: "environ 1h30",
      description: "Présentation des résultats avec le jeune et les parents, remise d'un compte-rendu détaillé"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-600 via-teal-700 to-white text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bilan d'Orientation</h1>
          <p className="text-xl md:text-2xl text-teal-50 leading-relaxed">
            Trouver sa voie et construire un projet d'avenir qui vous ressemble
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-full p-4 inline-block mb-4">
                <Users className="text-teal-600" size={32} />
              </div>
              <h3 className="font-bold text-teal-800 mb-2">Public</h3>
              <p className="text-gray-700">Collégien.ne.s, lycéen.ne.s et étudiant.e.s</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-full p-4 inline-block mb-4">
                <Target className="text-teal-600" size={32} />
              </div>
              <h3 className="font-bold text-teal-800 mb-2">Objectif</h3>
              <p className="text-gray-700">
                Définir un projet d'études ou de formation adapté à votre profil
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-full p-4 inline-block mb-4">
                <Lightbulb className="text-teal-600" size={32} />
              </div>
              <h3 className="font-bold text-teal-800 mb-2">Approche</h3>
              <p className="text-gray-700">
                Mieux se connaître pour mieux s'orienter
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-white to-blue-50/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Méthode</h2>
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Les séances sont personnalisées et utilisent notamment un outil de <strong className="text-teal-700">photo-langage</strong> illustrant
              des environnements professionnels et des gestes métiers. Cette méthode est particulièrement adaptée
              aux jeunes ayant des troubles de l'expression écrite.
            </p>
            <div className="flex items-start gap-3 bg-white rounded-lg p-4">
              <FileText className="text-teal-600 flex-shrink-0 mt-1" size={24} />
              <p className="text-gray-700">
                Les notes sont prises par la professionnelle tout au long du processus. Un <strong>compte-rendu
                détaillé</strong> est remis à l'issue du bilan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 via-blue-50 to-teal-50/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-12 text-center">
            Déroulé du bilan d'orientation
          </h2>
          <div className="space-y-6">
            {sessions.map((session) => (
              <div
                key={session.number}
                className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center">
                      {session.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-teal-800">{session.title}</h3>
                      <div className="flex items-center gap-2 text-teal-600 mt-2 md:mt-0">
                        <Clock size={18} />
                        <span className="font-semibold">{session.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{session.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50/50 via-teal-50 to-teal-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">
            Les bénéfices du bilan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Mieux se connaître : identifier ses centres d'intérêt, ses valeurs et ses compétences",
              "Redonner du sens au parcours scolaire et retrouver la motivation",
              "Découvrir des métiers et secteurs d'activité en adéquation avec son profil",
              "Construire un projet d'orientation réaliste et réalisable",
              "Gagner en confiance pour faire des choix éclairés",
              "Être accompagné dans les démarches d'orientation (Parcoursup, choix de spécialités...)"
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex items-start gap-3 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 via-teal-50/70 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Tarif</h2>
          <div className="bg-white rounded-xl p-8 inline-block shadow-md mb-8">
            <p className="text-5xl font-bold text-teal-700 mb-2">450 €</p>
            <p className="text-xl text-gray-700">le bilan complet</p>
            <p className="text-sm text-gray-600 mt-4">Incluant les 4 séances et le compte-rendu détaillé</p>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Prêt à construire votre projet d'orientation ?
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
