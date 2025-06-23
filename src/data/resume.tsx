import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rohan Shikhare",
  initials: "DV",
  url: "https://res.cloudinary.com/dhaqlhoe7/image/upload/v1750160555/WhatsApp_Image_2025-06-17_at_17.09.35_880cc39e_kaoy4b.jpg",
  location: "India, Mumbai",
  locationLink: "",
  description:
    "Building clean, scalable web apps using JavaScript, React, and Next — focused on real-world problem solving.",
  summary:
    "I'm passionate about web development and love building interactive, scalable applications using React and Node.js. I'm also exploring Web3 technologies like Solana. Driven by curiosity and a hands-on mindset, I enjoy turning ideas into real, functional digital experiences.",
  avatarUrl: "/profile.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "MongoDB",
    "Websockets",
    "Express",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rohanshikhare410@example.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Rohan11203",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohan-shikhare-23195225a/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/RoHanShikh43138",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@ronyEdits110",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Toronto, ON",
      title: "Freelance Developer",
      logoUrl: "/freelance.jpg",
      start: "Dec 2024",
      end: "April 2025",
      description:
        "I’ve independently developed custom web projects for various college students—bringing their ideas to life with React, Node.js, and MongoDB—and successfully sold these solutions at competitive rates.",
    },
  ],
  education: [
    {
      school: "University of Mumbai",
      href: "https://mu.ac.in/",
      degree:
        "Bachelor's Degree of Computer Science in Information Technology (BCS.IT)",
      logoUrl: "/uniMumbai.png",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Smart Clip",
      href: "https://smartclip-ai1.onrender.com/",
      dates: "April 2025 - May 2025",
      active: true,
      description:
        "A web application that lets users paste a YouTube link, select a start/end time, and either download the clipped segment or get an [AI-generated explanation]() of its content.",
      technologies: [
        "React",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Assembly ai",
        "Google gen ai",
        "Yt-Dlp",
        "ffmpeg",
        "Framer Motion",
        "GSAP"
      ],
      links: [
        {
          type: "Website",
          href: "https://smartclip-ai1.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rohan11203/SmartClip.ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/smartClip.mp4",
    },
    {
      title: "CodeArena",
      href: "https://codearena-frontend.onrender.com/",
      dates: "Aug 2024 - Mar 2025",
      active: true,
      description:
        "A full-stack competitive coding platform with solo quizzes, logic grid games, and real-time multiplayer coding battles. [Multiplayer mode features LeetCode-style problems where players write code, run test cases](), and submit only after passing. Supports multiple languages like JavaScript, TypeScript, Python, and Java.",
      technologies: [
        "React",
        "Javascript",
        "MongoDB",
        "TailwindCSS",
        "Monaco-editor react",
        "Judge0 API",
        "Shadcn UI",
        "MUI",
        "Framer Motion"
      ],
      links: [
        {
          type: "Website",
          href: "https://codearena-frontend.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rohan11203/codeArena-Frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/codeArena.mp4",
    },
    {
      title: "SamyCraft",
      href: "https://samycraft.onrender.com/",
      dates: "May 2025 ",
      active: true,
      description:
        "A minimalist and nostalgic platform crafted exclusively for a friend to showcase her creative work and projects.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "GSAP",
        "Framer Motion"
      ],
      links: [
        {
          type: "Website",
          href: "https://samycraft.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rohan11203/SamyCraft",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/samycraft.mp4",
    },
    {
      title: "Tower Of SoL",
      href: "https://tower-of-sol.vercel.app/",
      dates: "Aug 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "React",
        "Solana",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://tower-of-sol.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rohan11203/TowerOfSol",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video:
        "/towerOfsol.mp4",
    },
    {
      title: "QurRux",
      href: "https://qurrux.onrender.com/",
      dates: "Feb 2025 ",
      active: true,
      description:
        "qurRux – A clean, modern dermatologist website mockup showcasing patient care, service offerings, and seamless navigation.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "GSAP",
        "Framer Motion"
      ],
      links: [
        {
          type: "Website",
          href: "https://qurrux.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rohan11203/Qurux",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/qurRux.mp4",
    },
  ],
  hackathons: [
    
    {
      title: "Hydration in Next.js",
      dates: "June 12th , 2025",
      location: "",
      description:
        "Hydration is the process where the client-side JavaScript takes over the static HTML generated by the server (or built at build time) and makes it interactive. In simpler terms...",
      image:
        "/hydration.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Read",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/@rohanshikhare410/hydration-in-next-js-0ea4a05036d8",
        },
        
      ],
    },
   
    {
      title: "MonoRepos and TurboRepo",
      dates: "June 16th, 2025",
      location: "",
      description:
        "A monorepo (short for “mono repository”) flips that model on its head by keeping all of this code in a single repository. In this post, we’ll cover:...",
      image:
        "turborepo.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Read",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/@rohanshikhare410/monorepos-t-3ff6f70f4bba",
        },
       
      ],
    },
   
  ],
} as const;
