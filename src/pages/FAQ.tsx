import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Faut-il un diagnostic pour consulter un psychopédagogue ?",
      answer: "Non, il n'est pas nécessaire d'avoir un diagnostic pour consulter un psychopédagogue. L'accompagnement psychopédagogique s'adresse à toute personne rencontrant des difficultés d'apprentissage, un manque de confiance en soi, des problèmes d'organisation ou de concentration, ou souhaitant mieux comprendre son fonctionnement cognitif. Le psychopédagogue peut accompagner avant, pendant ou après un diagnostic, et peut également orienter vers d'autres professionnels si nécessaire."
    },
    {
      question: "Quelle est la différence entre psychopédagogie et soutien scolaire ?",
      answer: "Le soutien scolaire vise à retravailler les notions du programme non comprises et à combler les lacunes dans une matière spécifique. La psychopédagogie, quant à elle, s'intéresse au « comment apprendre » plutôt qu'au « quoi apprendre ». Elle travaille sur les stratégies d'apprentissage, la compréhension du fonctionnement cognitif, la gestion des émotions, l'organisation, la motivation et la confiance en soi. L'objectif est de rendre l'apprenant autonome et de lever les blocages qui l'empêchent d'apprendre sereinement."
    },
    {
      question: "Peut-on faire des séances pour plusieurs enfants en même temps ?",
      answer: "Non, les séances de psychopédagogie sont individuelles et personnalisées. Chaque enfant a son propre fonctionnement, ses propres besoins et ses propres difficultés. Un accompagnement individuel permet d'adapter les outils, les méthodes et le rythme à chaque profil, garantissant ainsi un suivi efficace et bienveillant."
    },
    {
      question: "Quelles sont les modalités de paiement ?",
      answer: "Le paiement s'effectue à l'issue de chaque séance, par chèque, espèces ou virement bancaire. Pour les bilans (psychopédagogique ou d'orientation), un acompte peut être demandé lors de la première séance, le solde étant réglé à la fin du bilan."
    },
    {
      question: "Comment annuler ou reporter un rendez-vous ?",
      answer: "Toute séance doit être annulée ou reportée au moins 48 heures à l'avance par téléphone ou par email. Passé ce délai, la séance non annulée sera due et facturée au tarif habituel, sauf en cas de force majeure (maladie avec certificat médical, par exemple)."
    },
    {
      question: "Les séances sont-elles remboursées par la mutuelle ou la MDPH ?",
      answer: "Les séances de psychopédagogie ne sont pas prises en charge par la Sécurité sociale. Cependant, certaines mutuelles proposent des forfaits « médecines douces » ou « bien-être » qui peuvent inclure la psychopédagogie. Il est recommandé de vous renseigner directement auprès de votre mutuelle. Pour les personnes bénéficiant d'une notification MDPH, il est possible dans certains cas d'obtenir une prise en charge partielle ou totale des séances. N'hésitez pas à vous rapprocher de votre référent MDPH pour plus d'informations. Une facture détaillée vous sera remise pour toute demande de remboursement."
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-600 via-teal-700 to-white text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Questions Fréquentes</h1>
          <p className="text-xl md:text-2xl text-teal-50 leading-relaxed">
            Vous avez des questions ? Voici les réponses aux interrogations les plus courantes
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
                >
                  <span className="font-semibold text-lg text-teal-800 flex-grow">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 text-teal-600 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-teal-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-teal-50/50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            Vous avez d'autres questions ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            N'hésitez pas à me contacter, je serai ravie d'échanger avec vous
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
