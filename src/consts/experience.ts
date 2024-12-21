import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaJava, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

interface Job {
  title: string;
  location: string;
  description: string;
  icon: React.ReactElement;
  tags: string[];
  date: string;
}

export const jobs: Job[] = [
  {
    title: "Software Developer",
    location: "Viamatica - Telconet",
    description: `
 • Managed microservices with Spring Boot, ensuring efficient inter-service communication using Kafka and gRPC.

• Performed debugging and error resolution in existing applications to maintain optimal functionality and enhance user satisfaction.

• Gained comprehensive experience in the software development lifecycle, from planning and development to testing and deployment, by working collaboratively with cross-functional teams.

• Strengthened proficiency in GitLab, including repository management, branch creation and merging, and effective collaboration on team projects.
    `,
    icon: React.createElement(FaJava),
    tags: ["Springboot", "Angular", "Oracle", "python", "GitLab"],
    date: "Oct 2023 - present",
  },
  {
    title: "Frontend Developer",
    location: "Freelance - Kickersoft SAS",
    description: `
 • Implemented Static Site Generation (SSG) to reduce load times and enhance SEO, improving overall site performance.

• Utilized Server-Side Rendering (SSR) to optimize content delivery, enabling faster and more efficient content loading for users.

• Integrated Schema.org structured data to boost SEO, increasing the website's visibility and discoverability in search engine results.
    `,
    icon: React.createElement(FaReact),
    tags: ["React", "Next.js", "TailwindCSS", "SEO", "Schema.org"],
    date: "Jan 2023 - Oct 2023",
  },
  {
    title: "Software Developer Intern",
    location: "GAD Santa Elena",
    description: `
    I worked on the development of a web application for the registration and consultation of student information for a laptop delivery project.
    `,
    icon: React.createElement(CgWorkAlt),
    tags: ["HTML", "CSS", "JavaScript"],
    date: "Ago 2022 - Oct 2022",
  },
  {
    title: "Ingeniero en Tecnologías de la Información",
    location: "UPSE, Santa Elena, Ecuador",
    description: "",
    icon: React.createElement(LuGraduationCap),
    tags: ["Java", "React", "Node.js", "MongoDB", "MySQL"],
    date: "2019 - 2023",
  },
];
