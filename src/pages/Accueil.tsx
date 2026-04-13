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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
            Psychopédagogie & Orientation scolaire
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10">
            Être accompagné dans la compréhension de son fonctionnement cognitif et émotionnel
            pour qu'apprendre redevienne une source de confiance en soi et de bien-être.
          </p>

          {/* 2 liens rapides */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#psychopedagogie"
              className="inline-block bg-white border-2 border-teal-600 text-teal-700 px-6 py-3 rounded-lg hover:bg-teal-50 transition-all duration-300 font-medium text-base shadow-sm hover:shadow-md"
            >
              En quoi consiste la psychopédagogie ?
            </a>
            <a
              href="#orientation"
              className="inline-block bg-white border-2 border-teal-600 text-teal-700 px-6 py-3 rounded-lg hover:bg-teal-50 transition-all duration-300 font-medium text-base shadow-sm hover:shadow-md"
            >
              En quoi consiste l'orientation ?
            </a>
          </div>
        </div>
      </section>

      {/* Les 8 situations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-blue-50/30">
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
            Autant de raisons qui justifient de consulter un psychopédagogue<br className="hidden sm:block" />
            <span className="text-teal-600"> ou un conseiller en orientation scolaire.</span>
          </p>
        </div>
      </section>

      {/* 2 boutons simples */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 via-blue-50/50 to-blue-50">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#psychopedagogie"
              className="flex-1 text-center bg-teal-600 text-white px-8 py-5 rounded-xl hover:bg-teal-700 hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl"
            >
              Psychopédagogie
            </a>
            <a
              href="#orientation"
              className="flex-1 text-center bg-white border-2 border-teal-600 text-teal-700 px-8 py-5 rounded-xl hover:bg-teal-50 hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-xl"
            >
              Orientation
            </a>
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-teal-50/50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            Prêt à prendre rendez-vous ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            N'hésitez pas à me contacter pour échanger sur vos besoins
          </p>
          <a
            href="#contact"
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 hover:scale-110 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl"
          >
            Me contacter
          </a>
        </div>
      </section>
    </div>
  );
};
