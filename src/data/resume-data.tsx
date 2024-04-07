import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adrià de Juan García",
  initials: "AJG",
  location: "Barcelona, Spain, CET",
  locationLink: "https://www.google.com/maps/place/Barcelona",
  about:
    "About TBC",
  summary:
    "Summary TBC",
  avatarUrl: "https://media.licdn.com/dms/image/D4D03AQG0au-qTy-AZw/profile-displayphoto-shrink_800_800/0/1690399114062?e=1718236800&v=beta&t=dBAEryqYMtGxio8mGAzXp6xWcIMTgTeRTbQYHEP9QOs",
  personalWebsiteUrl: "https://www.google.es",
  contact: {
    email: "adriadejuan22@gmail.com",
    tel: "+34633227327",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/adriadejuan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adriadejuan/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "laSalle - Universitat Ramón Llull",
      degree: "Master of Science - Data Science",
      start: "2023",
      end: "2024",
    },
    {
      school: "Universitat de Barcelona",
      degree: "Bachelor of Science - Mathematics",
      start: "2017",
      end: "2021",
    },
    {
      school: "University of Warwick",
      degree: "Bachelor of Science - Mathematics",
      start: "2020",
      end: "2021",
    },
    {
      school: "OAK House British School",
      degree: "High School",
      start: "2013",
      end: "2016",
    },
    {
      school: "Saint George's School",
      degree: "Primary School",
      start: "2000",
      end: "2013",
    },
    {
      school: "Universitat de Girona",
      degree: "Bachelor of Science - Computer Science",
      start: "2016",
      end: "2017",
    },
  ],
  work: [
    {
      company: "KPMG",
      link: "https://kpmg.com/es/es/home.html",
      title: "Strategy Consultant - ITGH",
      logo: ParabolLogo,
      start: "2022",
      end: "Present",
      description:
        "Job description TBC",
    },
    {
      company: "Allianz Technology",
      link: "https://tech.allianz.com/en.html",
      badges: ["Internship"],
      title: "Technical Support",
      logo: ClevertechLogo,
      start: "2021",
      end: "2021",
      description:
        "Job description TBC",
    },
  ],
  skills: [
    "PyTorch",
    "SQL",
    "Data Science",
    "Artificial Inteligence",
    "Machine Learning",
    "Deep Learning",
    "Power BI",
    "Statistics",
    "LaTeX",
    "Scrum",
    "R",
    "SQL",
    "MATLAB",
    "Git",
    "Docker",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
