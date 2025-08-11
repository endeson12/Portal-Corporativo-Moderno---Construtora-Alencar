import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEOHead = ({
  title = 'Construtora Alencar - Construção Civil de Qualidade em Teresina',
  description = 'Construtora Alencar oferece serviços de construção civil, reformas e projetos arquitetônicos em Teresina. Mais de 15 anos de experiência, qualidade garantida e pontualidade.',
  keywords = 'construtora teresina, construção civil, reformas, projetos arquitetônicos, engenharia civil, construção residencial, construção comercial',
  image = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
  url = 'https://construtoralencar.com.br',
  type = 'website',
  author = 'Construtora Alencar',
  robots = 'index, follow',
  canonical
}) => {
  const siteUrl = 'https://construtoralencar.com.br'
  const fullUrl = canonical ? `${siteUrl}${canonical}` : url

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Construtora Alencar" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@construtoralencar" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="pt-BR" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="BR-PI" />
      <meta name="geo.placename" content="Teresina" />
      <meta name="geo.position" content="-5.0892;-42.8019" />
      <meta name="ICBM" content="-5.0892, -42.8019" />

      {/* Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "name": "Construtora Alencar",
          "image": image,
          "description": description,
          "url": siteUrl,
          "telephone": "+55 (86) 3215-8900",
          "email": "contato@construtoralencar.com.br",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Frei Serafim, 1234",
            "addressLocality": "Teresina",
            "addressRegion": "PI",
            "postalCode": "64000-000",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -5.0892,
            "longitude": -42.8019
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday", 
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.facebook.com/construtoralencar",
            "https://www.instagram.com/construtoralencar",
            "https://www.linkedin.com/company/construtoralencar"
          ],
          "founder": {
            "@type": "Person",
            "name": "João Alencar"
          },
          "foundingDate": "2008",
          "areaServed": {
            "@type": "City",
            "name": "Teresina"
          },
          "serviceType": [
            "Construção Civil",
            "Reformas",
            "Projetos Arquitetônicos",
            "Engenharia Civil"
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEOHead
