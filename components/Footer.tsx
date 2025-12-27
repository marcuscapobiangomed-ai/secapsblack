import React from 'react';
import { Shield, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-brand-primary/20 text-brand-silver">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-sm">
        
        {/* Coluna 1: Sobre */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-base">Secaps Black</h4>
          <p className="opacity-70 mb-6 leading-relaxed">
            Tecnologia bioativa avançada para quem busca performance metabólica, controle de apetite e resultados reais de forma 100% natural.
          </p>
          <div className="flex items-center gap-2 text-brand-primary font-medium bg-brand-primary/10 w-fit px-3 py-1.5 rounded-full border border-brand-primary/20">
            <Shield className="w-4 h-4" /> Site 100% Seguro
          </div>
        </div>

        {/* Coluna 2: Links Úteis */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-base">Acesso Rápido</h4>
          <ul className="space-y-3 opacity-70">
            <li><a href="#ofertas" className="hover:text-brand-primary transition-colors hover:pl-1 duration-200">Adquirir Protocolo</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors hover:pl-1 duration-200">Rastrear Pedido</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors hover:pl-1 duration-200">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors hover:pl-1 duration-200">Políticas de Privacidade</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors hover:pl-1 duration-200">Trocas e Devoluções</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-base">Central de Ajuda</h4>
          <ul className="space-y-3 opacity-70">
            <li className="flex flex-col">
              <span className="text-xs uppercase font-bold text-brand-silver/50">Email</span>
              <span className="text-white">suporte@secapsblack.com</span>
            </li>
            <li className="flex flex-col">
              <span className="text-xs uppercase font-bold text-brand-silver/50">Atendimento</span>
              <span>Segunda a Sexta: 09h às 18h</span>
            </li>
            <li className="flex flex-col">
              <span className="text-xs uppercase font-bold text-brand-silver/50">CNPJ</span>
              <span>00.000.000/0001-00</span>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Pagamento */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-base">Pagamento Seguro</h4>
          <div className="flex flex-wrap gap-2 opacity-90 mb-6">
            {/* Payment Icons */}
            <div className="bg-white px-2 py-1 rounded w-10 h-7 flex items-center justify-center shadow-sm">
               <div className="w-3 h-3 rounded-full bg-red-500 mr-[-4px] mix-blend-multiply"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500 mix-blend-multiply"></div>
            </div>
            <div className="bg-white px-2 py-1 rounded w-10 h-7 flex items-center justify-center shadow-sm text-[8px] font-bold text-blue-800 italic">Visa</div>
            <div className="bg-white px-2 py-1 rounded w-10 h-7 flex items-center justify-center shadow-sm text-[6px] font-bold text-black flex flex-col leading-none text-center"><span>HIPER</span><span>CARD</span></div>
            <div className="bg-white px-2 py-1 rounded w-10 h-7 flex items-center justify-center shadow-sm text-[8px] font-bold text-blue-600">Elo</div>
            <div className="bg-white px-2 py-1 rounded w-10 h-7 flex items-center justify-center shadow-sm text-[8px] font-bold text-green-600 flex items-center gap-0.5"><div className="w-1.5 h-1.5 bg-green-500 rounded-sm rotate-45"></div>Pix</div>
          </div>
          
          <div className="bg-brand-dark/50 p-4 rounded-lg border border-brand-primary/10 flex items-start gap-3">
             <Lock className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" />
             <p className="text-xs opacity-60 leading-tight">
               Transações processadas com tecnologia de criptografia SSL de ponta a ponta. Seus dados estão 100% protegidos.
             </p>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-primary/10 pt-8 text-center px-4">
        <p className="text-brand-silver/40 text-xs font-medium">
          © {new Date().getFullYear()} SECAPS BLACK. TODOS OS DIREITOS RESERVADOS.
        </p>
        <p className="text-brand-silver/20 text-[10px] mt-3 max-w-3xl mx-auto leading-normal">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usar resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam.
        </p>
      </div>
    </footer>
  );
};

export default Footer;