import About from "@/components/About";

import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Footnote from "@/components/Footnote";

const Content = () => {
  return (
    <section className="flex flex-col gap-16">
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Footnote />
    </section>
  );
};

export default Content;
