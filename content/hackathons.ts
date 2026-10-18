export type HackathonEntry = {
  title: string;
  event: string;
  detail: string;
  year: string;
  summary: string;
  stack: string;
  image: {
    src: string;
    alt: string;
  };
  links: {
    label: string;
    href: string;
  }[];
};

export const hackathonsIntro =
  "Hackathon submissions, newest first. Every entry links to the official submission, the live build, and the code. New submissions land here as they ship.";

// Add new submissions at the top of this list. That is the only step.
export const hackathonEntries: HackathonEntry[] = [
  {
    title: "CrewBrain",
    event: "Graph Hacks · FalkorDB",
    detail: "Agent Memory and Coordination · Company Brain",
    year: "Oct 2026",
    summary:
      "A shared memory graph for teams of AI agents. Every decision is stored in FalkorDB with its reasons and sources. Answers trace the graph and cite the path behind them. A question with no recorded decision gets an honest refusal, and new memory enters only when a person approves it.",
    stack: "TypeScript · FalkorDB",
    image: {
      src: "/projects/crewbrain-poster.webp",
      alt: "CrewBrain poster: a traced answer beside its graph path list",
    },
    links: [
      {
        label: "Submission",
        href: "https://github.com/ashishpatill/crewbrain",
      },
      {
        label: "Live demo",
        href: "https://crewbrain-lilac.vercel.app",
      },
      {
        label: "Video",
        href: "https://youtu.be/YxIn3CyGBTc",
      },
    ],
  },
  {
    title: "ProofDesk",
    event: "AMD Developer Hackathon Act III · lablab.ai",
    detail: "Evolus Business Agents on AMD · Security",
    year: "Oct 2026",
    summary:
      "Vendor security questionnaires answered from a company document set, with every claim checked against the documents before it can ship. A claim the documents do not support is blocked or handed to a person. Submitted and accepted for judging.",
    stack: "Python · Vercel · AMD Token Factory · Jev",
    image: {
      src: "/projects/proofdesk-cover.webp",
      alt: "ProofDesk cover: questionnaire claims checked against company documents",
    },
    links: [
      {
        label: "Submission",
        href: "https://lablab.ai/ai-hackathons/amd-developer-hackathon-act-iii/bimlabz/proofdesk",
      },
      {
        label: "Live app",
        href: "https://proofdesk-nine.vercel.app",
      },
      {
        label: "Code",
        href: "https://github.com/ashishpatill/proofdesk",
      },
    ],
  },
];
