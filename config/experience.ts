import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: string[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "leverage",
    position: "Social Media & Video Editing Intern",
    company: "Leverage Edu",
    location: "Mumbai, India",
    startDate: new Date("2025-04-20"),
    endDate: new Date("2025-07-20"),
    description: [
      "Managed content as a founding team member for Instagram"
    ],
    achievements: [
      "Single handledly managed production and post-production of reels.",
      "Grew Instagram account with 200+ followers in couple of months",
    ],
    skills: ["Da-vinci", "Canva", "Screen-writing", "Content-management", "Shooting"] ,
    companyUrl: "https://leverageedu.com/",
    logo: "/experience/leverage.jpg",
  },
  {
    id: "ncdex",
    position: "Android Development Intern",
    company: "NCDEX",
    location: "Mumbai, India",
    startDate: new Date("2025-02-20"),
    endDate: new Date("2025-03-20"),
    description: [
      "Contributing to the P&L dashboard used by traders and senior stakeholders.",
      "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations.",
     
    ],
    achievements: [
      // "Built backend for AI-driven chatbots using LLMs (GPT-4, Llama-2), improving function call accuracy by 40%.",
      // "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
      // "Deployed ML models on AWS SageMaker instead of Replicate, cutting load times by 30%.",
      // "Created a Next.js dashboard for user analytics.",
    ],
    skills: ["XML", "Android Studio", "SQL"],
    companyUrl: "https://www.ncdex.com/",
    logo: "/experience/ncdex.jpg",
  },
 
];
