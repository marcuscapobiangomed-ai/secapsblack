export interface PricingPlan {
  id: number;
  title: string;
  bottles: number;
  installments: number;
  installmentPrice: string;
  totalPrice: string;
  oldPrice: string;
  bestSeller: boolean;
  discount: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}