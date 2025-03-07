// PageMetadata.js
import React from 'react';
import { Helmet } from 'react-helmet';

const PageMetadata = ({ title, description, canonicalUrl, ogTitle, ogDescription }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default PageMetadata;
