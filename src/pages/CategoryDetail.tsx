import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Menu, X } from "lucide-react";
import { projects } from "@/components/Projects";
import { projectContent } from "@/data/projectContent";
import { projectDescriptions } from "@/data/projectDescriptions";
import { useState, useEffect, useRef, useCallback } from "react";

const getRelatedCategories = (projectName: string) => {
  return projects.filter((p) =>
    p.projects_name.some((n) => n.toLowerCase() === projectName.toLowerCase())
  );
};

const CategoryDetail = () => {
  const navigate = useNavigate();
  const { project } = useParams();
  const projectName = decodeURIComponent(project || "");
  const relatedCategories = getRelatedCategories(projectName);
  const content = projectContent[projectName];
  const desc = projectDescriptions[projectName];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const BATCH_SIZE = 5;
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const totalItems = content?.type === "pdf" ? content.items.length : 0;

  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [projectName]);

  useEffect(() => {
    if (content?.type !== "pdf") return;
    const sentinel = sentinelRef.current;
    if (!sentinel || visibleCount >= totalItems) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, totalItems));
        }
      },
      { root: null, rootMargin: "200px", threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [content?.type, totalItems, visibleCount]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = () => { if (mq.matches) setSidebarOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (relatedCategories.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Project not found</h1>
          <Link to="/" className="text-muted-foreground hover:text-foreground underline">← Back to home</Link>
        </div>
      </div>
    );
  }

  const sidebarContent = (
    <div className="relative">
      {/* Decorative floating elements */}
      <motion.svg
        className="absolute -top-2 -right-2 w-10 h-10 opacity-60"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <polygon points="50,0 61,35 100,35 68,57 79,91 50,70 21,91 32,57 0,35 39,35" fill="#F1204A" />
      </motion.svg>

      <motion.svg
        className="absolute top-48 -left-3 w-8 h-8 opacity-50"
        viewBox="0 0 100 100"
        animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <path d="M50 0 C55 40, 60 45, 100 50 C60 55, 55 60, 50 100 C45 60, 40 55, 0 50 C40 45, 45 40, 50 0Z" fill="#FBEB35" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-20 -right-1 w-10 h-10 opacity-40"
        viewBox="0 0 100 100"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="#2DCCD3" strokeWidth="4" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#2DCCD3" strokeWidth="4" />
      </motion.svg>

      <button
        onClick={() => {
          navigate("/");
          setTimeout(() => {
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-medium mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </button>

      <h1 className="font-heading text-2xl xl:text-3xl font-bold text-foreground mb-4 leading-tight">
        {projectName}
      </h1>

      {desc ? (
        <div className="space-y-5 mb-8">
          <p className="text-muted-foreground text-sm leading-relaxed">{desc.summary}</p>
          {content?.type !== "video" && (
            <>
              <div>
                <h3 className="font-heading font-bold text-foreground text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#F1204A' }} />
                  My Role
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc.role}</p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#2DCCD3' }} />
                  Results
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc.results}</p>
              </div>
            </>
          )}
        </div>
      ) : (
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">Project description coming soon.</p>
      )}

      <div className="mb-8">
        <h3 className="font-heading font-bold text-foreground text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FBEB35' }} />
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {relatedCategories.map((cat) => (
            <span
              key={cat.id}
              className="px-3 py-1.5 rounded-full bg-accent text-muted-foreground text-xs font-medium border border-border"
            >
              {cat.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        {/* Mobile hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center text-foreground shadow-lg"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Mobile sidebar overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-card border-r border-border p-6 overflow-y-auto z-50 lg:hidden"
              >
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
                {sidebarContent}
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Desktop sidebar */}
        <aside className="hidden lg:block lg:w-80 xl:w-96 border-r border-border bg-card p-8 sticky top-0 h-screen overflow-y-auto shrink-0">
          {sidebarContent}
        </aside>

        {/* Main Content — Scrollable content feed */}
        <main className="flex-1 min-w-0 overflow-y-auto">
          {content?.type === "video" ? (
            <div className="flex flex-col gap-6 p-6">
              {content.items.map((videoId, idx) => (
                <div key={idx} className="w-full aspect-video rounded-xl overflow-hidden border border-border">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`${projectName} - Video ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          ) : content?.type === "pdf" ? (
            <div className="flex flex-col">
              {content.items.slice(0, visibleCount).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${projectName} - Page ${idx + 1}`}
                  className="w-full object-contain"
                  loading={idx > 2 ? "lazy" : "eager"}
                />
              ))}
              {visibleCount < totalItems && (
                <div ref={sentinelRef} className="flex items-center justify-center py-8">
                  <div className="w-6 h-6 border-2 border-muted-foreground/30 border-t-foreground rounded-full animate-spin" />
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">No content available yet.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CategoryDetail;
