import React, { useState } from 'react';
import TopBar from './components/TopBar';
import HeroSection from './components/HeroSection';
import IngredientsSection from './components/IngredientsSection';
import SocialProofSection from './components/SocialProofSection';
import BonusSection from './components/BonusSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';
import StickyBar from './components/StickyBar';
import UpsellPage from './components/UpsellPage';

const App: React.FC = () => {
  const [showUpsell, setShowUpsell] = useState(false);

  // Função chamada quando o usuário clica em "Comprar" em qualquer lugar
  const handleBuyClick = () => {
    // Rola para o topo para garantir que o usuário veja o Upsell desde o início
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Simula o tempo de processamento do checkout e mostra o Upsell
    setTimeout(() => {
      setShowUpsell(true);
    }, 500);
  };

  const handleUpsellDecision = () => {
    // Aqui você redirecionaria para a página de Obrigado real
    alert("Fluxo concluído! (Redirecionando para Obrigado...)");
    setShowUpsell(false);
  };

  // Se o Upsell estiver ativo, renderiza apenas ele (simulando uma nova rota)
  if (showUpsell) {
    return <UpsellPage onAccept={handleUpsellDecision} onDecline={handleUpsellDecision} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark overflow-x-hidden selection:bg-brand-primary selection:text-white">
      <TopBar />
      <main>
        {/* Hero geralmente não precisa de observer pois já está na tela, 
            mas o wrapper garante a animação de entrada suave ao carregar */}
        <FadeInSection>
          {/* Passamos o handleBuyClick para o Hero caso queira conectar o botão lá também, 
              embora o padrão seja rolar para preços */}
          <HeroSection />
        </FadeInSection>
        
        <FadeInSection delay={100}>
          <IngredientsSection />
        </FadeInSection>
        
        <FadeInSection>
          <SocialProofSection />
        </FadeInSection>

        <FadeInSection>
          <BonusSection />
        </FadeInSection>
        
        <FadeInSection>
          {/* O PricingSection agora recebe a função de compra */}
          <PricingSection onBuy={handleBuyClick} />
        </FadeInSection>
        
        <FadeInSection>
          <FAQSection />
        </FadeInSection>
      </main>
      <Footer />
      {/* O StickyBar também recebe a função de compra */}
      <StickyBar onBuy={handleBuyClick} />
    </div>
  );
};

export default App;