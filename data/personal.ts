import { withBase } from "@/utils/path";

export const personal = {
  name: {
    first: "Abdelhakam",
    last:  "Elewa",
    full:  "Abdelhakam Elewa",
  },
  role:           "Full Stack Developer",
  location:       "Cairo, Egypt",
  locationDetail: "Cairo, Egypt · Remote Available",
  email:          "abdelhakamelewa.dev@gmail.com",
  phone:          "+201090125176",
  bio:            "Full Stack Developer with 2+ years of experience building scalable web applications using React.js, Next.js, TypeScript & Node.js — focused on RESTful APIs, authentication systems, and performance optimization.",
  avatar:         "/imgs/Avatar.PNG",
  cv:             withBase("/abdelhakam_cv.pdf"),
  available:      true,
  availableText:  "Open to Opportunities",

  stats: [
    { value: "2+", label: "Years Exp"      },
    { value: "5+", label: "Projects Built" },
    { value: "4",  label: "Companies"      },
  ],

  social: {
    github:   "https://github.com/Abdelhakam11",
    linkedin: "https://www.linkedin.com/in/abdelhakam-elewa-78613a205/",
  },

  techStack: [
    "React.js", "Next.js", "TypeScript", "JavaScript", "Node.js", "HTML5", "CSS3",
    "Tailwind CSS", "Sass / SCSS", "Material UI",
    "Git & GitHub", "Vite", "REST APIs", "Accessibility",
  ],
};
