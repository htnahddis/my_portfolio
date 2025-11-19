import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@htnahddis",
    icon: Icons.gitHub,
    link: "https://github.com/htnahddis",
  },
  {
    name: "LinkedIn",
    username: "Siddhanth Chapade",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/siddhanthchapade",
  },
  // {
  //   name: "Twitter",
  //   username: "@namanbarkiya",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/namanbarkiya",
  // },
  {
    name: "Gmail",
    username: "student.siddhanthchapade",
    icon: Icons.gmail,
    link: "mailto:student.siddhanthchapade@gmail.com",
  },
];
