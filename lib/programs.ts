export type ProgramSlug =
  | "workshops"
  | "artist-development"
  | "creative-sessions"
  | "youth-programs"
  | "networking-events"
  | "media-content";

export type ProgramIcon =
  | "GraduationCap"
  | "Sparkles"
  | "Mic2"
  | "Users"
  | "Network"
  | "Clapperboard";

export type Program = {
  slug: ProgramSlug;
  name: string;
  number: string; // 01..06
  icon: ProgramIcon;
  accent: string; // tailwind gradient classes (used on the home card)
  blurb: string; // short, shown on card
  tagline: string; // longer one-liner on detail page
  intro: string; // detail page opening paragraph
  pillars: { title: string; body: string }[];
  format: string[]; // bulleted format / what to expect
  whoItsFor: string; // who it's for
  cta: { label: string; href: string };
};

export const programs: Program[] = [
  {
    slug: "workshops",
    name: "Workshops",
    number: "01",
    icon: "GraduationCap",
    accent: "from-ember-500/30 to-ember-500/0",
    blurb:
      "Hands-on sessions led by working creatives — from beat-making to brand-building.",
    tagline:
      "Practical, hands-on sessions led by people who actually do the work.",
    intro:
      "Our Workshops put working creatives in the room with the next wave. No theory-only lectures — every session ends with something made, recorded, designed, or shipped. Whether it's beat-making, brand identity, video editing, photography, or business fundamentals for artists, the goal is the same: leave with a new skill in your hands.",
    pillars: [
      {
        title: "Taught by practitioners",
        body: "Every workshop is led by a working creative — producers, designers, photographers, founders — not lecturers."
      },
      {
        title: "Make something every time",
        body: "Sessions are structured around output. You walk away with a beat, a logo, a portfolio piece, or a plan."
      },
      {
        title: "Small rooms, real attention",
        body: "Capacity is capped so instructors can actually look at your work and give feedback that matters."
      }
    ],
    format: [
      "2–4 hour sessions, evenings and weekends",
      "Free or low-cost for community members",
      "Tools and gear provided where possible",
      "Held at rotating spaces across the 574"
    ],
    whoItsFor:
      "Creatives at any level who want to level up a specific skill — first-timers welcome, working pros welcome.",
    cta: { label: "See upcoming workshops", href: "/events" }
  },
  {
    slug: "artist-development",
    name: "Artist Development",
    number: "02",
    icon: "Sparkles",
    accent: "from-amber-400/25 to-amber-400/0",
    blurb:
      "One-on-one mentorship, portfolio reviews, and roadmaps for the next chapter.",
    tagline:
      "Mentorship and roadmaps for artists ready to move to the next chapter.",
    intro:
      "Artist Development is the long game. We pair artists with mentors who've already done the thing — whether that's releasing music, building a design practice, breaking into film, or growing a creative business. It's not a class. It's a relationship built around your specific work, your specific goals, and the specific next step.",
    pillars: [
      {
        title: "Matched mentorship",
        body: "We hand-match artists with mentors based on craft, stage, and goals — not a random pool."
      },
      {
        title: "Portfolio + body of work reviews",
        body: "Honest, structured feedback on what you've made and what to make next."
      },
      {
        title: "A real roadmap",
        body: "You leave with a written plan: skills to build, work to ship, people to meet, doors to knock on."
      }
    ],
    format: [
      "3–6 month cohorts, applications open seasonally",
      "Monthly 1:1 mentor sessions",
      "Quarterly group critiques and check-ins",
      "Access to the full 574 Creatives network"
    ],
    whoItsFor:
      "Artists with a body of work who are ready to take the next step — not beginners, but not finished either.",
    cta: { label: "Apply or get on the list", href: "/support" }
  },
  {
    slug: "creative-sessions",
    name: "Creative Sessions",
    number: "03",
    icon: "Mic2",
    accent: "from-rose-400/20 to-rose-400/0",
    blurb:
      "Open studio collisions where artists, founders, and producers build in the same room.",
    tagline:
      "Open-studio collisions where artists, founders, and producers build in the same room.",
    intro:
      "Creative Sessions are the heartbeat of 574 Creatives. We put a room together — musicians, designers, photographers, founders, writers, producers — and we let collaboration happen on purpose. Songs get started. Brands get sketched. Partnerships get sparked. It's the kind of room you can't manufacture — except we do, on a schedule.",
    pillars: [
      {
        title: "Cross-discipline by design",
        body: "Every session mixes creators across mediums so the collisions are real, not echo-chamber."
      },
      {
        title: "Build, don't just network",
        body: "These aren't mixers. People bring works in progress, instruments, laptops, cameras — and leave with something started."
      },
      {
        title: "Document the moment",
        body: "Our media team captures the work as it happens so the room's energy lives beyond the night."
      }
    ],
    format: [
      "Recurring monthly sessions",
      "Hosted at studios, lofts, and creative spaces across the 574",
      "Free to attend for invited and applied creatives",
      "Showcases and releases pulled from session output"
    ],
    whoItsFor:
      "Working and emerging creatives who want to build with other creatives — not just meet them.",
    cta: { label: "See upcoming sessions", href: "/events" }
  },
  {
    slug: "youth-programs",
    name: "Youth Programs",
    number: "04",
    icon: "Users",
    accent: "from-orange-400/25 to-orange-400/0",
    blurb:
      "Free programming that puts the tools, mentors, and stages in young creatives' hands.",
    tagline:
      "Free programming that puts the tools, mentors, and stages in young creatives' hands.",
    intro:
      "We believe the next generation of 574 creatives shouldn't have to wait — or pay — to start. Our Youth Programs put real tools, real mentors, and real stages in front of young people from across the region. We meet them where they are: in schools, in community centers, online, and at our own youth-only sessions.",
    pillars: [
      {
        title: "Always free",
        body: "Cost is never a barrier to entry. Tools, materials, and access are provided."
      },
      {
        title: "Real mentors, not babysitters",
        body: "Working creatives show up, teach, listen, and stay in touch."
      },
      {
        title: "Stages, not just classrooms",
        body: "Every track ends with a showcase, release, screening, or exhibition — public work, not just practice."
      }
    ],
    format: [
      "After-school and weekend tracks",
      "School and community center partnerships",
      "Ages 12–18, with separate tracks by age",
      "Open enrollment and referral-based cohorts"
    ],
    whoItsFor:
      "Young creatives ages 12–18 across the 574 — and the schools, families, and programs that support them.",
    cta: { label: "Partner or refer a youth", href: "/support" }
  },
  {
    slug: "networking-events",
    name: "Networking Events",
    number: "05",
    icon: "Network",
    accent: "from-yellow-400/20 to-yellow-400/0",
    blurb:
      "Curated mixers connecting the people the 574 needs to know — and needs to fund.",
    tagline:
      "Curated rooms connecting the people the 574 needs to know — and needs to fund.",
    intro:
      "Networking Events at 574 Creatives are intentionally curated — not open-bar chaos. We bring together creatives, founders, funders, civic leaders, and culture-makers in rooms designed for actual conversation. The goal: real connections that turn into commissions, collaborations, hires, investments, and partnerships.",
    pillars: [
      {
        title: "Curated, not crowded",
        body: "Guest lists are built around purpose — who needs to meet whom, and why."
      },
      {
        title: "Built around themes",
        body: "Each mixer has a focus: film, music, design, civic, youth, funding — so conversations land somewhere."
      },
      {
        title: "Follow-through built in",
        body: "We track introductions and follow up so the connections don't die at the door."
      }
    ],
    format: [
      "Quarterly flagship mixers",
      "Smaller themed dinners and salons in between",
      "Mixed industries by design",
      "Press, partners, and funders consistently in the room"
    ],
    whoItsFor:
      "Creatives, founders, funders, and culture-makers who are building things in or for the 574.",
    cta: { label: "Request an invite", href: "/support" }
  },
  {
    slug: "media-content",
    name: "Media & Content",
    number: "06",
    icon: "Clapperboard",
    accent: "from-ember-300/25 to-ember-300/0",
    blurb:
      "Films, photo essays, and editorial that document the movement in real time.",
    tagline:
      "Films, photo essays, and editorial that document the movement in real time.",
    intro:
      "Culture doesn't exist if no one sees it. Our Media & Content arm exists to document the 574 creative movement as it happens — and to make sure the work, the people, and the moments don't get lost. We produce short films, photo essays, editorial features, and digital series that put 574 creatives on the record.",
    pillars: [
      {
        title: "Stories first",
        body: "We lead with the human — the artist, the founder, the youth — before we lead with the polish."
      },
      {
        title: "Owned by the community",
        body: "Creatives we cover get the assets. We never gatekeep their own story from them."
      },
      {
        title: "Built to travel",
        body: "Everything is built for the platforms our community actually uses — short-form first, archive-quality second."
      }
    ],
    format: [
      "Artist short films and mini-docs",
      "Photo essays and editorial features",
      "Recap films from Sessions and events",
      "A growing public archive of 574 creative culture"
    ],
    whoItsFor:
      "Artists and creatives whose story should be on the record — and brands or partners who want to support that work.",
    cta: { label: "Pitch a story or partner with us", href: "/support" }
  }
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
