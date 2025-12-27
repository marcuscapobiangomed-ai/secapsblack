import React from 'react';
import { INGREDIENTS } from '../constants';

const IngredientsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-brand-dark relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-3">
            Composição Farmacêutica
          </h2>
          <h3 className="text-3xl md:text-5xl font-light text-white mb-6">
            A Ciência por trás da <span className="font-semibold text-brand-silverLight">Fórmula</span>
          </h3>
          <p className="max-w-2xl mx-auto text-brand-silver text-lg font-light leading-relaxed">
            Desenvolvido com tecnologia de extração avançada para maximizar a biodisponibilidade dos ativos naturais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INGREDIENTS.map((item, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 rounded-xl hover:border-brand-primary/50 transition-colors group"
            >
              <div className="mb-6 p-3 bg-brand-primary/10 w-fit rounded-lg text-brand-primary group-hover:text-brand-accent transition-colors relative group/icon cursor-help">
                {item.icon}
                
                {/* Custom Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] bg-brand-card/95 backdrop-blur-sm border border-brand-primary/30 text-white text-xs p-2 rounded shadow-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 pointer-events-none z-20 text-center">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-brand-primary text-[10px]">{item.role}</p>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-brand-primary/30"></div>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-white mb-2">
                {item.name}
              </h4>
              <div className="h-0.5 w-12 bg-brand-primary/30 mb-4 group-hover:w-full transition-all duration-500"></div>
              <p className="text-xs font-bold text-brand-primary mb-3 uppercase tracking-wider">
                {item.role}
              </p>
              <p className="text-sm text-brand-silver leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;