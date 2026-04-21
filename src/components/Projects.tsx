import { Badge } from "@/components/ui/badge";
import { LuArrowUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

/* ---------------------------------------------
   Types
--------------------------------------------- */
type ProjectDetail = {
  title: string;
  description: string;
  skills: string[];
  date?: string;
  year: number; 
  image?: string;
  slug: string;
  link?: string;
  github?: string;
};

/* ---------------------------------------------
   Project Data (empty for now)
--------------------------------------------- */
const projectDetails: ProjectDetail[] = [
  {
    title: "3D-Printed Prosthetic Hand",
    slug: "prosthetic-hand",
    description:
      "Designed and fabricated a tendon-driven prosthetic hand to replicate natural finger motion using 3D printing and mechanical linkage systems.",
    skills: ["SolidWorks", "3D Printing", "Mechanical Design", "Prototyping"],
    date: "Dec 2022", 
    year: 2022,
    image: "/images/Prosthetic Hand TN.png"
  },
  {
    title: "LED Clamshell Fixture (STERIS)",
    slug: "clamshell",
    description:
      "Designed a custom clamshell fixture to ensure consistent alignment during LED curing of valves, reducing misalignment issues and improving manufacturing reliability.",
    skills: [
      "SolidWorks",
      "Design for Manufacturing",
      "Prototyping",
      "Engineering Validation",
    ],
    date: "Dec 2024",
    year: 2024, 
    image: "/images/Clamshell TN.png"
  },

  {
    title: "Sample Container Holder (STERIS)",
    slug: "tube-holder", 
    description:
      "Developed a 3D-printed holder to stabilize sample containers during lab testing, improving repeatability and workflow efficiency for the R&D team.",
    skills: [
      "SolidWorks",
      "3D Printing",
      "Rapid Prototyping",
      "Testing & Iteration",
    ],
    date: "Dec 2024",
    year: 2024, 
    image: "/images/cad1.png",
  },

  {
  title: "Electrospinning System (Junior Design)",
  slug: "electrospinning-setup",
  description:
    "Designed and assembled an electrospinning setup for fabricating nanofiber mats, integrating high-voltage components, syringe pump control, and structural design for safe and repeatable operation.",
  skills: [
    "Biomedical Engineering",
    "System Design",
    "SolidWorks",
    "Prototyping",
    "Experimental Setup",
  ],
  date: "April 2026",
  year: 2026, 
  image: "/images/Electrospinning TN.png",
}
];

/* ---------------------------------------------
   Single Project Card
--------------------------------------------- */
const ProjectItem = ({
  title,
  description,
  skills,
  date,
  year,
  image,
  slug,
  link,
  github,
}: ProjectDetail) => {
  return (
    <Link href={`/en/projects/${slug}`}>
      <div
        className="
          group flex flex-col gap-4 p-6 rounded-lg border border-border
          hover:bg-cardhover-background/60 hover:shadow-lg transition-all cursor-pointer
        "
      >
        {/* IMAGE */}
        {image && (
          <div className="w-full h-48 overflow-hidden rounded-md mb-3">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* TITLE + DATE */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-link transition-colors">
              {title}
            </h3>
            {date && (
              <p className="text-xs text-muted-foreground mt-1">{date}</p>
            )}
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* SKILLS */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="bg-link/10 text-link px-3 py-1 text-xs"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};

/* ---------------------------------------------
   Projects Section
--------------------------------------------- */
const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col gap-6 mb-32 lg:mb-48 scroll-mt-28"
    >
      {/* DESKTOP HEADER */}
      <h2 className="hidden lg:block font-bold text-foreground text-2xl tracking-tight mb-6">
        Projects
      </h2>

      {/* MOBILE HEADER */}
      <div className="lg:hidden font-bold uppercase text-base text-foreground pb-3">
        Projects
      </div>

      {projectDetails.length === 0 ? (
        <p className="text-muted-foreground">
          Projects coming soon. Currently focusing on research, internships, and
          certifications.
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[...projectDetails].sort((a, b) => b.year - a.year).map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
