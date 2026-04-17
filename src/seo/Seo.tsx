import { Helmet } from "react-helmet-async";
import siteConfig from "../config/SiteConfig";

export type SeoJsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

type SeoProps = {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: string;
  canonicalPath?: string;
  noIndex?: boolean;
  jsonLd?: SeoJsonLd;
};

const absoluteUrl = (pathOrUrl: string, baseUrl: string) => {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return new URL(pathOrUrl, `${baseUrl}/`).toString();
};

const Seo = ({
  title,
  description,
  keywords = [],
  image,
  type = "website",
  canonicalPath,
  noIndex = false,
  jsonLd,
}: SeoProps) => {
  const siteUrl = siteConfig.siteUrl;
  const pathname = canonicalPath ?? "/";
  const canonicalUrl = absoluteUrl(pathname, siteUrl);
  const socialImage = absoluteUrl(image ?? siteConfig.defaultSocialImage, siteUrl);
  const graphItems = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  const robots = noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large";

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-NG" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="robots" content={robots} />
      <meta name="author" content={siteConfig.companyName} />
      <meta name="theme-color" content="#050507" />
      <meta property="og:site_name" content={siteConfig.companyName} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={`${title} | ${siteConfig.companyName}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
      <link rel="canonical" href={canonicalUrl} />
      {graphItems.map((entry, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
