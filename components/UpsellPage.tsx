import React from 'react';
import { BookOpen, CheckCircle, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from './Button';

interface UpsellPageProps {
  onDecline: () => void;
  onAccept: () => void;
}

const UpsellPage: React.FC<UpsellPageProps> = ({ onDecline, onAccept }) => {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Container Principal - Focado na conversão */}
      <div className="max-w-2xl w-full bg-brand-card border border-red-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.15)] relative z-10 animate-in fade-in zoom-in duration-500">
        
        {/* Faixa de Atenção */}
        <div className="bg-red-600 text-white text-center py-3 font-bold uppercase tracking-widest text-sm animate-pulse shadow-lg z-20 relative">
          ⚠️ Atenção: Não feche essa página ainda!
        </div>

        <div className="p-6 md:p-12 text-center">
          
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            PEDIDO <span className="text-green-500">APROVADO!</span>
          </h1>
          <p className="text-brand-silver text-lg mb-8 leading-relaxed max-w-lg mx-auto">
            Seu pedido #9823 foi confirmado e já está indo para a separação. <br/>
            <span className="text-white font-medium">Mas espere... Temos uma oportunidade única para novos membros.</span>
          </p>

          {/* O Produto Digital - Box de Destaque */}
          <div className="bg-brand-dark/50 rounded-2xl p-6 border border-brand-primary/20 mb-8 flex flex-col md:flex-row items-center gap-6 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">OFERTA ÚNICA</div>
            
            {/* Mockup do Ebook Simulado */}
            <div className="w-32 h-44 bg-gradient-to-br from-brand-primaryDark to-brand-card rounded shadow-2xl flex-shrink-0 flex flex-col items-center justify-center border border-brand-primary/30 relative transform group-hover:scale-105 transition-transform duration-500">
               <div className="absolute inset-0 border border-white/10 rounded pointer-events-none"></div>
               <BookOpen className="w-10 h-10 text-white mb-2" />
               <span className="text-[10px] text-white font-bold text-center px-2 uppercase tracking-widest">Protocolo<br/>Ativação<br/>Metabólica</span>
               <div className="mt-4 w-full h-1 bg-white/20"></div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                Protocolo Digital: <span className="text-brand-primary">Ativação Metabólica</span> (7 Dias)
              </h3>
              <p className="text-sm text-brand-silver mb-4 leading-relaxed">
                Comece a queimar gordura <strong className="text-white">HOJE MESMO</strong>. Um guia passo-a-passo de alimentação anti-inflamatória para preparar seu corpo enquanto o Secaps Black chega na sua casa.
              </p>
              
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2 text-xs text-brand-silverLight font-medium"><CheckCircle className="w-3.5 h-3.5 text-green-500" /> Cardápio Detox de 7 Dias</li>
                <li className="flex items-center gap-2 text-xs text-brand-silverLight font-medium"><CheckCircle className="w-3.5 h-3.5 text-green-500" /> Lista de Compras Econômica</li>
                <li className="flex items-center gap-2 text-xs text-brand-silverLight font-medium"><CheckCircle className="w-3.5 h-3.5 text-green-500" /> Acesso Imediato no Email</li>
              </ul>

              <div className="flex items-end gap-3 p-3 bg-brand-primary/5 rounded-lg border border-brand-primary/10 w-fit">
                <span className="text-brand-silver/60 line-through text-xs mb-0.5">De R$ 97,00</span>
                <span className="text-green-500 font-bold text-xl leading-none">Por R$ 29,90</span>
              </div>
            </div>
          </div>

          {/* Botão de Compra One-Click */}
          <button 
            onClick={onAccept}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 mb-6 group text-lg"
          >
            SIM! ADICIONAR AO MEU PEDIDO
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center justify-center gap-2 text-xs text-brand-silver mb-8 opacity-70">
            <Lock className="w-3 h-3" /> Pagamento único e seguro. Nenhuma assinatura.
          </div>

          {/* Botão de Recusa (Texto Menor) */}
          <button 
            onClick={onDecline}
            className="text-brand-silver/50 hover:text-white text-sm underline transition-colors hover:no-underline"
          >
            Não, obrigado. Eu prefiro esperar o produto chegar para começar a ter resultados.
          </button>

        </div>
      </div>
    </div>
  );
};

export default UpsellPage;