// import { Github, Linkedin, Youtube } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Button } from "@/components/ui/button";


import { SiGooglescholar } from "react-icons/si"; // ← Google Scholar icon

// TODO: magic links and social media, use json or some config file to obtain reference link
const Contacts = () => {
  return (
    <div className="flex flex-row items-center justify-left gap-6 mt-10">
      <Button variant="outline">
        <a
          href="https://www.linkedin.com/in/eva-natalieburgos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin className="h-6 w-fit" />
        </a>
      </Button>
      <Button variant="outline">
        <a
          href="https://github.com/slowpoke04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="h-6 w-fit" />
        </a>
      </Button>
      <Button variant="outline" className="">
       <a
  href="https://scholar.google.com/citations?user=YOUR_ID"
  target="_blank"
  rel="noopener noreferrer"
  className="social-icon group"
>
  <SiGooglescholar
    className="
      h-5 w-5 
      text-foreground 
      group-hover:text-black 
      transition-colors
    "
  />
</a>



      </Button>
     
    </div>
  );
};

export default Contacts;
