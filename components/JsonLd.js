import { siteConfig } from "@/lib/site-config";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        image: `${siteConfig.url}/logo.png`,
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        founder: {
          "@type": "Person",
          "@id": `${siteConfig.url}/#founder`,
          name: siteConfig.founder.name,
          alternateName: siteConfig.founder.alternateName,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "NG",
        },
        sameAs: [],
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#founder`,
        name: siteConfig.founder.name,
        alternateName: siteConfig.founder.alternateName,
        jobTitle: "Founder",
        worksFor: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
