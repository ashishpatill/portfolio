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
    id: "research",
    period: "May 2026 to Present",
    title: "Open Source and MTech Research",
    org: "Independent / IIT Jodhpur",
    place: "Mumbai",
    summary:
      "Publishing public harness and design tooling while studying AI/ML.",
    points: [
      "Public repos: Tell Proof, harness-from-scratch, grok-kit, Nagrik Saathi.",
      "BIMLabz private studio for agent tooling and applied ML. Not public SaaS.",
    ],
  },
  {
    id: "arthasahay",
    period: "Dec 2024 to May 2026",
    title: "Tech Lead",
    org: "Arthasahay",
    place: "Mumbai",
    summary: "Technical lead for product work across this dated window.",
    points: [
      "Owned product engineering from design through implementation.",
      "Led the engineering work for the product effort in that period.",
    ],
  },
  {
    id: "ios",
    period: "2013 to 2024",
    title: "Senior iOS Engineer",
    org: "Mobile craft / consumer apps",
    place: "India",
    summary:
      "Twelve years shipping consumer apps: Swift, UIKit to SwiftUI, feature ownership, App Store delivery, reliability.",
    points: [
      "Swift, UIKit, and SwiftUI on consumer apps.",
      "Feature ownership, App Store delivery, and reliability.",
    ],
  },
];
