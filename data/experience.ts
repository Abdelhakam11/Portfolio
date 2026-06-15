export interface WorkExperience {
  id:          number;
  num:         string;
  title:       string;
  company:     string;
  location:    string;
  period:      string;
  current:     boolean;
  description: string;
  color:       string;
  logo:        string;
}

export const workExperience: WorkExperience[] = [
  {
    id:      1,
    num:     "01",
    title:   "Frontend Software Engineer",
    company: "Prismatecs",
    location: "Cairo, Egypt · Hybrid",
    period:  "Nov 2025 – Present",
    current: true,
    description:
      "Develop modern, scalable web applications using React.js, Next.js, TypeScript, and JavaScript. Build reusable UI components, integrate REST APIs, optimize performance through lazy loading and code splitting, and ensure WCAG-compliant accessibility.",
    color: "#f59e0b",
    logo:  "/logo_prismatecs.png",
  },
  {
    id:      2,
    num:     "02",
    title:   "Software Engineer",
    company: "Scandiweb",
    location: "Latvia · Remote",
    period:  "Aug 2024 – Oct 2025",
    current: false,
    description:
      "Built scalable React.js & TypeScript components for international e-commerce clients (explore.omsystem.com, purdys.com). Integrated Sanity CMS and REST APIs, optimized rendering performance, and delivered WCAG-compliant interfaces across codebases serving multiple regional markets.",
    color: "#818cf8",
    logo:  "/logo_scandiweb.png",
  },
  {
    id:      3,
    num:     "03",
    title:   "Software Engineer",
    company: "Moseley Media Development",
    location: "Cairo, Egypt",
    period:  "May – Jul 2024",
    current: false,
    description:
      "Developed responsive, reusable UI components with React.js and JavaScript. Integrated REST APIs for dynamic data visualization, improved cross-device performance, and implemented accessibility best practices in an Agile team.",
    color: "#38bdf8",
    logo:  "/logo_mmd.jpeg",
  },
  {
    id:      4,
    num:     "04",
    title:   "Web Developer",
    company: "Freelancer",
    location: "Remote",
    period:  "Jun 2022 – Apr 2024",
    current: false,
    description:
      "Designed and delivered modern web applications for various clients using React.js, JavaScript, HTML5, and CSS3. Built scalable component architectures, integrated RESTful APIs, and applied WCAG accessibility standards.",
    color: "#fb923c",
    logo:  "/logo_upwork.png",
  },
];
