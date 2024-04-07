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
    "Aspiring Machine Learning Engineer",
  summary:
    "Aspiring Machine Learning Engineer with a solid academic foundation, passionate about leveraging AI and data to drive decision-making. Currently seeking opportunities to apply my skills in Deep Learning and predictive modeling to generate actionable insights and influence business outcomes with data-driven strategies.",
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
      school: "laSalle - Universitat Ramon Llull",
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
      company: "KPMG ES - ITGH Barcelona",
      link: "https://kpmg.com/es/es/home.html",
      badges: [],
      title: "Strategy Consultant",
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
      title: "CC eInvoicing",
      techStack: [
        "Big Data",
        "Microsoft Azure",
        "Data Factory",
        "SQL Database",
      ],
      description: "Automate API data collection, data processing for KPI calculation and monthly report generation.",
      logo: ConsultlyLogo,
      link: {
        label: "CC eInvoicing Label",
        href: "https://www.google.es/",
      }},
    {
      title: "Kaggle Competitions",
      techStack: [
        "Deep Learning",
        "Forecasting",
        "Machine Learning",
        "EDA",
        "Statistics",
        "Data Preprocessing",
      ],
      description: "Participated in multiple Kaggle competitions.",
      logo: ConsultlyLogo,
      link: {
        label: "Kaggle Label",
        href: "https://www.kaggle.com/",
      },
    },
  ],
} as const;
