export const site = {
  name: "Ashish P",
  handle: "ashishpatill",
  title: "Ashish P. iOS, agent harnesses, design tooling",
  role: "iOS engineer turning toward agent harnesses and independent design tooling",
  headline:
    "Building the runtime around coding agents, and the design proof layer they skip.",
  blurb:
    "Twelve years as an iOS engineer in Mumbai. These days I build small, honest harnesses around coding agents, and the independent design layer they skip. Open to work.",
  location: "Mumbai, India",
  availability: "Hireable",
  description:
    "Personal portfolio of Ashish P. iOS craft, coding-agent harnesses, and independent design tooling. Based in Mumbai. Open to work.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  avatar: "/avatar.png",
  github: "https://github.com/ashishpatill",
  githubProfile: "https://github.com/ashishpatill",
  x: "https://x.com/inqusit",
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
    "I spent about twelve years in iOS. Shipping production apps, sweating animation, and caring about how a control feels in the hand. That craft did not go away. It moved.",
    "Coding agents are extraordinary at writing code that compiles. They are weaker at the parts I now care about: the runtime that allows, writes, and proves, and the visual authorship that keeps a product from looking like every other generated landing page.",
    "So I build those layers in public. Tell Proof is the design critic beside Cursor. harness-from-scratch is a teaching loop you can hold in your head. grok-kit is the personal kit I actually run. Nagrik Saathi is a civic copilot that explains a notice and then stops, because some products should refuse more than they automate.",
  ],
  studio:
    "At BIMLabz, my personal studio, I also work on private learning products and coding-agent harnesses. Those stay private. This site is the public record.",
};

export const contact = {
  heading: "Say hello",
  body: "If you want to talk harnesses, iOS craft, or a role where taste and systems both matter, find me on GitHub or X. I read both.",
  cta: "Open to conversations, contracts, and staff-plus product engineering.",
};
