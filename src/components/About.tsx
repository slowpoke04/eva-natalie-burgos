const About = () => {
  return (
    <section id="about" className="flex flex-col gap-3 lg:px-3 mb-16 lg:mb-36">
      <div className="lg:hidden font-bold text-base uppercase text-foreground">
        About
      </div>

      <div className="flex flex-col gap-6 text-base text-muted-foreground max-w-[1400px] lg:max-w-[1500px] leading-relaxed">

        <p>
          Hello! </p>
          <p>My name is Natalie, I&apos;m a Biomedical Engineering student at the
          University of Texas at Dallas. I chose BME because it merges scientific
          problem-solving with creativity to build solutions that meaningfully support
          human health. 
        </p>

        <p>
  Throughout my undergraduate career, I&apos;ve gained hands-on experience in 
  medical device development, product testing, and engineering validation 
  through <a href="https://www.argonmedical.com/" target="_blank" rel="noopener noreferrer" 
  className="font-semibold text-white">internships</a>,  
  <a href="https://www.steris.com/" target="_blank" rel="noopener noreferrer" 
  className="font-semibold text-white"> co-ops</a>, and 
  <a href="https://nucleate.org/" target="_blank" rel="noopener noreferrer" 
  className="font-semibold text-white"> fellowships</a>. 
  These roles exposed me to early-stage prototyping, cross-functional collaboration, 
  and industry-aligned engineering workflows.
</p>

<p>
  I also work in two research labs at UTD. In 
  <a href="https://labs.utdallas.edu/bmnl/" target="_blank" rel="noopener noreferrer" 
  className="font-semibold text-white"> Dr. Prasad&apos;s Lab</a>, 
  I support the development of electrochemical sensors for environmental and biological 
  applications. In 
  <a href="http://danieli.wikidot.com/" target="_blank" rel="noopener noreferrer" 
  className="font-semibold text-white"> Dr. Rodrigues&apos;s Lab</a>, 
  I contribute to biomaterials and tissue-engineering research. These experiences strengthened 
  my interest in translational engineering and shaped how I approach designing practical, 
  human-centered biomedical solutions.
</p>


      </div>
    </section>
  );
};

export default About;
