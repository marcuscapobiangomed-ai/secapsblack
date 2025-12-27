import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-brand-dark py-16 md:py-24 px-4 relative overflow-hidden border-t border-brand-primary/10">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-brand-primary/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-brand-primary font-bold tracking-widest text-xs md:text-sm uppercase">Tire suas dúvidas</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">
            Perguntas <span className="text-brand-silverLight">Frequentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-brand-card/80 border-brand-primary/40 shadow-lg shadow-brand-primary/10' : 'bg-brand-card/30 border-brand-primary/10 hover:border-brand-primary/30'}`}
            >
              <button
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-semibold text-base md:text-lg pr-4 transition-colors leading-tight ${openIndex === index ? 'text-white' : 'text-brand-silverLight group-hover:text-white'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <div className="bg-brand-primary/20 p-1.5 md:p-1 rounded-full flex-shrink-0">
                    <Minus className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
                  </div>
                ) : (
                  <div className="bg-brand-card p-1.5 md:p-1 rounded-full border border-brand-primary/20 flex-shrink-0 group-hover:border-brand-primary/50 transition-colors">
                    <Plus className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
                  </div>
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 md:p-6 md:pt-0 text-brand-silver text-base md:text-lg leading-7 md:leading-relaxed border-t border-brand-primary/10 mt-2 md:mt-0 pt-4 md:pt-0">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;