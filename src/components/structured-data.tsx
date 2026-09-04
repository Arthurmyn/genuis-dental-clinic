import { siteConfig } from "@/lib/site-data";

const SITE_URL = "https://genuis-dental.vercel.app";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/photos/genius-logo.jpg`,
    url: SITE_URL,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Толе би, 55",
      addressLocality: siteConfig.addressLocality,
      addressCountry: siteConfig.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lon,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating,
      reviewCount: siteConfig.reviewCount,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.twoGisFirmUrl,
      siteConfig.social.whatsapp,
    ],
    areaServed: {
      "@type": "City",
      name: "Астана",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
