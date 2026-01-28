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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
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
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Intéressé(e) par un Bilan d'orientation scolaire ?</h2>
          
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Vous entendez parler de plus en plus de bilan d'orientation scolaire, mais sans savoir exactement de quoi il s'agit…
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Vous voulez en savoir plus ? Comprendre les tenants et les aboutissements ?
            </p>
            <p className="text-lg font-semibold text-teal-700">
              C'est parti ! Je réponds ci-dessous à toutes les questions que vous vous posez certainement.
            </p>
          </div>

          {/* Question 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 shadow-md mb-8 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">1) À qui est-il destiné ?</h3>
            <p className="text-lg text-gray-700 mb-4">
              Il est destiné aux <strong>collégiens, lycéens, et étudiants en réorientation.</strong>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              De manière générale, les résultats d'un Bilan d'orientation permettent :
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">
                  Aux élèves de <strong>troisième</strong> de choisir leur poursuite d'études : lycée général et technologique ou lycée professionnel ou CAP.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">
                  Aux élèves de <strong>seconde</strong> de sélectionner les enseignements de spécialités pour la classe de première, prendre conscience des attendus des filières d'études supérieures.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">
                  Aux élèves de <strong>première</strong> de repérer les filières de formation, d'anticiper sur les attendus des établissements supérieurs, de commencer à se mobiliser sur son dossier.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">
                  Aux élèves de <strong>terminale</strong> d'élaborer et construire des scénarios pragmatiques en tenant compte de leur projet d'études et de leurs réelles capacités scolaires.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">
                  Aux <strong>étudiants en réorientation</strong> de trouver rapidement une autre voie d'études supérieures vraiment adaptée à leur profil d'étudiant et à leur projet professionnel.
                </span>
              </li>
            </ul>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">2) À quoi sert un Bilan d'orientation ?</h3>
            <p className="text-lg text-gray-700 mb-4">
              Si vous vous posez ces questions :
            </p>
            <ul className="space-y-2 mb-6 ml-4">
              <li className="text-gray-700">• J'ai un projet précis mais j'aimerais être sûr(e) qu'il me convienne</li>
              <li className="text-gray-700">• Je n'ai aucun projet professionnel pour l'avenir et cela m'angoisse</li>
              <li className="text-gray-700">• Quelles spécialités choisir en fin de seconde si je n'ai pas encore de projet ?</li>
              <li className="text-gray-700">• Vers quelles études me tourner après le bac ? Quel secteur professionnel pourrait me plaire ? Quels sont les débouchés ?</li>
              <li className="text-gray-700">• J'ai commencé mes études supérieures mais je me suis trompé(e) dans mon orientation postbac. Puis-je changer de filière universitaire ?</li>
            </ul>
            
            <div className="bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg p-6 mb-6">
              <p className="text-xl font-bold text-teal-800 text-center">
                Alors le Bilan d'orientation est fait pour vous !
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-4">
              En 3 séances, vous obtiendrez :
            </p>
            <ul className="space-y-2 mb-6 ml-4">
              <li className="text-gray-700">• un véritable tour d'horizon de votre personnalité</li>
              <li className="text-gray-700">• et 3 secteurs professionnels spécialement identifiés pour vous.</li>
            </ul>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6">
              <p className="text-lg font-semibold text-teal-800 mb-3">Les bénéfices sont considérables :</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">l'élève reprend confiance en lui,</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">il retrouve du sens aux apprentissages scolaires,</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">et il bâtit un projet d'orientation réaliste en fonction de ses objectifs et du marché du travail.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 shadow-md mb-8 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">3) Concrètement, comment ça marche ?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Concrètement, le bilan d'orientation se déroule en présentiel ou en visioconférence (sur Zoom) et en 3 étapes :
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 flex items-start gap-4">
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold text-teal-800 mb-1">1ère étape</p>
                  <p className="text-gray-700">Entretien approfondi avec l'élève <strong>(1h30 à 2h)</strong></p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 flex items-start gap-4">
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold text-teal-800 mb-1">2ème étape</p>
                  <p className="text-gray-700">Quelques jours après, l'élève réalise, en ma compagnie, plusieurs questionnaires <strong>psychométriques</strong> pour cerner l'ensemble de sa personnalité <strong>(1h à 1h30)</strong></p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 flex items-start gap-4">
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold text-teal-800 mb-1">3ème étape</p>
                  <p className="text-gray-700">1 à 2 semaines après environ, j'organise une restitution orale des résultats du bilan en présence de l'élève et de ses parents, et j'envoie suite au bilan un dossier récapitulatif complet <strong>(1h30)</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Question 4 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">4) Pourquoi attendre ? Réservez votre place et passez à l'action !</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Sortez du brouillard, gagnez en motivation et en confiance grâce au bilan d'orientation.
            </p>
            <p className="text-lg font-semibold text-teal-700 mb-6">
              Vous verrez, il y aura un avant et un après.
            </p>
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Si vous souhaitez me rencontrer et échanger avec moi avant de réserver votre séance, c'est tout à fait possible. Sans attendre, prenez RDV pour une séance découverte offerte.
              </p>
              <p className="text-gray-700 italic">
                Nous verrons ensemble comment je peux vous aider, vous guider, vous accompagner dans ce processus de réflexion tellement important pour votre avenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 via-blue-50 to-teal-50/50">
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
      </section> */}

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
            <p className="text-sm text-gray-600 mt-4">Incluant les 3 séances et le compte-rendu détaillé</p>
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
