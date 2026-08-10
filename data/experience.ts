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
    title:   "Full Stack Developer (React & Node.js)",
    company: "Prismatecs",
    location: "Cairo, Egypt · Hybrid",
    period:  "Nov 2025 – Present",
    current: true,
    description:
      "Develop scalable full-stack applications using React.js, Next.js, TypeScript, and Node.js. Build and consume RESTful APIs, design reusable frontend components integrated with backend services, implement authentication and authorization for secure user access, and optimize performance through code splitting, lazy loading, and efficient API handling.",
    color: "#f59e0b",
    logo:  "/logo_prismatecs.png",
  },
  {
    id:      2,
    num:     "02",
    title:   "Full Stack Developer (React & Node.js)",
    company: "Scandiweb",
    location: "Latvia · Remote",
    period:  "Aug 2024 – Oct 2025",
    current: false,
    description:
      "Developed full-stack features using React.js and Node.js-based services for international e-commerce clients (explore.omsystem.com, purdys.com). Built and integrated REST APIs, contributed to authentication systems, dashboards, and secure workflows, and integrated applications with Sanity CMS and third-party services. Improved scalability and performance through optimized rendering and API usage, and collaborated with QA, DevOps, and business teams in Agile environments.",
    color: "#818cf8",
    logo:  "/logo_scandiweb.png",
  },
  {
    id:      3,
    num:     "03",
    title:   "Full Stack Developer (React & Node.js)",
    company: "Moseley Media Development",
    location: "Cairo, Egypt",
    period:  "May – Jul 2024",
    current: false,
    description:
      "Developed full-stack web applications using React.js and Node.js fundamentals. Built and integrated API-driven features for dynamic content delivery, designed responsive user interfaces connected to backend services, and assisted in testing, debugging, and performance improvements.",
    color: "#38bdf8",
    logo:  "/logo_mmd.jpeg",
  },
  {
    id:      4,
    num:     "04",
    title:   "Freelance Full Stack Developer",
    company: "Freelancer",
    location: "Remote",
    period:  "Jun 2022 – Apr 2024",
    current: false,
    description:
      "Built full-stack applications for various clients using React, JavaScript, and Node.js-based backend services. Developed RESTful APIs and integrated third-party platforms, delivering responsive, user-focused interfaces with scalable backend logic and managing end-to-end development from UI implementation to backend integration.",
    color: "#fb923c",
    logo:  "/logo_upwork.png",
  },
];
