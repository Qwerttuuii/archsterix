import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Seo from "../seo/Seo";
import { breadcrumbSchema, organizationSchema } from "../seo/schema";

type InfoPageProps = {
  title: string;
  description: string;
  canonicalPath: string;
  noIndex?: boolean;
};

const InfoPage = ({ title, description, canonicalPath, noIndex = false }: InfoPageProps) => {
  return (
    <>
      <Seo
        title={`${title} | Arch-Sterix Nigeria Limited`}
        description={description}
        canonicalPath={canonicalPath}
        noIndex={noIndex}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: title, path: canonicalPath },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            description,
          },
        ]}
      />
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          background: "#050507",
          color: "#fff",
          padding: "160px 24px 80px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            border: "1px solid rgba(201, 166, 70, 0.18)",
            background: "rgba(255, 255, 255, 0.02)",
            padding: "48px 32px",
          }}
        >
          <p
            style={{
              color: "#c9a646",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Arch-Sterix Nigeria Limited
          </p>
          <h1 style={{ margin: "0 0 16px", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            {title}
          </h1>
          <p
            style={{
              margin: 0,
              color: "#c7c7c7",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            {description}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default InfoPage;
