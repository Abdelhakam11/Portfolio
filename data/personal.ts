import { withBase } from "@/utils/path";

export const personal = {
  name: {
    first: "Abdelhakam",
    last:  "Elewa",
    full:  "Abdelhakam Elewa",
  },
  role:           "Software Engineer | PHP, Laravel, React.js & Next.js",
  location:       "Cairo, Egypt",
  locationDetail: "Cairo, Egypt · Remote Available",
  email:          "abdelhakamelewa.dev@gmail.com",
  phone:          "+201090125176",
  bio:            "Full Stack Software Engineer with ~3 years of experience building web applications with PHP & Laravel on the backend and React.js, Next.js & TypeScript on the frontend — RESTful APIs, business logic, authentication, and international e-commerce platforms.",
  avatar:         "/imgs/Avatar.PNG",
  cv:             withBase("/abdelhakam_cv.pdf"),
  available:      true,
  availableText:  "Open to Opportunities",

  stats: [
    { value: "3",  label: "Years Exp"      },
    { value: "5+", label: "Projects Built" },
    { value: "4",  label: "Companies"      },
  ],

  social: {
    github:   "https://github.com/Abdelhakam11",
    linkedin: "https://www.linkedin.com/in/abdelhakam-elewa-78613a205/",
  },

  techStack: [
    "PHP", "Laravel", "Symfony", "MySQL", "REST APIs",
    "React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
    "Tailwind CSS", "Sass / SCSS", "Git & GitHub", "Docker", "Accessibility",
  ],
};
