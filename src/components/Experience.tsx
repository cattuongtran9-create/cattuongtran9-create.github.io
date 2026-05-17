import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "July 2024 — January 2025",
    title: "Marketing Intern",
    org: "Apollo English",
    description: [
      "Operated activation booths at schools and events with up to 200 - 300 participants, engaging parents to promote free trial classes.",
      "Consulted parents of children aged 6-12 to identify learning needs, collect leads, and support trial-class registration.",
      "Generated around 200 leads per month, with around 5% of leads converting to sales.",
      "Coordinated with Event Marketing and Sales teams to support the offline acquisition funnel from parent engagement to potential customer conversion.",
    ],
  },
];

const activities = [
  {
    period: "October 2025 — December 2025",
    title: "SHIRTALK - Management Team",
    org: "Instagram",
    link: "https://www.instagram.com/shirtalk_wearyourvoice/",
    description: [
      "Managed SHIRTALK's Instagram content strategy, including lifestyle posts, styling visuals, communication posts, Stories, Reels, and UGC campaigns.",
      "Achieved 52,133 total views, 1,284 accounts reached, 1,509 profile visits, and 748 total engagements with an estimated 1.4% engagement rate.",
      "Analyzed audience behavior and content performance, identifying that 51.9% of views came from non-followers, while 85.4% of engagements came from followers.",
      "Proposed next-step improvements based on performance data, including higher-quality visuals, styling-focused Reels, stronger CTAs, and simplified UGC mechanics to improve interaction and conversion.",
    ],
  },
  {
    period: "October 2025 — December 2025",
    title: "SHIRTALK - Management Team",
    org: "Website",
    link: "https://shirtalk.vercel.app/",
    description: [
      "Conducted customer interviews to identify expectations for an optimized fashion e-commerce website.",
      "Tested website layout, user flow, and performance, then gave feedback to the tech team to improve usability and conversion.",
      "Contributed to visual direction and key UX elements, including CTA placement, product display, checkout flow, QR payment, and custom design upload.",
      "Analyzed website performance with 628 visitors, 2,443 page views, 3.89 pages per visit, and 21.5% checkout reach rate to propose UX and mobile optimization improvements.",
    ],
  },
  {
    period: "March 2024 — April 2024",
    title: "External Relations Leader",
    org: "ISB Academic Team",
    link: "https://www.facebook.com/share/p/1AqLyZ3k7J/",
    description: [
      "Contacted 15 potential partners and speakers.",
      "Worked with Talemy as the co-organizer partner.",
      "Maintained a 96% task completion rate across the External Relations team before event day.",
      "Coordinated 3 rounds of content alignment between speakers, partner, and internal teams.",
      "Achieved 350+ registrations and attendees with support from partner communication and promotion channels.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-6 bg-background text-foreground overflow-hidden">
      {/* Decorative motion elements */}
      <motion.svg
        className="absolute top-16 left-6 w-10 h-10 opacity-50"
        viewBox="0 0 100 100"
        animate={{ x: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <path d="M10,10 L50,50 L10,90" fill="#F1204A" stroke="none" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-24 right-10 w-16 h-16 opacity-40"
        viewBox="0 0 100 100"
        animate={{ rotate: [0, 90, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <rect x="15" y="42" width="70" height="16" rx="8" fill="#FBEB35" transform="rotate(45 50 50)" />
        <rect x="15" y="42" width="70" height="16" rx="8" fill="#FBEB35" transform="rotate(-45 50 50)" />
      </motion.svg>

      <motion.svg
        className="absolute top-1/3 right-6 w-10 h-10 opacity-45"
        viewBox="0 0 100 100"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <path d="M50 0 C55 40, 60 45, 100 50 C60 55, 55 60, 50 100 C45 60, 40 55, 0 50 C40 45, 45 40, 50 0Z" fill="#2DCCD3" />
      </motion.svg>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-0 mb-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-8 pb-10 border-l border-border last:pb-0"
            >
              <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-primary -translate-x-[7px]" />
              <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase block mb-1">
                {exp.period}
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground">{exp.title}</h3>
              <span className="text-muted-foreground text-sm font-medium block mb-2">{exp.org}</span>
              <ul className="list-disc list-outside pl-5 space-y-1">
                {exp.description.map((item, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Extracurricular Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground font-heading font-semibold text-sm tracking-widest uppercase mb-4 block">
            Projects
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Extracurricular Activities
          </h2>
        </motion.div>

        <div className="space-y-0">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-8 pb-10 border-l border-border last:pb-0"
            >
              <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-primary -translate-x-[7px]" />
              <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase block mb-1">
                {act.period}
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {act.link ? (
                  <a
                    href={act.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    {act.title}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  act.title
                )}
              </h3>
              <span className="text-muted-foreground text-sm font-medium block mb-2">{act.org}</span>
              <ul className="list-disc list-outside pl-5 space-y-1">
                {act.description.map((item, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
