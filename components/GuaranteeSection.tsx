import React from 'react';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="bg-brand-dark py-20 px-4 border-t border-brand-silver/10">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
        
        {/* Metallic Shine Effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-silver/10 to-transparent transform rotate-45 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
          
          <div className="flex-shrink-0">
             <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-brand-silver/20 flex items-center justify-center bg-brand-dark shadow-2xl relative">
                <ShieldCheck className="w-16 h-16 text-brand-primary" />
                <div className="absolute bottom-0 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  90 Dias
                </div>
             </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-2">
              Garantia de <span className="font-semibold text-brand-silverLight">Satisfação Clínica</span>
            </h2>
            <div className="h-0.5 w-12 bg-brand-primary mx-auto md:mx-0 mb-6"></div>
            
            <p className="text-brand-silver leading-relaxed mb-4">
              Participamos do programa <strong className="text-white">Risco Zero</strong>. Se após 90 dias de uso seguindo o protocolo recomendado você não observar resultados visíveis em seu corpo ou disposição, nós reembolsamos 100% do seu investimento.
            </p>
            <p className="text-sm text-brand-silver/60 italic">
              *Sem burocracias. Apenas um e-mail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;