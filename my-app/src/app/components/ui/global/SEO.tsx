import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

/** Manage document head elements for SEO */
export const SEO: React.FC<SEOProps> = ({ title, description, image, url }) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    <meta property="og:title" content={title} />
    {description && <meta property="og:description" content={description} />}
    {url && <meta property="og:url" content={url} />}
    {image && <meta property="og:image" content={image} />}
  </Helmet>
);
