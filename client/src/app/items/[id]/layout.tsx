import { TParams } from "@/app/types/SingleProduct";
import axios from "axios";
import React from "react";


// Generate Metadata with product data (title and description page, twitter options)
export async function generateMetadata({ params }: TParams) {

  // fetch data
  const product = await axios(`http://localhost:3030/api/items/${params.id}`);

  return {
    title: `${product.data.item.title} | Mercado Libre`,
    description: `Mercado Libre Colombia - Envíos Gratis en el día | ${product.data.item.title}`,
    twitter: {
      card: 'summary_large_image',
      title: `${product.data.item.title} | Mercado Libre`,
      description: `Mercado Libre Colombia - Envíos Gratis en el día | ${product.data.item.title}`,
      images: [`${product.data.item.picture}`],
    },
  };
}

  
const layout = async ({ children,  params}: { children: React.ReactNode, params: TParams }) => {
  const product = await axios(`http://localhost:3030/api/items/${params.id}`);
  
  // Generate Metadata with product data (jsonLd options)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.data.item.title,
    image: product.data.item.picture,
    description: `Mercado Libre Colombia - Envíos Gratis en el día | ${product.data.item.title}`,
  }

  return (
    <div>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
};

export default layout;