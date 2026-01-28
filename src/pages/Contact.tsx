import { Mail, Phone, MapPin, Clock, Video } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-600 via-teal-700 to-white text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
          <p className="text-xl md:text-2xl text-teal-50 leading-relaxed">
            Prenons contact pour échanger sur vos besoins
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h2 className="text-2xl font-bold text-teal-800 mb-6">Coordonnées</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-full p-3 flex-shrink-0">
                      <Mail className="text-teal-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <a
                        href="mailto:elodie.capconfiance@gmail.com"
                        className="text-teal-600 hover:text-teal-700 transition-colors"
                      >
                        elodie.capconfiance@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-full p-3 flex-shrink-0">
                      <Phone className="text-teal-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Téléphone</h3>
                      <a
                        href="tel:0745130551"
                        className="text-teal-600 hover:text-teal-700 transition-colors"
                      >
                        07 45 13 05 51
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-full p-3 flex-shrink-0">
                    <MapPin className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-teal-800 mb-2">Adresse</h2>
                    <div className="text-gray-700 leading-relaxed">
                      <p className="font-semibold">Cabinet situé au médipôle de Lançon-Provence</p>
                      <p className="mt-2">Allée Francisco Caravaca</p>
                      <p>13680 Lançon-Provence</p>
                      <p className="mt-2 text-sm text-gray-600">1er étage (à côté du Carrefour Contact)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl shadow-lg p-8 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Horaires</h2>
                    <p className="text-teal-50 mb-4">Sur rendez-vous uniquement</p>
                    <div className="space-y-2">
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="font-semibold">Au cabinet</p>
                        <p className="text-teal-50">Mercredi et samedi : 9h – 19h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl shadow-lg p-8 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <Video className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Téléconsultation</h2>
                    <p className="text-teal-50 leading-relaxed">
                      Les séances en visioconférence sont possibles, notamment pour les bilans
                      d'orientation. N'hésitez pas à me contacter pour en discuter.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-teal-800 mb-4">Comment me contacter ?</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Par téléphone ou SMS pour une prise de rendez-vous rapide</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Par email pour toute question ou demande d'information</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Je vous répondrai dans les meilleurs délais</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-teal-50/50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">
              Première prise de contact
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              Lors de notre premier échange, nous prendrons le temps de discuter de vos besoins,
              de vos attentes et de la situation. Cet échange me permettra de vous proposer
              l'accompagnement le plus adapté à votre profil.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <p className="text-gray-700 font-medium">Contactez-moi</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <p className="text-gray-700 font-medium">Échangeons sur vos besoins</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <p className="text-gray-700 font-medium">Fixons un rendez-vous</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
