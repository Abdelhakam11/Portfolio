export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  tags: string[];
  category?: string;
  year?: string;
  duration?: string;
  client?: string;
  featured?: boolean;
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  technologies?: {
    frontend?: string[];
    backend?: string[];
    tools?: string[];
  };
  features?: string[];
  challenges?: string[];
  solutions?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Stylehive E-Commerce Store",
    subtitle: "Featured Project",
    description:
      "A fully-featured e-commerce storefront built with React 18 and TypeScript. Powered by TanStack Query for server-state management and Redux Toolkit for client-state, featuring infinite scroll, live search, cart, favourites, and skeleton loading.",
    longDescription:
      "Stylehive is a modern e-commerce SPA that fetches real product data from the DummyJSON REST API. It supports infinite-scroll product browsing with automatic pagination, category filtering via sidebar and header nav, debounced live search with a suggestions dropdown, a full shopping cart with quantity controls, and a favourites system. Client state (cart & favourites) is stored in a normalized Redux store using createEntityAdapter for O(1) lookups. Route-level code splitting via React.lazy keeps the initial bundle small, and shimmer skeleton loaders keep the UI responsive during data fetches.",
    image: "/imgs/project1.png",
    images: [
      "/imgs/Project1/1.png",
      "/imgs/Project1/2.png",
      "/imgs/Project1/3.png",
      "/imgs/Project1/4.png",
      "/imgs/Project1/5.png",
      "/imgs/Project1/6.png",
      "/imgs/Project1/7.png",
      "/imgs/Project1/8.png",
      "/imgs/Project1/9.png",
    ],
    links: {
      github:
        "https://github.com/Abdelhakam11/e-commerce",
    },
    tags: ["React", "TypeScript", "Redux Toolkit", "TanStack Query", "SCSS"],
    category: "Frontend",
    year: "2023",
    duration: "1 months",
    client: "Personal Project",
    featured: true,
    technologies: {
      frontend: [
        "React 18",
        "TypeScript",
        "React Router v6",
        "TanStack Query v5",
        "Redux Toolkit",
        "SCSS + BEM",
        "React Slick",
        "FontAwesome 6",
      ],
      tools: [
        "DummyJSON REST API",
        "createEntityAdapter",
        "Infinite Scroll",
        "Code Splitting",
        "Skeleton Loading",
      ],
    },
    features: [
      "Infinite Scroll Product Browsing with Auto-Pagination",
      "Category Filtering via Sidebar and Header Dropdown",
      "Live Search with Debounced Suggestions Dropdown",
      "Product Detail Page with Similar Products Section",
      "Shopping Cart with Add, Remove, and Quantity Controls",
      "Favourites System with Save and Unsave",
      "Shimmer Skeleton Loaders During Data Fetching",
      "Route-Level Code Splitting with React.lazy and Suspense",
      "Normalized Redux Store with O(1) Entity Lookups",
      "Mobile-First Responsive Design with SCSS BEM",
      "Cart Alert Notifications on Product Actions",
      "Sales and Discount Banners",
    ],
    challenges: [
      "Managing server state and client state in sync without redundant fetches",
      "Keeping cart and favourites lookups performant as the product list grows",
      "Implementing smooth infinite scroll without layout jank or duplicate requests",
      "Delivering a fast initial load while supporting rich, multi-page routing",
    ],
    solutions: [
      "Adopted TanStack Query v5 for all server state with a 5-minute stale / 10-minute GC cache, eliminating manual useEffect fetching",
      "Used Redux Toolkit's createEntityAdapter to store cart and favourites as normalized { ids, entities } dictionaries, enabling O(1) lookups",
      "Implemented useInfiniteQuery with an IntersectionObserver that triggers fetchNextPage when within 300 px of the page bottom",
      "Applied React.lazy route splitting so each page loads as a separate chunk, with a PageFallback skeleton shown via Suspenseduring chunk load",
    ],
  },
  {
    id: 2,
    title: "BlogApp",
    subtitle: "Frontend Project",
    description:
      "A production-grade blog application built with Next.js 16, TanStack Query v5, and Tailwind CSS v4. Features optimistic UI for instant feedback, hover-based prefetching, data normalization, lazy-loaded comments, and full keyboard accessibility.",
    longDescription:
      "BlogApp is a full-featured blog platform built on clean, feature-based architecture with strict layer boundaries. All server state is owned by TanStack Query — components never fetch directly. Optimistic updates power both post creation and deletion, giving users instant UI feedback with automatic cache rollback on error. Posts are stored in a normalized { byId, allIds } structure for O(1) lookups and efficient cache mutations. Hovering a post card silently prefetches its detail data. Comments are deferred and only loaded on demand. Every interactive element includes ARIA attributes and full keyboard navigation.",
    image: "/imgs/project2.png",
    images: [
      "/imgs/Project2/1.png",
      "/imgs/Project2/2.png",
      "/imgs/Project2/3.png",
      "/imgs/Project2/4.png",
      "/imgs/Project2/5.png",
    ],
    links: {
      github:
        "https://github.com/Abdelhakam11/Blog",
    },
    tags: ["Next.js", "TypeScript", "TanStack Query", "Tailwind CSS", "React"],
    category: "Frontend",
    year: "2024",
    duration: "1 month",
    client: "Personal Project",
    featured: true,
    technologies: {
      frontend: [
        "Next.js 16 (App Router)",
        "React 19",
        "TypeScript 5 — strict mode",
        "Tailwind CSS v4",
        "TanStack Query v5",
      ],
      tools: [
        "JSONPlaceholder REST API",
        "Geist Font",
        "React Query Devtools",
        "Data Normalization",
      ],
    },
    features: [
      "Post listing with live search and client-side pagination (10 per page)",
      "Post detail page with lazy-loaded comments on demand",
      "Create post with optimistic UI — appears instantly before API responds",
      "Edit post with pre-filled form and cache sync on success",
      "Delete post with optimistic removal and automatic rollback on error",
      "Hover prefetch — post data loads silently when hovering a card",
      "Searchable author dropdown with keyboard navigation and ARIA combobox",
      "Skeleton loaders for every loading state",
      "Full keyboard navigation and ARIA attributes throughout",
      "Normalized data cache with O(1) post lookups",
      "Responsive mobile-first grid layout",
      "React Query Devtools for cache inspection",
    ],
    challenges: [
      "Managing optimistic cache mutations on a normalized { byId, allIds } data structure rather than a flat array",
      "Implementing a fully accessible custom combobox (author dropdown) with keyboard navigation, ARIA roles, and search filtering",
      "Keeping the query cache consistent across create, update, and delete operations without triggering unnecessary re-fetches",
      "Suppressing browser extension interference (Grammarly) causing React hydration mismatches on the body element",
    ],
    solutions: [
      "Rewrote optimistic mutation handlers to operate directly on the raw Post[] cache, then re-normalize on the fly — avoiding stale snapshot issues",
      "Built a headless combobox component from scratch using useId, useRef, and keyboard event handlers conforming to the ARIA combobox pattern",
      "Centralized all query key definitions in a typed registry and used targeted invalidation (queryKeys.post(id)) to avoid over-fetching",
      "Added suppressHydrationWarning to the body tag in the root layout, scoping the suppression to only the element browser extensions modify",
    ],
  },
  {
    id: 3,
    title: "Minimal Music Player",
    subtitle: "Frontend Project",
    description: "A lightweight, accessible web audio player built with vanilla HTML, CSS and JavaScript featuring album art, progress bar, and basic playback controls.",
    longDescription: "This project implements a responsive, minimal music player using the HTML5 Audio API. It supports multiple tracks, dynamic cover art and metadata, clickable progress seeking, formatted current time/duration display, prev/next navigation, and graceful handling of playback errors. The UI is styled with modern CSS variables, gradients and a centered player card design.",
    image: "/imgs/project3.png",
    images: [
      "/imgs/Project3/1.png",
      "/imgs/Project3/2.png",
    ],
    links: {
    github:
      "https://github.com/Abdelhakam11/music-player",
    },
    tags: ["html", "javascript", "css"],
    features: [
      "Play / Pause, Previous, Next controls",
      "Clickable progress bar with seek support",
      "Current time and total duration display (loadedmetadata)",
      "Multiple-track playlist with dynamic cover art",
      "Accessible controls with ARIA labels and focus styles",
      "Responsive layout using CSS variables and fluid sizing"
    ],
    category: "Frontend",
    year: "2025",
    duration: "1 month",
    client: "Personal Project",
    featured: true,
    technologies: {
      frontend: [
        "HTML5 <audio>",
        "Vanilla JavaScript (Audio API)",
        "CSS3 (variables, gradients, responsive)",
        "Font Awesome for icons"
      ],
      tools: [
        "JSONPlaceholder REST API",
        "Geist Font",
        "React Query Devtools",
        "Data Normalization",
      ],
    },
    challenges: [
      "Keeping UI progress synced smoothly with audio playback across browsers",
      "Reading duration reliably before metadata is available",
      "Accurately calculating seek position from click coordinates",
      "Handling autoplay / play() promise rejection on some platforms"
    ],
    solutions: [
      "Update progress UI on the audio 'timeupdate' event and format times for display",
      "Listen for the 'loadedmetadata' event to set the track duration reliably",
      "Calculate new currentTime using click offset over the progress container width",
      "Wrap audio.play() in an async try/catch to detect and handle playback errors"
    ]
  },
  {
  id: 4,
  title: "Dark Theme Toggle",
  subtitle: "UI Theme Switcher",
  description: "A lightweight light/dark theme switcher implemented with vanilla JavaScript that swaps icons, text, navigation background, text-box background, and illustrative images.",
  longDescription: "This small project demonstrates a theme toggle component using a single THEMES configuration object. Switching the checkbox toggles data-theme on the document root, swaps the FontAwesome icon and label, updates nav and text-box background colors, and replaces three illustrative SVGs with their light or dark variants. The implementation centralizes theme values and image sources in a config and applies them via a single applyTheme function bound to the switch change event.",
  image: "/imgs/project4.png",
  images: [
    "/imgs/Project4/1.png",
    "/imgs/Project4/2.png",
    "/imgs/Project4/3.png",
    "/imgs/Project4/4.png",
    "/imgs/Project4/5.png",
    "/imgs/Project4/6.png",
  ],
  links: {
    github:
      "https://github.com/Abdelhakam11/dark-theme",
  },
  tags: ["HTML", "CSS", "JavaScript", "FontAwesome", "SVG"],
  category: "Frontend",
  year: "2026",
  duration: "Few hours",
  client: "Personal Project",
  featured: true,
  technologies: {
    frontend: ["HTML5", "CSS", "Vanilla JavaScript", "FontAwesome"],
    tools: ["SVG illustrations", "DOM API"]
  },
  features: [
    "Checkbox-driven theme toggle",
    "Swaps FontAwesome icon and descriptive label",
    "Updates navigation and text-box background colors",
    "Replaces three illustrative SVGs for each theme",
    "Centralized THEMES configuration and single applyTheme function"
  ],
  challenges: [
    "Keeping theme values centralized and easy to extend",
    "Ensuring images and UI elements update consistently on toggle",
    "Keeping the implementation minimal while readable"
  ],
  solutions: [
    "Store per-theme values (attributes, classes, colors, image paths) in a THEMES object",
    "Use a single applyTheme function that applies all UI updates",
    "Bind a single change event listener to the checkbox switcher"
  ]
},
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id);
};
