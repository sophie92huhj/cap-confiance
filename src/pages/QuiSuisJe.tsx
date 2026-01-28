import { GraduationCap, Heart, BookOpen, Award } from 'lucide-react';

export const QuiSuisJe = () => {
  const parcours = [
    {
      year: "2025",
      items: [
        "Certificat Psychopédagogie et troubles du neurodéveloppement",
        "Certificat Conseillère en orientation scolaire indépendante (COSI)"
      ]
    },
    {
      year: "2002",
      items: ["Professeur des écoles diplômée"]
    },
    {
      year: "1995",
      items: ["Licence de sociologie"]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Qui suis-je ?</h1>
          <p className="text-xl md:text-2xl text-teal-50 leading-relaxed">
            Élodie, psychopédagogue et conseillère en orientation
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-teal-700">Enseignante depuis plus de 20 ans</strong>, j'ai développé
                une solide expérience pédagogique et une connaissance fine du système scolaire. Cette longue
                pratique m'a permis d'observer les différentes façons d'apprendre des élèves et de comprendre
                les obstacles qu'ils peuvent rencontrer.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Désireuse d'aller plus loin dans l'accompagnement des apprenants, j'ai choisi de me former
                en <strong className="text-teal-700">psychopédagogie</strong> pour proposer un suivi
                individualisé et approfondi. Cette approche me permet de travailler sur les dimensions
                cognitives et émotionnelles des apprentissages, en tenant compte du fonctionnement unique
                de chaque personne.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-teal-700">Maman de deux jeunes adultes</strong>, j'ai vécu de
                l'intérieur les questionnements liés à l'orientation et à la réorientation. Cette expérience
                personnelle m'a sensibilisée aux enjeux de ces moments clés et à l'importance d'un
                accompagnement bienveillant et structuré.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                C'est pourquoi j'ai également suivi une formation de <strong className="text-teal-700">
                conseillère en orientation scolaire indépendante (COSI)</strong>. Je suis convaincue que
                l'orientation et la psychopédagogie sont étroitement liées : mieux se connaître, c'est
                aussi mieux comprendre ses aspirations et construire un projet qui nous ressemble.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-full p-4 inline-block mb-4">
                <BookOpen className="text-teal-600" size={32} />
              </div>
              <h3 className="font-semibold text-teal-800 mb-2">+ de 20 ans</h3>
              <p className="text-sm text-gray-700">d'expérience en enseignement</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-full p-4 inline-block mb-4">
                <Heart className="text-teal-600" size={32} />
              </div>
              <h3 className="font-semibold text-teal-800 mb-2">Écoute</h3>
              <p className="text-sm text-gray-700">bienveillante et personnalisée</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-full p-4 inline-block mb-4">
                <GraduationCap className="text-teal-600" size={32} />
              </div>
              <h3 className="font-semibold text-teal-800 mb-2">Double expertise</h3>
              <p className="text-sm text-gray-700">Psychopédagogie & Orientation</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-full p-4 inline-block mb-4">
                <Award className="text-teal-600" size={32} />
              </div>
              <h3 className="font-semibold text-teal-800 mb-2">Certifiée</h3>
              <p className="text-sm text-gray-700">Formations reconnues</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-teal-50/50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-12 text-center">Mon parcours</h2>
          <div className="space-y-8">
            {parcours.map((entry, index) => (
              <div key={index} className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white font-bold px-4 py-2 rounded-lg">
                    {entry.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <ul className="space-y-3">
                    {entry.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="bg-gradient-to-r from-teal-50 to-transparent rounded-lg p-4 border-l-4 border-teal-600"
                      >
                        <p className="text-gray-800 font-medium">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 via-teal-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            Ma conviction
          </h2>
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-md mb-8">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
              « L'orientation et la psychopédagogie sont étroitement liées : mieux se connaître,
              c'est aussi mieux comprendre ses aspirations et construire un projet qui nous ressemble. »
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Envie d'échanger sur votre situation ?
          </p>
          <a
            href="#contact"
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 hover:scale-110 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl"
          >
            Prenons contact
          </a>
        </div>
      </section>
    </div>
  );
};
