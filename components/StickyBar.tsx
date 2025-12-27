import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface StickyBarProps {
  onBuy?: () => void;
}

const StickyBar: React.FC<StickyBarProps> = ({ onBuy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra apenas após rolar 300px (passou da Hero)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    // Se a função onBuy foi passada (App.tsx), executa ela para mostrar o Upsell
    // Caso contrário, roda a lógica padrão de scroll (fallback)
    if (onBuy) {
      onBuy();
    } else {
      const section = document.getElementById('ofertas');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`fixed bottom-0 left-0 w-full z-50 px-4 pb-6 pt-2 pointer-events-none flex justify-center transition-transform duration-500 ease-out md:hidden ${isVisible ? 'translate-y-0' : 'translate-y-[150%]'}`}>
      {/* Container Flutuante com Glassmorphism */}
      <div className="pointer-events-auto w-full max-w-lg bg-brand-card/95 backdrop-blur-xl border border-brand-primary/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] rounded-2xl p-3 flex items-center justify-between gap-4">
        
        {/* Texto de Escassez/Incentivo (Lado Esquerdo) */}
        <div className="flex flex-col pl-2">
          <span className="text-[10px] text-brand-primary font-bold uppercase tracking-widest mb-0.5">
            Lote Promocional
          </span>
          <span className="text-white font-bold text-sm leading-tight">
            Restam poucas unidades
          </span>
        </div>

        {/* Botão de Ação (Lado Direito) */}
        <button 
          onClick={handleClick}
          className="flex-1 bg-gradient-to-r from-brand-primaryDark to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          QUERO MEU KIT
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default StickyBar;