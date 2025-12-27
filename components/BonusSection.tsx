import React from 'react';
import { BookOpen, Gift, CheckCircle, Zap, ChefHat, Brain } from 'lucide-react';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      title: "Guia: Detox Turbinado",
      description: "Protocolo de 7 dias para desinflamar o corpo e preparar o terreno para a queima acelerada.",
      value: "R$ 67,90",
      icon: <Zap className="w-10 h-10 text-white" />,
      color: "from-yellow-600 to-yellow-400"
    },
    {
      title: "Receitas de Secagem",
      description: "50 receitas práticas (almoço e jantar) que aceleram o metabolismo sem passar fome.",
      value: "R$ 97,00",
      icon: <ChefHat className="w-10 h-10 text-white" />,
      color: "from-green-600 to-green-400"
    },
    {
      title: "Manual da Saciedade",
      description: "Técnicas comportamentais para vencer a ansiedade e a fome noturna definitivamente.",
      value: "R$ 47,90",
      icon: <Brain className="w-10 h-10 text-white" />,
      color: "from-blue-600 to-blue-400"
    }
  ];

  return (
    <section className="py-24 bg-brand-dark relative border-t border-brand-primary/10 overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-bold text-xs uppercase tracking-widest mb-6 animate-pulse">
            <Gift className="w-3 h-3" /> Presentes Exclusivos
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Leve o tratamento completo. <br />
            <span className="text-brand-silver">Sem pagar nada a mais.</span>
          </h2>
          <p className="text-brand-silver text-lg leading-relaxed font-light">
            Comprando hoje qualquer kit do <strong>Secaps Black</strong>, você desbloqueia imediatamente nossa Biblioteca Digital Premium.
          </p>
        </div>

        {/* Grid de Bônus */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="group relative bg-brand-card/40 border border-brand-primary/10 hover:border-brand-primary/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
              
              {/* Badge de "Grátis" */}
              <div className="absolute top-4 right-4 bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wide z-10">
                Grátis Hoje
              </div>

              {/* Mockup da Capa do Livro (Simulado com CSS) */}
              <div className="h-56 w-full mb-8 flex items-center justify-center relative perspective-1000 group-hover:scale-105 transition-transform duration-500">
                 {/* Sombra do Livro */}
                 <div className={`absolute inset-x-8 inset-y-4 bg-gradient-to-br ${bonus.color} opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity`}></div>
                 
                 {/* O Livro em Si */}
                 <div className={`relative w-36 h-48 bg-gradient-to-br ${bonus.color} rounded-r-lg rounded-l-sm shadow-[10px_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-4 border-l-4 border-white/20`}>
                    <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-black/20"></div>
                    <div className="mb-3 p-3 bg-white/20 rounded-full backdrop-blur-sm shadow-inner">
                        {bonus.icon}
                    </div>
                    <span className="text-white font-bold text-center text-sm leading-tight uppercase tracking-wider drop-shadow-md">
                        {bonus.title.replace("Guia: ", "").replace("Manual da ", "")}
                    </span>
                    <div className="absolute bottom-4 text-[10px] text-white/80 font-medium">
                        Edição Digital
                    </div>
                 </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
                {bonus.title}
              </h3>
              
              <p className="text-brand-silver text-sm mb-6 leading-relaxed flex-grow">
                {bonus.description}
              </p>

              <div className="border-t border-brand-primary/10 pt-4 flex items-center justify-between mt-auto">
                <span className="text-brand-silver/50 text-sm line-through">
                  Vendido por {bonus.value}
                </span>
                <span className="text-green-500 font-bold flex items-center gap-1.5 bg-green-500/5 px-2 py-1 rounded">
                  <CheckCircle className="w-4 h-4" /> R$ 0,00
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Totalizador de Valor (O Golpe Final) */}
        <div className="mt-16 bg-gradient-to-r from-brand-card to-brand-primary/10 border border-brand-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50"></div>
          
          <p className="text-brand-silver text-lg md:text-xl font-light">
            Você está ganhando <span className="text-white font-bold decoration-brand-primary underline decoration-2 underline-offset-4">R$ 212,80 em bônus</span> gratuitamente ao iniciar seu tratamento hoje.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BonusSection;