import { Brain, Heart, BookOpen, Target, Compass, Calendar, TrendingUp, Users } from 'lucide-react';

export const Accueil = () => {
  const situations = [
    {
      icon: Heart,
      text: "Votre enfant manque de confiance en lui et en ses apprentissages"
    },
    {
      icon: Compass,
      text: "Votre enfant a besoin d'apprendre à se connaître pour trouver sa voie"
    },
    {
      icon: TrendingUp,
      text: "Votre enfant bouge beaucoup et rencontre des difficultés pour se concentrer"
    },
    {
      icon: Target,
      text: "Vous êtes lycéen.ne ou étudiant.e et vous êtes perdu.e dans vos choix d'orientation"
    },
    {
      icon: BookOpen,
      text: "Votre enfant a du mal à lire, écrire, compter ou comprendre les consignes"
    },
    {
      icon: Calendar,
      text: "Le temps des devoirs est un moment compliqué"
    },
    {
      icon: Brain,
      text: "Votre adolescent a du mal à organiser ses révisions et est stressé par les examens"
    },
    {
      icon: Users,
      text: "Vous êtes sénior et souhaitez maintenir vos capacités cognitives"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
            Psychopédagogie & Orientation scolaire – Cap Confiance
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Être accompagné dans la compréhension de son fonctionnement cognitif et émotionnel
            pour qu'apprendre redevienne une source de confiance en soi et de bien-être.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">
            En quoi consiste la psychopédagogie ?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            La psychopédagogie consiste à accompagner les apprenants et apprenantes de tout âge
            (enfants, adolescents, adultes, séniors), afin de lever les blocages limitants et de
            mieux comprendre leur fonctionnement cognitif. Elle s'adresse aux personnes rencontrant
            des troubles des apprentissages, des blocages émotionnels, une perte de confiance en soi,
            des difficultés d'organisation, de concentration, une volonté de stimuler leur mémoire ou
            un besoin de trouver leur orientation. L'accompagnement repose sur une écoute bienveillante,
            des outils personnalisés et un travail de remédiation.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-l-4 border-teal-600 p-6 md:p-8 rounded-r-lg hover:shadow-lg transition-shadow duration-300">
            <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed">
              « Utiliser la pédagogie non plus seulement comme support pour transmettre un savoir,
              mais comme médiation pour que cela ait des incidences positives sur l'ensemble de la
              personnalité »
            </p>
            <p className="text-right text-teal-700 font-semibold mt-4">– Serge Boimare</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {situations.map((situation, index) => {
              const Icon = situation.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-start gap-4 cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-full p-3 flex-shrink-0">
                    <Icon className="text-teal-600" size={24} />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{situation.text}</p>
                </div>
              );
            })}
          </div>

          <p className="text-xl text-center text-teal-800 font-semibold">
            Autant de raisons qui justifient de consulter un psychopédagogue.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-teal-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">
            Le « petit truc en plus » du psychopédagogue
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <p className="text-lg text-gray-700 leading-relaxed">
              La psychopédagogie s'intéresse à la fois à la <strong className="text-teal-700">cognition dite « froide »</strong>,
              qui permet de renforcer les stratégies d'apprentissage (mémoire, attention, organisation), et
              à la <strong className="text-teal-700">cognition dite « chaude »</strong>, qui concerne les émotions,
              la motivation, le désir d'apprendre et la confiance en soi. Cette approche globale permet un
              accompagnement en profondeur.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">
                Psychopédagogie – pour qui ? pour quoi ?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Être accompagné dans la compréhension de son fonctionnement cognitif et émotionnel
                pour qu'apprendre redevienne une source de confiance en soi et de bien-être.
              </p>
              <a
                href="#accompagnements"
                className="inline-block mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 hover:scale-110 transition-all duration-300 font-semibold"
              >
                En savoir plus
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">
                Bilan d'orientation – pour qui ? pour quoi ?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Le bilan d'orientation s'adresse aux jeunes qui ont besoin de mieux se connaître
                afin de faire des choix d'orientation éclairés, redonner du sens à leur parcours
                scolaire et définir des objectifs de formation et professionnels clairs et adaptés
                à leur profil.
              </p>
              <a
                href="#orientation"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 hover:scale-110 transition-all duration-300 font-semibold"
              >
                Découvrir le bilan
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-teal-800 mb-8 text-center">
            Les 3 paliers de l'orientation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h4 className="font-semibold text-teal-800 mb-2">Classe de 3e</h4>
              <p className="text-gray-700 text-sm">
                Choisir entre filière professionnelle ou filière générale et technologique
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h4 className="font-semibold text-teal-800 mb-2">Classe de Seconde</h4>
              <p className="text-gray-700 text-sm">Choix des spécialités</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h4 className="font-semibold text-teal-800 mb-2">Classe de Terminale</h4>
              <p className="text-gray-700 text-sm">Faire les bons choix sur Parcoursup</p>
            </div>
          </div>

          <p className="text-center text-gray-700 mt-8 leading-relaxed">
            Le bilan s'adresse également aux étudiants en réorientation ou en questionnement sur
            leurs poursuites d'études, les secteurs d'activité et les métiers envisageables.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à prendre rendez-vous ?</h2>
          <p className="text-xl mb-8 text-teal-100">
            N'hésitez pas à me contacter pour échanger sur vos besoins
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-teal-800 px-8 py-4 rounded-lg hover:bg-teal-50 hover:scale-110 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl"
          >
            Me contacter
          </a>
        </div>
      </section>
    </div>
  );
};
