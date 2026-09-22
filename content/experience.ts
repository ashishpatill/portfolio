export type ExperienceItem = {
  id: string;
  period: string;
  title: string;
  org: string;
  place: string;
  summary: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "bimlabz",
    period: "2025 to Present",
    title: "Agent harnesses and design tooling",
    org: "Independent / BIMLabz",
    place: "Mumbai",
    summary:
      "A personal studio for the runtime around coding agents, and the design proof layer they skip.",
    points: [
      "Tell Proof: independent capture, detectors, art-direction, and disposable visual proof beside Cursor.",
      "Teaching and personal harnesses: harness-from-scratch and grok-kit, published as MIT source, not as SaaS.",
      "Nagrik Saathi: a safe public-document copilot that explains notices and refuses to act on government portals.",
      "Private studio work on learning products stays off this site. No fake demos, no invented live URLs.",
    ],
  },
  {
    id: "ios",
    period: "2013 to 2024",
    title: "Senior iOS Engineer",
    org: "Mobile craft",
    place: "India",
    summary:
      "About twelve years of production iOS. The work was shipping software people hold, not a slide about AI.",
    points: [
      "Swift, SwiftUI, and UIKit across the long arc from early Auto Layout to modern SwiftUI.",
      "Interaction and animation: custom controls, scroll physics, and the last 10% that makes a view feel finished.",
      "That craft is the reason I now care about visual proof for agent-built software. Agents write. Someone still has to mean it.",
    ],
  },
];
