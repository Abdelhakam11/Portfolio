import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiTailwindcss, SiBootstrap, SiSass, SiMui,
  SiGit, SiNpm, SiVite, SiWebpack, SiJira,
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
    title: "Frontend Core",
    skills: [
      { name: "React.js",   icon: SiReact,      color: "#61dafb" },
      { name: "Next.js",    icon: SiNextdotjs,  color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript,  color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript,  color: "#f7df1e" },
      { name: "HTML5",      icon: SiHtml5,       color: "#e34f26" },
      { name: "CSS3",       icon: SiCss3,        color: "#1572b6" },
    ],
  },
  {
    num:   "02",
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "Bootstrap",    icon: SiBootstrap,   color: "#7952b3" },
      { name: "Sass / SCSS",  icon: SiSass,        color: "#cc6699" },
      { name: "Material UI",  icon: SiMui,         color: "#007fff" },
    ],
  },
  {
    num:   "03",
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", icon: SiGit,     color: "#f05032" },
      { name: "NPM",          icon: SiNpm,     color: "#cb3837" },
      { name: "Vite",         icon: SiVite,    color: "#646cff" },
      { name: "Webpack",      icon: SiWebpack, color: "#8dd6f9" },
      { name: "Jira",         icon: SiJira,    color: "#0052cc" },
    ],
  },
];
