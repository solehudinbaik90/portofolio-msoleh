import Head from "next/head";
import { HeroSection } from "../components/containers";
import { Layout } from "../components/layout";

const Homepage = () => {
  return (
    <Layout>
      <Head>
        <title>Beranda - Muhamad Soleh | Portofolio</title>
      </Head>

      {/* Start Hero Section */}
      <HeroSection scroll={false} />
      {/* End Hero Section */}
    </Layout>
  );
};

export default Homepage;
