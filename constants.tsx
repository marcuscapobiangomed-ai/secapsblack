import React from 'react';
import { ShieldCheck, Activity, Brain, TestTube, Scale, Lock } from 'lucide-react';

export const FAQS = [
  {
    question: "Em quanto tempo vejo os primeiros resultados?",
    answer: "A formulação do Secaps Black começa a agir no metabolismo nos primeiros 60 minutos. A maioria dos clientes relata redução significativa do inchaço e aumento de energia nos primeiros 7 dias. A perda de peso visual costuma ser notada a partir da 3ª semana de uso contínuo."
  },
  {
    question: "Como devo tomar o tratamento?",
    answer: "O protocolo é simples: Tome 2 cápsulas por dia (uma antes do almoço e outra antes do jantar) com água. O Chá Detox (bônus) deve ser consumido pela manhã ou à tarde para potencializar a drenagem de líquidos."
  },
  {
    question: "Existem efeitos colaterais?",
    answer: "Não. O Secaps Black é um composto 100% natural aprovado pela ANVISA. Diferente de remédios sintéticos, ele não causa taquicardia, insônia ou tremores. Apenas gestantes e lactantes devem consultar um médico antes do uso."
  },
  {
    question: "A entrega é discreta? Qual o prazo?",
    answer: "Sim, a embalagem é totalmente discreta, sem logotipos externos. O prazo médio de entrega é de 3 a 7 dias úteis para capitais e até 12 dias para interior, enviado via Correios/Transportadora com código de rastreio."
  },
  {
    question: "E se não funcionar para mim?",
    answer: "Você está protegido pela nossa Garantia Blindada de 90 Dias. Se você seguir o tratamento e não ficar satisfeito com os resultados, nós compramos os potes vazios de volta pelo mesmo valor que você pagou. Risco zero."
  }
];

// -----------------------------------------------------------------------
// CONFIGURAÇÃO DE IMAGENS
// -----------------------------------------------------------------------
export const IMAGES = {
  // Imagem fornecida pelo usuário (Frascos)
  bottles: "https://i.imgur.com/DQYlE4k.png",
  
  // Imagem fornecida pelo usuário (Chá)
  tea: "https://i.imgur.com/g34NLKs.png"
};

export const PRICING_PLANS = [
  {
    id: 1,
    title: "TRATAMENTO COMPLETO (5 MESES)",
    bottles: 5,
    installments: 12,
    installmentPrice: "39,86",
    totalPrice: "397,00",
    oldPrice: "897,00",
    bestSeller: true,
    discount: "60% OFF",
    image: IMAGES.bottles
  },
  {
    id: 2,
    title: "TRATAMENTO TRIMESTRAL (3 MESES)",
    bottles: 3,
    installments: 12,
    installmentPrice: "29,82",
    totalPrice: "297,00",
    oldPrice: "597,99",
    bestSeller: false,
    discount: "50% OFF",
    image: IMAGES.bottles
  },
  {
    id: 3,
    title: "TRATAMENTO MENSAL (1 MÊS)",
    bottles: 1,
    installments: 12,
    installmentPrice: "22,29",
    totalPrice: "226,90",
    oldPrice: "297,99",
    bestSeller: false,
    discount: "20% OFF",
    image: IMAGES.bottles
  }
];

export const INGREDIENTS = [
  {
    name: "SPIRULINA PREMIUM",
    role: "Saciedade & Nutrição",
    description: "Superalimento que forma um gel no estômago, aumentando a sensação de saciedade e fornecendo micronutrientes essenciais.",
    icon: <Scale className="w-6 h-6" />
  },
  {
    name: "QUITOSANA BIOLÓGICA",
    role: "Bloqueador Lipídico",
    description: "Fibra natural que age como uma 'esponja' molecular, absorvendo parte das gorduras ingeridas antes que sejam metabolizadas.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    name: "CHIA ATIVADA",
    role: "Controle Glicêmico",
    description: "Rica em fibras solúveis e ômega-3, auxilia na regulação dos níveis de açúcar no sangue e melhora o trânsito intestinal.",
    icon: <Activity className="w-6 h-6" />
  },
  {
    name: "PICOLINATO DE CROMO",
    role: "Inibidor de Compulsão",
    description: "Mineral essencial que atua na sensibilização da insulina, reduzindo drasticamente a vontade de ingerir doces e carboidratos.",
    icon: <Brain className="w-6 h-6" />
  }
];

export const FEATURES = [
  {
    icon: <Lock className="w-6 h-6 text-brand-primary mb-2" />,
    title: "COMPRA CRIPTOGRAFADA",
    text: "Segurança de dados nível bancário"
  },
  {
    icon: <TestTube className="w-6 h-6 text-brand-primary mb-2" />,
    title: "FÓRMULA TESTADA",
    text: "Ingredientes com eficácia comprovada"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-primary mb-2" />,
    title: "GARANTIA ESTENDIDA",
    text: "Risco zero por 90 dias"
  }
];