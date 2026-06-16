import { withBase } from "@/utils/path";

export const personal = {
  name: {
    first: "Abdelhakam",
    last:  "Elewa",
    full:  "Abdelhakam Elewa",
  },
  role:           "Frontend Software Engineer",
  location:       "Cairo, Egypt",
  locationDetail: "Cairo, Egypt · Remote Available",
  email:          "abdelhakamelewa.dev@gmail.com",
  bio:            "Building fast, accessible web products with React.js, Next.js, TypeScript & JavaScript — focused on performance and exceptional user experiences.",
  avatar:         "/imgs/Avatar.PNG",
  cv:             withBase("/abdelhakam_cv.pdf"),
  available:      true,
  availableText:  "Open to Opportunities",

  stats: [
    { value: "3+", label: "Years Exp"      },
    { value: "5+", label: "Projects Built" },
    { value: "4",  label: "Companies"      },
  ],

  social: {
    github:   "https://github.com/Abdelhakam11",
    linkedin: "https://www.linkedin.com/in/abdelhakam-elewa-78613a205/",
  },

  techStack: [
    "React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
    "Tailwind CSS", "Sass / SCSS", "Material UI",
    "Git & GitHub", "Vite", "REST APIs", "Accessibility",
  ],
};
