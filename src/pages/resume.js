import Head from "next/head";
import { ResumeSection, SkillsSection } from "../components/containers";
import { Layout } from "../components/layout";
import { SectionHeading } from "../components/utils";

const resume = () => {
  return (
    <Layout>
      <Head>
        <title>Resume - Muhamad Soleh | Portofolio</title>
      </Head>

      {/* Start Skills Section */}
      <section
        name="section-skills"
        className="skills-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading
            title="Keahlian Saya"
            watermark="Skills"
            animated={false}
          />
          <SkillsSection />
        </div>
      </section>
      {/* End Skills Section */}

      {/* Start Resume Section */}
      <section
        id="section-resume"
        name="section-resume"
        className="resume-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading
            title="Resume Saya"
            watermark="Resume"
            animated={false}
          />
          <ResumeSection />
        </div>
      </section>
      {/* End Resume Section */}

      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </Layout>
  );
};

export default resume;
