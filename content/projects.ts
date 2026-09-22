export type ProjectArtKind = "harness" | "kit" | "civic";

export type CaseSection = {
  heading: string;
  body: string[];
};

export type FeaturedProject = {
  slug: string;
  index: string;
  year: string;
  title: string;
  kicker: string;
  summary: string;
  problem: string;
  approach: string;
  shipped: string;
  stack: string[];
  repo: string;
  repoLabel: string;
  status: string;
  image?: {
    src: string;
    alt: string;
  };
  gallery?: {
    src: string;
    alt: string;
  }[];
  art?: ProjectArtKind;
  caseStudy: {
    lede: string;
    sections: CaseSection[];
    closing: string;
  };
};

export type ArchiveItem = {
  title: string;
  description: string;
  href?: string;
  year: string;
  stack: string;
};

export const featuredIntro =
  "Featured work is limited to public repos with runnable demos. Private studio work stays unnamed as products until it ships.";

export const studioArchive: ArchiveItem[] = [
  {
    title: "BIMLabz studio (private)",
    description:
      "Agent harnesses, RAG experiments, macOS tools. Not public SaaS.",
    year: "studio",
    stack: "private",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "tell-proof",
    index: "01",
    year: "2026",
    title: "Tell Proof",
    kicker: "Design layer for agent harnesses",
    summary:
      "Agents write code. Tell proves the UI, then helps you ship design that looks intentional, not AI-default.",
    problem:
      "Coding agents compile. They still ship the same generated look: system fonts, violet accents, shadow on every card. The harness grades its own homework.",
    approach:
      "An independent critic beside Cursor. Playwright captures the rendered page. Fourteen detectors name genericness and drift. Direction becomes a reviewable patch. Proof runs in a disposable checkout.",
    shipped:
      "Next.js monorepo, MCP tools, Studio skill graph, and a captioned product demo. Open source. Local dogfood. No public production host claimed here.",
    stack: ["Next.js", "TypeScript", "MCP", "Playwright", "pnpm"],
    repo: "https://github.com/ashishpatill/tell-proof",
    repoLabel: "ashishpatill/tell-proof",
    status: "Open source · local dogfood",
    image: {
      src: "/projects/tell-proof-poster.webp",
      alt: "Tell Proof product still: capture, named tells, and a before/after seam",
    },
    gallery: [
      {
        src: "/projects/tell-proof-detect.webp",
        alt: "Tell Report naming fourteen detector findings on a captured page",
      },
      {
        src: "/projects/tell-proof-prove.webp",
        alt: "Before and after seam comparing a generic capture to a reconciled editorial pass",
      },
    ],
    caseStudy: {
      lede:
        "Tell sits beside Cursor as an independent design runtime. The authoring agent proposes. Tell measures, critiques, redesigns, and verifies. Humans stay in control.",
      sections: [
        {
          heading: "The gap",
          body: [
            "Ask an agent to make a page prettier and you usually get the same defaults again. That is not a failure of effort. The harness is optimized for compiling code and local file edits. Production UI needs composition, contrast, token rhythm, and an independent proof loop.",
            "Tell is the missing design layer for agent-built software. It is not a replacement for a11y, security, or functional tests. It is the visual evidence most harnesses still skip.",
          ],
        },
        {
          heading: "The loop",
          body: [
            "Observe: Playwright captures the page users actually see, plus computed styles, tokens, and state probes.",
            "Name: fourteen deterministic detectors call out system fonts, radius monotony, shadow overuse, gray mush, token bypasses, and more.",
            "Direct: voice or text art-direction becomes a preset and concrete action items. Repair: source-ranked diffs, never silent auto-apply. Prove: a disposable checkout recaptures before and after so the harness can trust the fix.",
          ],
        },
        {
          heading: "What is on disk",
          body: [
            "A pnpm monorepo: Next.js report and Studio UI, a shared engine, and an MCP server with eleven tell_* tools. Deterministic capture and detectors run without a model. Models only help where language helps.",
            "The in-repo demo video walks capture, named tells, the seam, voice direction, a draft Cursor patch, then Studio specimens. I dogfood Tell on itself. There is no public live product URL on this site because the honest home is the repository.",
          ],
        },
      ],
      closing:
        "Clone it, run it locally, point it at a bland fixture. The point is a receipt, not a vibe.",
    },
  },
  {
    slug: "harness-from-scratch",
    index: "02",
    year: "2026",
    title: "Harness from scratch",
    kicker: "Teaching harness",
    summary:
      "A tiny Node 22 coding-agent harness: Allow, write, exact-byte proof. Zero third-party packages. A loop you can hold in your head.",
    problem:
      "Most writing about agents starts at the product surface. The actual job is smaller. The model proposes. The harness allows, writes, and proves. People skip that boundary.",
    approach:
      "One task people can hold: create hello.txt containing exactly ok. FakeModel first, no API key. Optional live guest on the same Allow, write, and byte-check path. The model never writes the disk and never decides that the run succeeded.",
    shipped:
      "Runnable proof script, tests for success and failure, JSONL transcripts, interactive Allow, argv-only run_command, teaching memory, and a journal TUI. A tutorial, not a product.",
    stack: ["Node 22", "TypeScript", "zero deps"],
    repo: "https://github.com/ashishpatill/harness-from-scratch",
    repoLabel: "ashishpatill/harness-from-scratch",
    status: "Teaching repo · not a product",
    art: "harness",
    caseStudy: {
      lede:
        "A coding agent is two pieces glued together. The model proposes the next step. The harness is the small runtime around it: it asks Allow before any write, runs only what was allowed, and proves done by reading the disk itself.",
      sections: [
        {
          heading: "What Part 1 proves",
          body: [
            "This repo is that loop in Node 22 with zero third-party packages. FakeModel needs no network. An optional OpenAI-compatible guest shares the same Model.decide boundary. Deny and timeout never reach the write. Model prose never counts as done.",
            "Success is boring on purpose. Tests pass. workspace/hello.txt is exactly the two bytes ok. The transcript ends on stop with proof.exactBytes true.",
          ],
        },
        {
          heading: "The boundary that matters",
          body: [
            "Allow is a gate, not a vibe. FixedGate keeps CI deterministic. InteractiveGate is the human y/N path. Tools are confined: write_file inside the workspace, run_command as an argv array with shell false.",
            "Later slices stay honest: JSONL resume after an observation, working / episode / durable memory without pretending to be RAG, and a TUI that is a journal projection, not product chrome.",
          ],
        },
        {
          heading: "What this is not",
          body: [
            "This is a teaching harness. It is not DeepHarness, not a SaaS, and not a claim that you should replace Cursor or Claude Code. A companion article stays unpublished until I cut it. The tree is the runnable tutorial.",
          ],
        },
      ],
      closing:
        "If you want the loop without the folklore, clone it and run ./run-proof.sh.",
    },
  },
  {
    slug: "grok-kit",
    index: "03",
    year: "2026",
    title: "grok-kit",
    kicker: "Personal Cursor + Grok Build kit",
    summary:
      "Slash skills, cost routing, verify loops, and thin always-on rules. One clone for Cursor and Grok Build. Consent-gated install. MIT.",
    problem:
      "Agent chats go sideways when every session is a new personality, the expensive model does the busywork, MCP schemas eat the window, and green means a screenshot.",
    approach:
      "A harness, not a second IDE. Playbooks compile into commands you can rerun. Always-on rules stay a few short files. Skills load when you type them. Install refuses to rewrite your home folder without --i-consent.",
    shipped:
      "Skills, three specialist agents, apply/verify/hygiene CLIs, and the same kit in the editor and the terminal. Marketplace listing is a manual next step. A clone works today.",
    stack: ["Cursor", "Grok Build", "skills", "CLI"],
    repo: "https://github.com/ashishpatill/grok-kit",
    repoLabel: "ashishpatill/grok-kit",
    status: "Personal kit · MIT",
    art: "kit",
    caseStudy: {
      lede:
        "Cursor is where I write code. Grok Build is the terminal agent. grok-kit is the layer that makes their built-in skills, rules, MCP, hooks, and plugins actually get used, instead of every chat starting from scratch with a fat prompt.",
      sections: [
        {
          heading: "Cheap, stable, honest",
          body: [
            "Day-to-day implement uses a balanced model. Questions and nits use a cheap one. Verifier and researcher agents pin a small model. They never inherit the expensive default. Product MCP stays in the project that needs it, so schemas do not sit in every chat.",
            "The host can reuse the start of the prompt only if those bytes did not change. grok-kit never puts dates, session dumps, or learned workflows into that prefix.",
          ],
        },
        {
          heading: "Consent is the product",
          body: [
            "Turning the plugin on does not rewrite your home folder. User-layer install needs --i-consent. Memory and harness tweaks are proposals. /code-hygiene ranks drift. You choose scrap, keep, or fix. /rsi reviews before ship and does not merge.",
            "That is the same ethic as the teaching harness. The kit asks. It does not silently become your persona.",
          ],
        },
        {
          heading: "Prove the change, then stop",
          body: [
            "One golden path for the claim, not ten parallel demos. Replace drive() in the project verify script with the command that proves this repo. A missing drive that still exits 0 is a lie. Children of orchestration return summaries only.",
            "This is a personal harness published for reuse. It is not a design-workflow kit, not an unsupervised agent framework, and not a marketplace trophy until I submit it.",
          ],
        },
      ],
      closing:
        "Clone it, pass --i-consent if you mean it, then type /cost-check.",
    },
  },
  {
    slug: "nagrik-saathi",
    index: "04",
    year: "2026",
    title: "Nagrik Saathi",
    kicker: "Safe public-document copilot",
    summary:
      "Explain a government notice, extract dates and amounts, build a checklist, and point to official channels. Never automate a portal. Never collect credentials.",
    problem:
      "Notices are dense. People get lost, then hand a chatbot a password. A civic copilot that files, pays, or scrapes a portal is a hazard, not a feature.",
    approach:
      "Help a person understand a document. Extract what matters. Build a checklist. Look up a reviewed official channel. Stop. No Aadhaar, PAN, OTP, or banking details. No model-supplied URLs.",
    shipped:
      "Local Next.js app, eight WebMCP tools, on-device OCR, EN/HI/MR and more explain languages, and a reviewed portal directory. Intentionally no GitHub Actions CI. No public host claimed here.",
    stack: ["Next.js", "WebMCP", "OCR", "safety"],
    repo: "https://github.com/ashishpatill/nagrik-saathi",
    repoLabel: "ashishpatill/nagrik-saathi",
    status: "Local verify · safety-first",
    art: "civic",
    caseStudy: {
      lede:
        "Nagrik Saathi is a Safe Public-Document Copilot. It explains notices, extracts dates and amounts, builds a checklist, and points people to reviewed official channels without acting on government portals.",
      sections: [
        {
          heading: "The refusal is the product",
          body: [
            "This app does not collect credentials, OTPs, Aadhaar, PAN, or banking details. It does not make payments, file grievances, submit forms, send letters, or automate official sites. Generated guidance is not an official decision.",
            "find_official_portal accepts a department, service, and state. It does not accept a URL. It searches a reviewed registry, checks HTTPS, and otherwise tells you to use the printed helpline or office.",
          ],
        },
        {
          heading: "What shipped locally",
          body: [
            "Paste or upload a real notice. Nothing is preloaded. Analyze runs on the document you brought. Site language and explain language are separate, covering English, Hindi, Marathi, and a wider Indian language set.",
            "Eight top-level tools register through document.modelContext. State-changing downloads and reminders need visible approval. Family briefs redact common identity patterns before export. Redaction is a safety aid, not a guarantee.",
          ],
        },
        {
          heading: "Honest status",
          body: [
            "The public repo is the product surface. Deploy is optional and not claimed as live. Portal coverage starts from Maharashtra and national seeds. Expanding that registry is the remaining work, and it should stay human-reviewed.",
          ],
        },
      ],
      closing:
        "If a civic tool cannot refuse, it should not ship. This one refuses on purpose.",
    },
  },
];

export const iosArchive: ArchiveItem[] = [
  {
    title: "LoaderToSwitchAnimation",
    description: "Custom control: load, then animate into a switch.",
    href: "https://github.com/ashishpatill/LoaderToSwitchAnimation",
    year: "2024",
    stack: "Swift",
  },
  {
    title: "VerticalScrollEffect",
    description: "Scroll physics and motion in SwiftUI.",
    href: "https://github.com/ashishpatill/VerticalScrollEffect",
    year: "2023",
    stack: "SwiftUI",
  },
  {
    title: "WeSplit",
    description: "SwiftUI practice: forms, state, tip calculator.",
    href: "https://github.com/ashishpatill/WeSplit",
    year: "2022",
    stack: "SwiftUI",
  },
  {
    title: "SwiftUI-Basics",
    description: "Stacks, navigation, modifiers, custom containers.",
    href: "https://github.com/ashishpatill/SwiftUI-Basics",
    year: "2022",
    stack: "SwiftUI",
  },
  {
    title: "Data_Structures_Swift",
    description: "Interview structures and algorithms in Swift.",
    href: "https://github.com/ashishpatill/Data_Structures_Swift",
    year: "2022",
    stack: "Swift",
  },
];

export const notesArchive: ArchiveItem[] = [
  {
    title: "LearningML",
    description: "Starting ML from scratch. Study notes, not a product.",
    href: "https://github.com/ashishpatill/LearningML",
    year: "notes",
    stack: "Python",
  },
  {
    title: "GPU-programming",
    description: "CUDA and GPU basics. Learning archive.",
    href: "https://github.com/ashishpatill/GPU-programming",
    year: "notes",
    stack: "CUDA",
  },
  {
    title: "FoundationalModels",
    description: "Notes on foundational models.",
    href: "https://github.com/ashishpatill/FoundationalModels",
    year: "notes",
    stack: "notes",
  },
];

export function getFeaturedBySlug(slug: string): FeaturedProject | undefined {
  return featuredProjects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev?: FeaturedProject;
  next?: FeaturedProject;
} {
  const index = featuredProjects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return {};
  }

  return {
    prev: index > 0 ? featuredProjects[index - 1] : undefined,
    next:
      index < featuredProjects.length - 1
        ? featuredProjects[index + 1]
        : undefined,
  };
}
