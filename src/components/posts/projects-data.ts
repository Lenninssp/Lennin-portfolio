import { Project } from "@/types/project";


export const projectsData: ReadonlyArray<Project> = [
  // --- New projects from your GitHub ---
  {
  slug: "skillswap-frontend",
  title: "SkillSwap",
  subtitle: "Skill exchange platform frontend",
  date: "2026-03-04",
  description:
    "Frontend for a platform where users can exchange skills and collaborate. Built with TypeScript and modern frontend tooling.",
  imageUrl: "/images/killswap.jpeg",
  tags: ["typescript", "frontend"],
  repoUrl: "https://github.com/Lenninssp/SkillSwap-frontend",
},
{
  slug: "tipical",
  title: "TIPICAL",
  subtitle: "TypeScript project exploring structured architecture",
  date: "2026-03-03",
  description:
    "TypeScript-based application experimenting with scalable project structure and reusable modules.",
  imageUrl: "/images/tipical.png",
  tags: ["typescript"],
  repoUrl: "https://github.com/Lenninssp/TIPICAL",
},
{
  slug: "codenames",
  title: "Codenames",
  subtitle: "Web implementation of the classic word game",
  date: "2026-02-12",
  description:
    "Digital version of the Codenames board game with a focus on simple gameplay and clean UI.",
  imageUrl: "/images/codenames.png",
  tags: ["typescript"],
  repoUrl: "https://github.com/Lenninssp/Codenames",
},
{
  slug: "library-system-ios",
  title: "Library System iOS",
  subtitle: "Mobile library management app",
  date: "2026-02-10",
  description:
    "Swift iOS application designed to manage books, borrowing, and catalog browsing.",
  imageUrl: "/images/library.png",
  tags: ["swift", "ios", "mobile"],
  repoUrl: "https://github.com/Lenninssp/library-system-ios",
},
{
  slug: "animal-care",
  title: "Animal Care",
  subtitle: "Informational website project",
  date: "2025-12-03",
  description:
    "Static website focused on animal care information with simple HTML/CSS layout.",
  imageUrl: "/images/animal.png",
  tags: [ "frontend"],
  repoUrl: "https://github.com/Lenninssp/Animal-Care",
},
{
  slug: "cannin-tickets",
  title: "Cannin Tickets",
  subtitle: "Ticket tracking system",
  date: "2025-11-24",
  description:
    "Java-based ticket management system for tracking issues and workflow progress.",
  imageUrl: "/images/tickets.png",
  tags: ["java", "backend"],
  repoUrl: "https://github.com/Lenninssp/Cannin-Tickets",
},
{
    slug: "portfolio-lennin",
    title: "My Portfolio",
    subtitle: "Personal site showcasing my work",
    date: "2025-09-08",
    description:
      "Portfolio that shows my most relevant projects with a clean design and fast navigation.",
    imageUrl: "/images/portfolio-lennin.png",
    tags: ["react", "frontend", "personal"],
    repoUrl: "https://github.com/Lenninssp/Lennin-portfolio",
    demoUrl: "https://lenninssp.github.io/Lennin-portfolio/",
  },
  {
    slug: "text-edit-vps",
    title: "Text Edit App",
    subtitle: "Lightweight editor running on my VPS",
    date: "2025-07-10",
    imageUrl: "/images/text-edit.png",
    description:
      "A simple collaborative text editor deployed on my VPS with Docker, Next.js frontend, Django backend, and PostgreSQL.",
    tags: ["fullstack", "nextjs", "django", "postgresql", "docker"],
    repoUrl: "https://github.com/Lenninssp/crocro-noteapp",
  },
  {
    slug: "git-progress-sprites",
    title: "Git Progress Sprite Maker",
    subtitle: "Commit daily, unlock a sprite",
    date: "2025-07-28",
    imageUrl: "/images/git-sprite.png",
    description:
      "Web app that rewards daily git commits with progress on ASCII art Pokémon sprites. Uses Prisma and Next.js.",
    tags: ["nextjs", "deno", "docker", "postgresql"],
    repoUrl: "https://github.com/Lenninssp/MagnusGit",
  },
  {
    slug: "album-ranker",
    imageUrl: "/images/album-ranker.jpg",
    title: "Album Ranker",
    subtitle: "Rate and rank music albums",
    date: "2025-06-15",
    description:
      "Personal tool to rank, compare, and visualize favorite albums using tier-lists and charts.",
    tags: ["react", "personal"],
    repoUrl: "https://github.com/Lenninssp/Album-Ranker",
  },
  {
    slug: "nidnib-notebook",
    title: "Nidnib Modular Notebook",
    subtitle: "Eco-friendly customizable paper system",
    date: "2025-03-18",
    description:
      "A modular notebook system with custom pages and slots. Includes crowdfunding prep and branding design.",
    tags: ["design"],
  },
  {
    slug: "tasky-manager",
    title: "Tasky",
    subtitle: "Simple task manager",
    date: "2025-04-07",
    description:
      "A minimalistic to-do manager with Java backend and PostgreSQL, designed for personal productivity.",
    tags: ["postgresql", "fullstack"],
    imageUrl: "/images/tasky.png",
    repoUrl: "https://github.com/Lenninssp/crocro-noteapp",
  },
] as const;