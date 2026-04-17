import siteConfig from "../config/SiteConfig";

const absoluteUrl = (pathOrUrl: string) =>
  /^https?:\/\//i.test(pathOrUrl)
    ? pathOrUrl
    : new URL(pathOrUrl, `${siteConfig.siteUrl}/`).toString();

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.companyName,
  url: siteConfig.siteUrl,
  logo: absoluteUrl(siteConfig.logo),
  image: absoluteUrl(siteConfig.defaultSocialImage),
  email: siteConfig.email,
  telephone: `+234${siteConfig.phone.slice(1)}`,
  sameAs: [siteConfig.instagram],
  foundingDate: "2011",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.city,
    addressCountry: "NG",
  },
  slogan: siteConfig.tagline,
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.companyName,
  image: absoluteUrl(siteConfig.defaultSocialImage),
  url: siteConfig.siteUrl,
  email: siteConfig.email,
  telephone: `+234${siteConfig.phone.slice(1)}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.city,
    addressCountry: "NG",
  },
  areaServed: "Nigeria",
  priceRange: "$$$",
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.companyName,
  url: siteConfig.siteUrl,
  inLanguage: "en-NG",
});

export const breadcrumbSchema = (
  items: Array<{ name: string; path: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const absoluteSchemaUrl = absoluteUrl;
