export type EventKind =
  | "Creative Session"
  | "Workshop"
  | "Networking"
  | "Youth"
  | "Showcase";

export type EventItem = {
  id: string;
  title: string;
  kind: EventKind;
  date: string; // ISO yyyy-mm-dd
  time: string;
  location: string;
  blurb: string;
  capacity?: string;
  free?: boolean;
};

// Replace these with real events when ready.
export const events: EventItem[] = [
  {
    id: "vol-04",
    title: "Creative Sessions — Vol. 04",
    kind: "Creative Session",
    date: "2026-05-24",
    time: "6:00 – 9:00 PM",
    location: "Studio 574 · South Bend",
    blurb:
      "Artists, founders, and producers in one room. No pitches, no panels — just collaboration.",
    capacity: "Open · RSVP required",
    free: true
  },
  {
    id: "workshop-brand",
    title: "Workshop: Build Your Brand Story",
    kind: "Workshop",
    date: "2026-06-07",
    time: "1:00 – 4:00 PM",
    location: "Riverbend Arts · South Bend",
    blurb:
      "A working session on positioning, voice, and how to translate your craft into a brand.",
    capacity: "30 seats",
    free: true
  },
  {
    id: "youth-summer",
    title: "Youth Summer Studio — Kickoff",
    kind: "Youth",
    date: "2026-06-14",
    time: "10:00 AM – 2:00 PM",
    location: "Howard Park · South Bend",
    blurb:
      "Free programming for young creatives ages 13–19. Music, design, film, fashion — pick a lane.",
    capacity: "40 seats",
    free: true
  },
  {
    id: "network-mixer",
    title: "Networking Mixer — Founders + Creatives",
    kind: "Networking",
    date: "2026-06-21",
    time: "7:00 – 10:00 PM",
    location: "Common Goods · South Bend",
    blurb:
      "Curated mixer connecting local founders with the artists building the city alongside them.",
    capacity: "75 seats",
    free: true
  },
  {
    id: "vol-05",
    title: "Creative Sessions — Vol. 05",
    kind: "Creative Session",
    date: "2026-07-12",
    time: "6:00 – 9:00 PM",
    location: "Studio 574 · South Bend",
    blurb:
      "Open studio, open ideas. Bring something you're working on — leave with a collaborator.",
    capacity: "Open · RSVP required",
    free: true
  },
  {
    id: "showcase-summer",
    title: "Summer Showcase — 574 In Motion",
    kind: "Showcase",
    date: "2026-08-02",
    time: "5:00 – 10:00 PM",
    location: "Howard Park Lawn · South Bend",
    blurb:
      "A community showcase featuring the work of our artists, designers, and youth cohort.",
    capacity: "All ages · free admission",
    free: true
  },
  {
    id: "workshop-film",
    title: "Workshop: Telling Stories With a Camera",
    kind: "Workshop",
    date: "2026-08-16",
    time: "1:00 – 5:00 PM",
    location: "Studio 574 · South Bend",
    blurb:
      "A hands-on intro to short-form filmmaking — concept, shoot, cut. Bring a phone or a camera.",
    capacity: "20 seats",
    free: true
  }
];

export const formatDate = (iso: string) => {
  const d = new Date(`${iso}T12:00:00`);
  return {
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    day: d.getDate().toString(),
    weekday: d.toLocaleString("en-US", { weekday: "long" }),
    full: d.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    })
  };
};
