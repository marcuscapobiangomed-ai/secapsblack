import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'track';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  let baseStyles = "font-medium rounded-lg transition-all duration-300 flex items-center justify-center tracking-wide";
  
  const variants = {
    primary: "bg-brand-primary hover:bg-brand-primaryDark text-white py-4 px-8 text-lg shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] hover:-translate-y-0.5",
    secondary: "bg-brand-silverLight/10 hover:bg-brand-silverLight/20 border border-brand-silver/30 text-brand-silverLight py-3 px-6 text-base",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a] py-2 px-6 rounded-md text-sm font-bold shadow-lg",
    track: "bg-brand-card border border-brand-silver/20 text-brand-silver hover:text-white py-2 px-6 rounded-md text-sm"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;