import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useInView } from '../hooks/useInView';

const faqs = [
  {
    question: "Faut-il un diagnostic pour consulter un psychopédagogue ?",
    answer: "Non, il n'est pas nécessaire d'avoir un diagnostic pour consulter un psychopédagogue. L'accompagnement psychopédagogique s'adresse à toute personne rencontrant des difficultés d'apprentissage, un manque de confiance en soi, des problèmes d'organisation ou de concentration, ou souhaitant mieux comprendre son fonctionnement cognitif. Le psychopédagogue peut accompagner avant, pendant ou après un diagnostic, et peut également orienter vers d'autres professionnels si nécessaire."
  },
  {
    question: "Quelle est la différence entre psychopédagogie et soutien scolaire ?",
    answer: "Le soutien scolaire vise à retravailler les notions du programme non comprises et à combler les lacunes dans une matière spécifique. La psychopédagogie, quant à elle, s'intéresse au « comment apprendre » plutôt qu'au « quoi apprendre ». Elle travaille sur les stratégies d'apprentissage, la compréhension du fonctionnement cognitif, la gestion des émotions, l'organisation, la motivation et la confiance en soi."
  },
  {
    question: "Peut-on faire des séances pour plusieurs enfants en même temps ?",
    answer: "Non, les séances de psychopédagogie sont individuelles et personnalisées. Chaque enfant a son propre fonctionnement, ses propres besoins et ses propres difficultés. Un accompagnement individuel permet d'adapter les outils, les méthodes et le rythme à chaque profil."
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
    answer: "Les séances de psychopédagogie ne sont pas prises en charge par la Sécurité sociale. Cependant, certaines mutuelles proposent des forfaits « médecines douces » ou « bien-être » qui peuvent inclure la psychopédagogie. Pour les personnes bénéficiant d'une notification MDPH, il est possible dans certains cas d'obtenir une prise en charge partielle ou totale des séances. Une facture détaillée vous sera remise pour toute demande de remboursement."
  }
];

const FaqItem = ({ faq, index, openIndex, setOpenIndex }: {
  faq: typeof faqs[0];
  index: number;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
}) => {
  const { ref, isInView } = useInView(0.1);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden transition-all duration-500
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <button
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
        className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-stone-50 transition-colors duration-150"
      >
        <span className="font-semibold text-gray-800 text-sm flex-grow leading-relaxed">{faq.question}</span>
        <ChevronDown
          className={`flex-shrink-0 text-teal-600 transition-transform duration-300 mt-0.5 ${openIndex === index ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);

  return (
    <div className="min-h-screen bg-white">

      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-teal-700 text-white">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-teal-600 opacity-30 blur-3xl pointer-events-none" />
        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center relative transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Questions fréquentes</h1>
          <p className="text-teal-100 text-lg">Les réponses aux interrogations les plus courantes</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          ))}
        </div>
      </section>

      <AnimatedSection animation="fade-up" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-teal-800 mb-3">Vous avez d'autres questions ?</h2>
          <p className="text-gray-500 text-sm mb-8">N'hésitez pas à me contacter, je serai ravie d'échanger avec vous</p>
          <a href="#contact" className="btn-shimmer inline-flex items-center gap-2 bg-teal-700 text-white px-8 py-3.5 rounded-xl hover:bg-teal-800 transition-colors duration-200 font-semibold text-base shadow-md group">
            Me contacter
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </AnimatedSection>

    </div>
  );
};
