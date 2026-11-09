import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiBootstrap, SiSass, SiMui,
  SiPhp, SiLaravel, SiSymfony, SiMysql,
  SiGit, SiGithub, SiDocker, SiNpm, SiWebpack, SiJira,
} from "react-icons/si";
import type { IconType } from "react-icons";

export interface Skill {
  name:  string;
  icon:  IconType;
  color: string;
}

export interface SkillCategory {
  num:    string;
  title:  string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    num:   "01",
    title: "Backend",
    skills: [
      { name: "PHP",       icon: SiPhp,     color: "#777bb4" },
      { name: "Laravel",   icon: SiLaravel, color: "#ff2d20" },
      { name: "Symfony",   icon: SiSymfony, color: "#ffffff" },
      { name: "MySQL",     icon: SiMysql,   color: "#4479a1" },
    ],
  },
  {
    num:   "02",
    title: "Frontend",
    skills: [
      { name: "React.js",   icon: SiReact,      color: "#61dafb" },
      { name: "Next.js",    icon: SiNextdotjs,  color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "HTML5",      icon: SiHtml5,      color: "#e34f26" },
      { name: "CSS3",       icon: SiCss,        color: "#1572b6" },
    ],
  },
  {
    num:   "03",
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "Bootstrap",    icon: SiBootstrap,   color: "#7952b3" },
      { name: "Sass / SCSS",  icon: SiSass,        color: "#cc6699" },
      { name: "Material UI",  icon: SiMui,         color: "#007fff" },
    ],
  },
  {
    num:   "04",
    title: "Tools & Workflow",
    skills: [
      { name: "Git",     icon: SiGit,     color: "#f05032" },
      { name: "GitHub",  icon: SiGithub,  color: "#ffffff" },
      { name: "Docker",  icon: SiDocker,  color: "#2496ed" },
      { name: "NPM",     icon: SiNpm,     color: "#cb3837" },
      { name: "Webpack", icon: SiWebpack, color: "#8dd6f9" },
      { name: "Jira",    icon: SiJira,    color: "#0052cc" },
    ],
  },
];
