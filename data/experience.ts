export interface WorkExperience {
  id:          number;
  num:         string;
  title:       string;
  company:     string;
  location:    string;
  period:      string;
  current:     boolean;
  /** Plain text; wrap a phrase in **double asterisks** to render it bold. */
  description: string;
  color:       string;
  logo:        string;
}

export const workExperience: WorkExperience[] = [
  {
    id:      1,
    num:     "01",
    title:   "Full Stack Software Engineer",
    company: "Prismatecs",
    location: "Cairo, Egypt · Hybrid",
    period:  "Nov 2025 – Present",
    current: true,
    description:
      "Full-stack development of commercial applications with PHP, Laravel, and JavaScript. Rafed — a platform serving charitable associations in Saudi Arabia, including digital services associated with the Two Holy Mosques (**Al-Masjid Al-Haram, Makkah, and Al-Masjid An-Nabawi, Madinah**): backend features, business logic, database operations, and API integrations. Brassbell — a Property Management System (PMS): application features, backend logic, and frontend/backend integration. Teckdo — a Content Management System (CMS) currently in development: backend functionality and core features.",
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
      "Built features for international e-commerce platforms. OM System / OMdigital (explore.omsystem.com) — a multi-region, multi-language store with ~70 store views and 20+ languages: reusable React.js and TypeScript components, Sanity CMS integration across 55+ content blocks, PLP/PDP work, accessibility and performance improvements, and responsive email templates for three regional sites. Purdy's Chocolatier (purdys.com) — homepage sections, header/footer, sign-in/sign-out, dashboard functionality, and API integrations.",
    color: "#818cf8",
    logo:  "/logo_scandiweb.png",
  },
  {
    id:      3,
    num:     "03",
    title:   "Software Engineer Intern",
    company: "Moseley Media Development",
    location: "Cairo, Egypt",
    period:  "May – Jul 2024",
    current: false,
    description:
      "Gained practical backend experience with PHP and Symfony. Developed and maintained application features, worked with backend business logic and database operations, integrated APIs, and assisted with debugging, testing, and maintenance.",
    color: "#38bdf8",
    logo:  "/logo_mmd.jpeg",
  },
  {
    id:      4,
    num:     "04",
    title:   "Software Engineer",
    company: "Freelance",
    location: "Remote",
    period:  "Jun 2022 – Apr 2024",
    current: false,
    description:
      "Built websites and web applications for different clients using React.js, JavaScript, HTML5, and CSS3. Developed reusable components, integrated REST APIs and third-party services, connected frontends to backend services, and managed work from requirements to delivery.",
    color: "#fb923c",
    logo:  "/logo_upwork.png",
  },
];
