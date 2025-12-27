import React from 'react';
import { Check, ShieldCheck, Truck, BookOpen } from 'lucide-react';
import { IMAGES } from '../constants';
import Button from './Button';

interface PricingSectionProps {
  onBuy?: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onBuy }) => {
  return (
    <section className="py-24 bg-brand-dark text-white relative border-t border-brand-primary/10" id="ofertas">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* 1. Título da Seção */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Escolha o seu <span className="text-brand-primary">Protocolo</span>.
        </h2>
        <p className="text-brand-silver text-lg font-light">
          Condições exclusivas para o lote atual. Frete Grátis e Garantia Blindada inclusos.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* CARD 1: INICIANTE (1 Mês) */}
          <div className="bg-brand-card/40 border border-brand-primary/10 rounded-2xl p-6 flex flex-col items-center hover:border-brand-primary/30 transition-all duration-300 group">
            <span className="text-brand-silver font-semibold mb-6 uppercase text-xs tracking-[0.2em]">Experimentação</span>
            <div className="h-40 flex items-center justify-center mb-8 p-4 bg-brand-dark/50 rounded-full border border-brand-primary/5 group-hover:border-brand-primary/20 transition-colors">
                 <img src={IMAGES.bottles} alt="1 Pote" className="h-full w-auto object-contain opacity-70 grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">1 Mês de Tratamento</h3>
            <p className="text-brand-silver/50 text-sm mb-6 line-through">De R$ 297,90</p>
            
            <div className="mb-8 text-center w-full border-b border-brand-primary/10 pb-6">
              <span className="text-xs text-brand-silver uppercase tracking-wide">12x de</span>
              <div className="text-4xl font-bold text-white mt-1 mb-1">R$ 22,29</div>
              <span className="text-xs text-brand-primary font-medium">ou R$ 226,90 à vista</span>
            </div>

            <Button variant="secondary" className="w-full text-sm" onClick={onBuy}>
              ESCOLHER ESTE
            </Button>
          </div>

          {/* CARD 2: RECOMENDADO (3 Meses) - O MAIS VENDIDO */}
          <div className="relative bg-brand-card border-2 border-brand-primary rounded-3xl p-8 flex flex-col items-center shadow-[0_0_60px_-15px_rgba(59,130,246,0.25)] transform md:-translate-y-6 z-20">
            {/* Tag de Destaque */}
            <div className="absolute -top-5 bg-gradient-to-r from-brand-primary to-brand-primaryDark text-white px-8 py-2.5 rounded-full font-bold text-xs tracking-widest uppercase shadow-lg shadow-brand-primary/25 ring-4 ring-brand-dark">
              O Mais Escolhido
            </div>

            <span className="text-brand-primary font-bold mb-6 uppercase text-xs tracking-[0.2em] mt-6">Tratamento Recomendado</span>
            <div className="h-52 flex items-center justify-center mb-8 relative p-4 bg-brand-primary/5 rounded-full w-52">
                 <img src={IMAGES.bottles} alt="3 Potes" className="h-full w-auto object-contain drop-shadow-2xl scale-110" />
                 {/* Badge de Desconto */}
                 <div className="absolute -right-2 top-0 bg-red-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full transform rotate-12 shadow-lg border-2 border-brand-card">
                   ECONOMIZE 40%
                 </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-2 text-white">3 Meses</h3>
            <p className="text-brand-silver/50 text-sm mb-6 line-through">De R$ 897,00</p>
            
            <div className="mb-8 text-center bg-brand-dark/50 w-full py-5 rounded-xl border border-brand-primary/20">
              <span className="text-xs text-brand-silver uppercase tracking-wide">12x de APENAS</span>
              <div className="text-5xl font-bold text-brand-primary mt-1 mb-1">R$ 29,82</div>
              <span className="text-xs text-white font-medium">ou R$ 297,00 à vista</span>
            </div>

            <ul className="w-full space-y-4 mb-8 bg-brand-dark/30 p-6 rounded-xl">
              <li className="flex items-center gap-3 text-sm text-brand-silverLight font-medium">
                <Check className="w-5 h-5 text-green-500 shrink-0" /> 
                3 Frascos Secaps Black
              </li>
              
              {/* BÔNUS PERCEBIDO COM ANCORAGEM */}
              <li className="flex items-start gap-3 text-sm text-brand-silverLight font-medium">
                <BookOpen className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" /> 
                <div>
                  <span className="text-white font-bold">Bônus VIP:</span> Guia Detox 30 Dias
                  <div className="text-xs text-brand-silver/60 line-through mt-0.5">Vendido por R$ 67,90</div>
                </div>
              </li>

              <li className="flex items-center gap-3 text-sm text-brand-silverLight font-medium">
                <Truck className="w-5 h-5 text-brand-primary shrink-0" /> 
                <b>Frete Grátis</b> Imediato
              </li>
            </ul>

            <Button variant="primary" className="w-full text-lg shadow-brand-primary/25 animate-pulse-slow" onClick={onBuy}>
              QUERO EMAGRECER AGORA
            </Button>
          </div>

          {/* CARD 3: MÁXIMO (5 Meses) */}
          <div className="bg-brand-card/40 border border-brand-primary/10 rounded-2xl p-6 flex flex-col items-center hover:border-brand-primary/30 transition-all duration-300 group">
            <span className="text-brand-silver font-semibold mb-6 uppercase text-xs tracking-[0.2em]">Máxima Economia</span>
            <div className="h-40 flex items-center justify-center mb-8 p-4 bg-brand-dark/50 rounded-full border border-brand-primary/5 group-hover:border-brand-primary/20 transition-colors">
                 <img src={IMAGES.bottles} alt="5 Potes" className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">5 Meses de Tratamento</h3>
            <p className="text-brand-silver/50 text-sm mb-6 line-through">De R$ 1.134,00</p>
            
            <div className="mb-8 text-center w-full border-b border-brand-primary/10 pb-6">
              <span className="text-xs text-brand-silver uppercase tracking-wide">12x de</span>
              <div className="text-4xl font-bold text-white mt-1 mb-1">R$ 39,86</div>
              <span className="text-xs text-brand-primary font-medium">ou R$ 397,00 à vista</span>
            </div>

            <Button variant="secondary" className="w-full text-sm" onClick={onBuy}>
              ESCOLHER ESTE
            </Button>
          </div>

        </div>

        {/* --- SEÇÃO DE GARANTIA (Integrada) --- */}
        <div className="mt-20 bg-gradient-to-r from-brand-card to-brand-primary/10 rounded-3xl p-8 md:p-12 border border-brand-primary/20 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group hover:border-brand-primary/40 transition-colors duration-500">
           {/* Background Glow */}
           <div className="absolute -left-20 top-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full group-hover:bg-brand-primary/20 transition-colors duration-500"></div>
           
           <div className="flex-shrink-0 bg-brand-dark p-6 rounded-full border border-brand-primary/30 shadow-2xl relative z-10">
             <ShieldCheck className="w-16 h-16 text-brand-primary" />
           </div>

           <div className="relative z-10 text-center md:text-left">
             <h3 className="text-2xl md:text-3xl font-light mb-3 text-white">
               Garantia Blindada de <span className="font-bold text-brand-primary">90 Dias</span>.
             </h3>
             <p className="text-brand-silver leading-relaxed mb-6 max-w-2xl text-lg font-light">
               O risco é todo nosso. Você tem 3 meses inteiros para testar o <strong>Protocolo Secaps Black</strong>. 
               Se você não ver diferença no espelho ou na balança, nós devolvemos 100% do seu investimento. 
               Sem letras miúdas.
             </p>
             <p className="text-sm text-brand-primary font-semibold flex items-center justify-center md:justify-start gap-2 uppercase tracking-wide">
               <Check className="w-4 h-4" /> Protegido pelo Código de Defesa do Consumidor
             </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;