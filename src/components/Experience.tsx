import { Badge } from "@/components/ui/badge";
import { FC } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { FaLink } from "react-icons/fa";

/* ---------------------------------------------
   Types
--------------------------------------------- */
type LabelAndLink = {
  label: string;
  link: string;
};

type ExperienceDetail = {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  mainLink?: string;
  sideLinks?: LabelAndLink[];
};

/* ---------------------------------------------
   SINGLE EXPERIENCE ITEM
--------------------------------------------- */
function ExperienceItem(props: ExperienceDetail) {
  return (
    <div
      className="glass 
        relative flex flex-col lg:flex-row w-full gap-4 lg:gap-8
        py-8 lg:py-10 border-b border-border last:border-none
        hover:bg-cardhover-background/60 transition-colors rounded-lg 
        px-4 -mx-4
      "
    >
      {/* LEFT — DATES */}
      <div className="w-full lg:w-1/3 text-sm text-muted-foreground font-medium">
        {props.startDate} — {props.endDate}
      </div>

      {/* RIGHT — CONTENT */}
      <div className="flex flex-col w-full lg:w-2/3">

        {/* POSITION + COMPANY */}
        <a
          href={props.mainLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center font-semibold text-foreground text-lg hover:text-link transition-colors"
        >
          {props.position} · {props.company}
          {props.mainLink && (
            <LuArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          )}
        </a>

        {/* DESCRIPTION */}
        <p className="mt-3 mb-4 text-muted-foreground leading-relaxed">
          {props.description}
        </p>

        {/* SIDE LINKS */}
        {props.sideLinks && (
          <div className="flex flex-wrap gap-3 mb-4">
            {props.sideLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:text-link transition-colors"
              >
                <FaLink className="h-3" /> {item.label}
              </a>
            ))}
          </div>
        )}

        {/* SKILL BADGES */}
        <div className="flex flex-wrap gap-2">
          {props.skills.map((skill, i) => (
            <Badge
              key={i}
              className="bg-link/10 text-link px-3 py-1 rounded-full text-xs font-medium tracking-wide"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   EXPERIENCE DATA (YOUR ROLES)
--------------------------------------------- */

export const experienceDetails: ExperienceDetail[] = [
  {
    position: "Undergraduate Researcher",
    company: "Dr. Prasad’s Lab · University of Texas at Dallas",
    startDate: "Aug 2022",
    endDate: "Present",
    description:
      "Support the development of electrochemical sensors for environmental and biological monitoring. Experience includes electrode fabrication, electrochemical characterization, device testing, and data analysis for real-world sensing applications.",
    skills: [
      "Electrochemistry",
      "Sensor Development",
      "Data Analysis",
      "Materials Characterization",
      "Experimental Design",
    ],
    mainLink: "https://labs.utdallas.edu/bmnl/",
  },

  {
    position: "Undergraduate Researcher",
    company: "Dr. Rodrigues’s Lab · University of Texas at Dallas",
    startDate: "Aug 2025",
    endDate: "Present",
    description:
      "Contribute to biomaterials and tissue-engineering research focused on cell–material interactions, scaffold development, and translational biomedical design. Work includes cell culture, imaging, biomaterial preparation, and mechanical analysis.",
    skills: [
      "Biomaterials",
      "Tissue Engineering",
      "Cell Culture",
      "Microscopy",
      "Lab Techniques",
    ],
    mainLink: "http://danieli.wikidot.com/",
  },

  {
    position: "R&D Engineering Intern",
    company: "Argon Medical Devices",
    startDate: "Jan 2025",
    endDate: "May 2025",
    description:
      "Worked on thrombectomy and biopsy device development within Argon’s R&D engineering division. Responsibilities included design updates, testing protocols, verification workflows, and documentation aligned with medical device standards.",
    skills: [
      "Medical Devices",
      "Product Testing",
      "Verification & Validation",
      "SolidWorks",
      "Technical Documentation",
    ],
    mainLink: "https://www.argonmedical.com/",
  },

  {
    position: "Activator Fellow",
    company: "Nucleate",
    startDate: "Dec 2024",
    endDate: "Apr 2025",
    description:
      "Selected for Nucleate’s Activator Program to support biotechnology venture development. Collaborated with an interdisciplinary team on market validation, technical feasibility, and early-stage product strategy for a biotech startup concept.",
    skills: [
      "Biotech Commercialization",
      "Market Research",
      "Pitch Development",
      "Cross-Functional Collaboration",
    ],
    mainLink: "https://nucleate.xyz/",
  },

  {
    position: "IP Law Fellow",
    company: "Fish & Richardson",
    startDate: "Oct 2024",
    endDate: "Jan 2025",
    description:
      "Completed an IP Law Fellowship exposing students to the intersection of engineering, technology, and patent strategy. Gained experience reviewing patents, conducting prior-art research, and analyzing innovation trends across biotech and engineering.",
    skills: ["Intellectual Property", "Patent Analysis", "Technical Writing"],
    mainLink: "https://fr.com/",
  },

  {
    position: "R&D Engineering Co-Op",
    company: "STERIS",
    startDate: "Jul 2024",
    endDate: "Dec 2024",
    description:
      "Worked on new product development engineering projects, including O-ring design testing, syringe component validation, LED curing fixture design, and micro-molding processes. Collaborated across engineering and manufacturing teams.",
    skills: [
      "SolidWorks",
      "Injection Molding",
      "Micro-Molding",
      "Test Method Development",
      "Root-Cause Analysis",
    ],
    mainLink: "https://www.steris.com/",
  },

  {
    position: "Summer Intern",
    company: "Worcester Polytechnic Institute (WPI)",
    startDate: "May 2024",
    endDate: "Jul 2024",
    description:
      "Designed and prototyped a non-invasive glucose monitoring wristband for infants with diabetes using near-infrared spectroscopy. Developed CAD models, fabrication processes, and performed preliminary validation testing.",
    skills: [
      "Prototype Development",
      "Biomedical Design",
      "Near-Infrared Spectroscopy",
      "SolidWorks",
      "Prototyping",
    ],
    mainLink: "https://www.wpi.edu/",
  },
];

/* ---------------------------------------------
   FULL EXPERIENCE SECTION
--------------------------------------------- */
const Experience: FC<{ experienceDetails: ExperienceDetail[] }> = ({
  experienceDetails,
}) => {
  return (
    <section
  id="experience"
  className="relative flex flex-col gap-6 mb-32 lg:mb-48 scroll-mt-28"
>
  <div
    id="experience-anchor"
    className="absolute top-0 left-0 h-[1px] w-full"
    aria-hidden
  />

  <div className="lg:hidden font-bold uppercase text-base pb-3">
    Experience
  </div>

  <div className="h-6 lg:h-12" aria-hidden />

  {experienceDetails.map((item, index) => (
    <ExperienceItem key={index} {...item} />
  ))}
</section>

  );
};

export default Experience;
