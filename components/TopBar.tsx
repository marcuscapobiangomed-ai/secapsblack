import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-brand-card border-b border-brand-primary/20 text-brand-silverLight text-center py-2 px-4 text-xs font-medium tracking-wider flex items-center justify-center gap-2">
      <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
      LOTE DISPONÍVEL PARA ENVIO IMEDIATO
    </div>
  );
};

export default TopBar;