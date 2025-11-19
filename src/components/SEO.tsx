import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, url, image }) => {
  const fullTitle = title || 'Cinergie Digital';
  const description_default =
    description ||
    'Cinergie Digital helps enterprises modernize with AI, cloud, and data-driven solutions.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta key="description" name="description" content={description_default} />
      <link rel="canonical" href={url || 'https://cinergiedigital.com/'} />
    </Helmet>
  );
};

export default SEO;
