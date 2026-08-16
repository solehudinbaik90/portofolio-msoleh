import Head from "next/head";
import { ContactSection } from "../components/containers";
import { Layout } from "../components/layout";
import { GoogleMap, SectionHeading } from "../components/utils";

const contact = () => {
  return (
    <Layout>
      <Head>
        <title>Kontak - Muhamad Soleh | Portofolio</title>
      </Head>

      {/* Start Contact Section */}
      <section
        name="section-contact"
        className="contact-section pt-24 lg:pt-28 xl:pt-32"
        id="section-contact"
      >
        <div className="container mx-auto">
          <SectionHeading
            title="Kontak Saya"
            watermark="Contact"
            animated={false}
          />
          <ContactSection />
        </div>
      </section>
      {/* End Contact Section */}

      {/* Start Location Section */}
      <section
        name="section-location"
        className="location-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading
            title="Lokasi Saya"
            watermark="Location"
            animated={false}
          />
          <div className="rounded-lg border border-white border-opacity-10 overflow-hidden">
            <GoogleMap />
          </div>
        </div>
      </section>
      {/* End Location Section */}

      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </Layout>
  );
};

export default contact;
