import { motion } from "framer-motion";

const experiences = [
  {
    period: "July 2024 — January 2025",
    title: "Marketing Intern",
    org: "Apollo English",
    description: [
      "Assisted in planning and managing events, especially educational events for children aged 8-12.",
      "Prepared materials and logistics for events, and actively participated in weekly team meetings with the Event Marketing Cluster Manager.",
      'Managed the weekly "Golden Bell Challenge" event with 10-15 participants, children aged 6-12.',
      "Hosted events at kindergartens and primary schools.",
      "Collaborator at the cluster-scope events with 500 - 600 participants.",
    ],
  },
  {
    period: "January 2025 — Present",
    title: "Social Media Freelancer",
    org: "Client: Bà Năm restaurant, Olive House",
    description: [
      "Editing the social videos for TikTok accounts of clients.",
      "Crafting a detailed video brief, structure the script and flow.",
    ],
  },
];

const activities = [
  {
    period: "March 2024 — April 2024",
    title: "External Relations Leader (Seminar project)",
    org: "ISB Academic Team",
    description: [
      'Soft skills workshop: "From Campus to Career: Conquer your first job interview".',
      "A live seminar attended by over 350 students.",
      "Co-organizer Partner: Talemy.",
      "Guest speakers: Mr. Trần Phước Trí and Mr. Nguyễn Trung Hiếu.",
      "Negotiated sponsorship proposals and ensured mutual benefits and responsibilities with the Co-organizer Partner.",
      "Main contact for content orientation with guest speakers and the Content team.",
      "Managed, tracked, and led the External Relations team of 7 members.",
    ],
  },
  {
    period: "May 2021 — September 2022",
    title: "Co-Founder",
    org: "Ngot Lab project",
    description: [
      "Developed strategic plans and managed human resources for communication tasks during bakery sales campaigns.",
      "Successfully raised 5 million VND through fundraising activities during the COVID-19 pandemic (academic year: 2021–2022).",
      "Achieved 1,500 page likes within the first 6 months; currently reached 4,400 likes.",
      "Produced engaging content series about baking, tailored for students.",
      "Managed, tracked, and led the Communication and Human Resource team of 19 members.",
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
          <span className="text-muted-foreground font-heading font-semibold text-sm tracking-widest uppercase mb-4 block">
            Experience
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Where I've been.
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
            Extracurricular Activities
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Beyond the classroom.
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
              <h3 className="font-heading text-lg font-bold text-foreground">{act.title}</h3>
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
