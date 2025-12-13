import About from "@/components/About";
import Experience, { experienceDetails } from "@/components/Experience";
import Projects from "@/components/Projects";
import Footnote from "@/components/Footnote";
import PageDetailsFile from "@p/configs/page_details.json";

const Content = () => {
  return (
    <section className="flex flex-col gap-12 max-w-[720px]">
      <About />
      <Experience experienceDetails={experienceDetails} />
      <Projects projectDetails={PageDetailsFile.projects} />
      <Footnote />
    </section>
  );
};

export default Content;
