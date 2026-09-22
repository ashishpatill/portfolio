export const site = {
  name: "Ashish P",
  handle: "ashishpatill",
  title: "Ashish P. Senior iOS engineer",
  role: "Swift. UIKit / SwiftUI. Product ownership. IIT Jodhpur MTech AI/ML.",
  headline:
    "Senior iOS engineer. Twelve years shipping consumer apps. Still writes the code.",
  blurb:
    "Swift. UIKit / SwiftUI. Product ownership. IIT Jodhpur MTech AI/ML.",
  location: "Mumbai",
  availability: "Hireable",
  description:
    "Senior iOS engineer. Twelve years shipping consumer apps. Swift, UIKit, SwiftUI, and product ownership. IIT Jodhpur MTech AI/ML. Based in Mumbai.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  avatar: "/avatar.png",
  github: "https://github.com/ashishpatill",
  githubProfile: "https://github.com/ashishpatill",
  x: "https://x.com/inqusit",
  linkedin: "https://www.linkedin.com/in/ashishpisey",
  email: "ashish.dev.ios@gmail.com",
  resumePath: "/Ashish_Pisey_iOS_Resume.pdf",
  studio: "BIMLabz",
} as const;

export const nav = [
  { id: "about", label: "About", href: "/#about" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "work", label: "Work", href: "/#work" },
  { id: "contact", label: "Contact", href: "/#contact" },
] as const;

export type NavId = (typeof nav)[number]["id"];

export const about = {
  paragraphs: [
    "Senior iOS engineer and technical lead. Built and shipped consumer products end to end, including architecture, App Store delivery, and reliability.",
    "Studying AI/ML at IIT Jodhpur and publishing open-source harness and tooling. Building privately at BIMLabz. The public case studies below are the repos you can clone and run.",
  ],
  studio:
    "Building at BIMLabz, private studio for agent tooling and applied ML. Public case studies are the GitHub repos below.",
};

export const contact = {
  heading: "Say hello",
  body: "Email me, write on LinkedIn, open GitHub, or download the resume PDF. Those four are the ways in.",
  cta: "Email. LinkedIn. GitHub. Resume PDF.",
};
