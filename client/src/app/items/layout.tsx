import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Mercado Libre Colombia - Envíos Gratis en el día',
  description: 'Compre productos con Envío Gratis en el día en Mercado Libre Colombia. Encuentre miles de marcas y productos a precios increíbles.',
}
  
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default layout;