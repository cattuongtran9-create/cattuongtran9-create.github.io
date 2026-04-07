import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface ProjectSection {
  heading: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  projects_name: string[];
  outcome: string;
  images: string[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: "digital-and-social-media",
    title: "Digital and Social Media",
    description:
      "Projects focused on digital marketing strategies, social media analytics, and viral content campaigns across multiple platforms.",
    role: "Digital Marketer",
    projects_name: ["Digital Marketing", "Social Media Analytics project", "Social Media Viral project"],
    outcome: "Comprehensive digital & social media portfolio",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    ],
    sections: [],
  },
  {
    id: "marketing-and-branding",
    title: "Marketing and Branding",
    description:
      "Branding management, business analytics, service marketing, and client-based marketing projects including work with LG AI.",
    role: "Marketing Strategist",
    projects_name: [
      "Branding Management project",
      "Business Analytics project",
      "Marketing Business (client: LG AI)",
      "Service Marketing project",
    ],
    outcome: "End-to-end marketing & branding expertise",
    images: [
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80",
      "https://images.unsplash.com/photo-1585247226801-bc613c441316?w=800&q=80",
    ],
    sections: [],
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "Hands-on experience managing projects from planning to execution, ensuring timely delivery and stakeholder alignment.",
    role: "Project Manager",
    projects_name: ["Project Management project", "Creative Proposal (client: Grab)"],
    outcome: "Proven project management capabilities",
    images: [
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
      "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&q=80",
    ],
    sections: [],
  },
  {
    id: "video-production",
    title: "Video Production",
    description:
      "Video production work including introductions and creative video projects showcasing storytelling and editing skills.",
    role: "Video Producer",
    projects_name: ["Introduction", "Video 1", "Video 2", "Video 3", "Video 4"],
    outcome: "Creative video production portfolio",
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    ],
    sections: [],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-dark relative py-24 sm:py-32 px-6 bg-background text-foreground overflow-hidden">
      {/* Decorative motion elements */}
      <motion.svg
        className="absolute top-20 left-8 w-12 h-12 opacity-45"
        viewBox="0 0 100 100"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <circle cx="50" cy="50" r="42" fill="none" stroke="#2DCCD3" strokeWidth="4" />
        <circle cx="50" cy="50" r="28" fill="none" stroke="#2DCCD3" strokeWidth="4" />
        <circle cx="50" cy="50" r="14" fill="none" stroke="#2DCCD3" strokeWidth="4" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-16 right-6 w-14 h-14 opacity-50"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <polygon points="50,5 61,35 95,35 68,55 76,85 50,67 24,85 32,55 5,35 39,35" fill="#F1204A" />
      </motion.svg>

      <motion.svg
        className="absolute top-1/2 right-10 w-12 h-8 opacity-40"
        viewBox="0 0 120 60"
        animate={{ x: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <path d="M0,15 Q30,0 60,15 Q90,30 120,15" fill="none" stroke="#FBEB35" strokeWidth="5" strokeLinecap="round" />
        <path d="M0,35 Q30,20 60,35 Q90,50 120,35" fill="none" stroke="#FBEB35" strokeWidth="5" strokeLinecap="round" />
      </motion.svg>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground font-heading font-semibold text-sm tracking-widest uppercase mb-4 block">
            Featured Projects
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Impact in action.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="rounded-2xl border border-border bg-background p-8 h-full">

                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.projects_name.map((name, j) => (
                    <Link
                      key={j}
                      to={`/project/${encodeURIComponent(name)}`}
                      className="px-3 py-1 rounded-full bg-accent text-white text-xs font-medium hover:bg-foreground hover:text-background transition-colors"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
