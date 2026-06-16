import type { Metadata } from "next";
import { Preahvihear } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import "../styles/globals.scss";

const preahvihear = Preahvihear({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Abdelhakam Elewa - Frontend Software Engineer",
    template: "%s | Abdelhakam Elewa",
  },
  description:
    "Frontend Software Engineer with 3+ years of experience building modern, scalable, and high-performance web applications using React.js, Next.js, TypeScript, and JavaScript.",
  keywords: [
    "frontend developer",
    "react",
    "nextjs",
    "typescript",
    "javascript",
    "web development",
    "portfolio",
    "abdelhakam elewa",
    "responsive design",
    "accessibility",
  ],
  authors: [{ name: "Abdelhakam Elewa" }],
  creator: "Abdelhakam Elewa",
  icons: {
    icon: "/imgs/Avatar.PNG",
    shortcut: "/imgs/Avatar.PNG",
    apple: "/imgs/Avatar.PNG",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent theme flash on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t)}catch(e){}`,
          }}
        />
      </head>
      <body className={preahvihear.className} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
