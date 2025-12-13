import { Badge } from "@/components/ui/badge";
import { FC } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

type ProjectDetail = {
  title: string;
  description: string;
  skills: string[];
  link?: string;
  github?: string;
};

const ProjectItem: FC<ProjectDetail> = ({
  title,
  description,
  skills,
  link,
  github,
}) => {
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

const Projects: FC<{ projectDetails: ProjectDetail[] }> = ({
  projectDetails,
}) => {
  return (
    <section id="projects" className="flex flex-col gap-6 mb-32 lg:mb-48">

  {/* DESKTOP HEADER */}
  <h2 className="hidden lg:block font-bold text-foreground text-2xl tracking-tight mb-6">
    Projects
  </h2>

  {/* MOBILE HEADER */}
  <div className="lg:hidden font-bold uppercase text-base text-foreground pb-3">
    Projects
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {projectDetails.map((project, index) => (
      <ProjectItem key={index} {...project} />
    ))}
  </div>
</section>

  );
};

export default Projects;
