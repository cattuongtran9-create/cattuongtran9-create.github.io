export interface ProjectContentItem {
  type: "pdf" | "video";
  items: string[];
}

function generatePages(slug: string, count: number): string[] {
  const padLen = count >= 100 ? 3 : count >= 10 ? 2 : 1;
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(padLen, "0");
    return `/projects/${slug}/page-${num}.jpg`;
  });
}

export const projectContent: Record<string, ProjectContentItem> = {
  "Digital Marketing": {
    type: "pdf",
    items: generatePages("digital-marketing", 61),
  },
  "Social Media Analytics project": {
    type: "pdf",
    items: generatePages("social-media-analytics", 10),
  },
  "Social Media Viral project": {
    type: "pdf",
    items: generatePages("social-media-viral", 11),
  },
  "Branding Management project": {
    type: "pdf",
    items: generatePages("branding-management", 42),
  },
  "Business Analytics project": {
    type: "pdf",
    items: generatePages("business-analytics", 9),
  },
  "Marketing Business (client: LG AI)": {
    type: "pdf",
    items: generatePages("marketing-business-lg", 17),
  },
  "Service Marketing project": {
    type: "pdf",
    items: generatePages("service-marketing", 52),
  },
  "Project Management project": {
    type: "pdf",
    items: generatePages("project-management", 35),
  },
  "Creative Proposal (client: Grab)": {
    type: "pdf",
    items: generatePages("creative-proposal-grab", 17),
  },
  "Introduction": {
    type: "video",
    items: ["6FB5kPMoiGQ"],
  },
  "Video 1": {
    type: "video",
    items: ["3zcNyo7KXOg"],
  },
  "Video 2": {
    type: "video",
    items: ["elhAal_xR-8"],
  },
  "Video 3": {
    type: "video",
    items: ["Vz3lSkNNB5Y"],
  },
  "Video 4": {
    type: "video",
    items: ["dY92WXzc4ro"],
  },
};
