import { Badge } from "@/components/ui/badge";
import { LuArrowUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

/* ---------------------------------------------
   Types
--------------------------------------------- */
type ProjectDetail = {
  title: string;
  description: string;
  skills: string[];
  link?: string;
  github?: string;
};

/* ---------------------------------------------
   Project Data (empty for now)
--------------------------------------------- */
const projectDetails: ProjectDetail[] = [];

/* ---------------------------------------------
   Single Project Card
--------------------------------------------- */
const ProjectItem = ({
  title,
  description,
  skills,
  link,
  github,
}: ProjectDetail) => {
  return (
    <div
      className="
        group flex flex-col gap-4 p-6 rounded-lg border border-border
        hover:bg-cardhover-background/60 hover:shadow-lg transition-all
      "
    >
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-link transition-colors">
          {title}
        </h3>

        {/* Links */}
        <div className="flex items-center gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-link transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-link transition-colors"
            >
              <LuArrowUpRight className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-muted-foreground leading-relaxed">{description}</p>

      {/* SKILL TAGS */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            className="bg-link/10 text-link px-3 py-1 rounded-full text-xs font-medium tracking-wide"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
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
          {projectDetails.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
