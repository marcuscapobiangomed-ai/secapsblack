import React from 'react';
import { Star, CheckCircle, TrendingUp, Users, ThumbsUp } from 'lucide-react';

const SocialProofSection: React.FC = () => {
  const stats = [
    { value: "94%", label: "Redução de Apetite", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "8,5kg", label: "Perda Média (90 dias)", icon: <CheckCircle className="w-5 h-5" /> },
    { value: "12k+", label: "Tratamentos Iniciados", icon: <Users className="w-5 h-5" /> },
    { value: "4.9/5", label: "Avaliação Geral", icon: <ThumbsUp className="w-5 h-5" /> },
  ];

  const reviews = [
    {
      name: "Ana Clara M.",
      tag: "Cliente Verificada • Kit 3 Meses",
      text: "O que mais me impressionou não foi só o peso, mas a falta de fome. A 'Tecnologia de Expansão' que vocês explicam é real. Eu simplesmente não consigo comer o prato todo mais.",
      stars: 5
    },
    {
      name: "Ricardo S.",
      tag: "Cliente Verificado • Kit 5 Meses",
      text: "Sou cético com suplementos, mas a abordagem clínica me convenceu. Perdi o inchaço abdominal em 10 dias. O chá faz uma diferença absurda na retenção de líquido.",
      stars: 5
    },
    {
      name: "Fernanda L.",
      tag: "Cliente Verificada • Kit 3 Meses",
      text: "Já tentei de tudo. O Secaps Black foi o único que não me deu taquicardia. Energia limpa e constante. Já pedi o segundo kit para minha irmã.",
      stars: 5
    }
  ];

  return (
    <section className="py-24 bg-brand-dark text-white relative border-t border-brand-primary/10 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* 1. Cabeçalho de Dados */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-primary font-bold tracking-widest text-sm uppercase">Eficácia Comprovada</span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 mb-6">
            Números que não <span className="font-semibold text-brand-silverLight">mentem</span>.
          </h2>
          <p className="text-brand-silver text-lg font-light leading-relaxed">
            Acompanhamos a evolução de nossos clientes. Veja os índices de satisfação do protocolo Secaps Black monitorados em 30 dias.
          </p>
        </div>

        {/* 2. Grid de Estatísticas (Visual Tech) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-brand-card/50 border border-brand-primary/10 p-6 rounded-2xl flex flex-col items-center justify-center hover:border-brand-primary/30 transition-all duration-300 group hover:-translate-y-1">
              <div className="text-brand-primary mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300 bg-brand-primary/10 p-3 rounded-full">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-brand-silver font-medium uppercase tracking-wide text-center">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 3. Carrossel de Depoimentos (Review Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-brand-card p-8 rounded-2xl border border-brand-primary/10 relative hover:border-brand-primary/30 transition-colors duration-300">
              {/* Aspas decorativas */}
              <div className="absolute top-6 right-8 text-7xl text-brand-primary/5 font-serif leading-none">”</div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-brand-silverLight text-lg leading-relaxed mb-6 relative z-10 font-light italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold border border-brand-primary/20">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <p className="text-[10px] text-brand-primary uppercase tracking-wider font-semibold">{review.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;