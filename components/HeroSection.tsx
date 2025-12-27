import React, { useEffect, useRef } from 'react';
import Button from './Button';
import { IMAGES } from '../constants';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const HeroSection: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        // Move o background a 40% da velocidade do scroll para criar profundidade
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-clinical-gradient pt-10 pb-20">
      
      {/* Abstract Tech Background with Parallax */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none will-change-transform transition-transform duration-75 ease-out"
      >
        <svg className="absolute top-0 right-0 w-1/2 h-full text-brand-primary/5" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 0 L100 0 L100 100 Z" fill="currentColor" />
        </svg>
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-primary rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content: Clinical Copy */}
        <div className="text-left order-2 lg:order-1 max-w-3xl pt-10 lg:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/5 text-brand-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            Nova Fórmula Black Label
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Ative a Queima Metabólica Natural com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Tecnologia Bioativa</span> do Secaps Black
          </h1>
          
          <p className="text-lg md:text-xl text-brand-silver mb-8 max-w-xl leading-relaxed font-normal">
            Não é mágica, é <strong className="text-brand-silverLight font-semibold">ciência nutricional</strong>. Uma matriz concentrada de Quitosana, Chia e Spirulina projetada para atuar em 3 frentes: <span className="text-white border-b border-brand-primary/30 pb-0.5">saciedade prolongada</span>, <span className="text-white border-b border-brand-primary/30 pb-0.5">bloqueio de gorduras</span> e <span className="text-white border-b border-brand-primary/30 pb-0.5">energia limpa</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="uppercase font-bold tracking-wide text-xl px-10 py-5">
              INICIAR MEU TRATAMENTO
            </Button>
            <Button variant="secondary">
              VER COMPOSIÇÃO
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm text-brand-silver/80">
             <div className="flex items-center gap-2">
               <ShieldCheck className="w-5 h-5 text-brand-primary" />
               <span className="font-medium">Fórmula 100% Natural e Aprovada</span>
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-brand-primary" />
               <span className="font-medium">Eficácia Clínica Comprovada</span>
             </div>
          </div>
        </div>

        {/* COLUNA DA DIREITA: A Composição "Power Couple" MASSIVA */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center min-h-[500px] lg:min-h-[800px] w-full">
            
            {/* 1. Glow de Fundo (Aura) - Aumentado para acompanhar a escala */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

            {/* CONTAINER DE MONTAGEM (Agora Muito Maior) */}
            {/* max-w aumentado para 750px em telas grandes para criar impacto real */}
            <div className="relative w-full max-w-[500px] lg:max-w-[750px] aspect-square flex items-end justify-center">
              
              {/* 2. Frascos (O Heroi) */}
              <div className="relative z-10 w-[70%] mr-auto ml-2 lg:ml-6"> 
                 <img 
                    src={IMAGES.bottles} 
                    alt="Tratamento Secaps Black Frascos" 
                    className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                 />
              </div>

              {/* 3. Chá (O Parceiro) */}
              <div className="absolute bottom-[5%] right-[2%] lg:right-[0%] z-20 w-[45%]">
                <img 
                    src={IMAGES.tea} 
                    alt="Chá Detox Secaps" 
                    className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)] transform hover:scale-105 transition-transform duration-500" 
                />
              </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;