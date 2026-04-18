import { motion } from "framer-motion";
import { ShoppingCart, ArrowDown } from "lucide-react";
import folderIcon from "@/assets/folder-icon.jpg";

const Hero = () => {
  return (
    <section className="section-dark relative min-h-screen flex items-center justify-center px-6 py-24 bg-background text-foreground border-[#fbeb37] overflow-hidden">
      {/* Floating decorative motion elements */}
      {/* Star burst - top left */}
      <motion.svg
        className="absolute top-16 left-8 w-16 h-16 opacity-70"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <polygon points="50,0 61,35 100,35 68,57 79,91 50,70 21,91 32,57 0,35 39,35" fill="#F1204A" />
      </motion.svg>

      {/* Concentric circles - top right */}
      <motion.svg
        className="absolute top-24 right-12 w-20 h-20 opacity-50"
        viewBox="0 0 100 100"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="#2DCCD3" strokeWidth="4" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="#2DCCD3" strokeWidth="4" />
        <circle cx="50" cy="50" r="19" fill="none" stroke="#2DCCD3" strokeWidth="4" />
      </motion.svg>

      {/* 4-point star - bottom left */}
      <motion.svg
        className="absolute bottom-32 left-12 w-14 h-14 opacity-60"
        viewBox="0 0 100 100"
        animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <path d="M50 0 C55 40, 60 45, 100 50 C60 55, 55 60, 50 100 C45 60, 40 55, 0 50 C40 45, 45 40, 50 0Z" fill="#FBEB35" />
      </motion.svg>

      {/* Wavy lines - mid left */}
      <motion.svg
        className="absolute top-1/2 left-4 w-16 h-10 opacity-50"
        viewBox="0 0 120 60"
        animate={{ x: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <path d="M0,15 Q30,0 60,15 Q90,30 120,15" fill="none" stroke="#F1204A" strokeWidth="5" strokeLinecap="round" />
        <path d="M0,30 Q30,15 60,30 Q90,45 120,30" fill="none" stroke="#F1204A" strokeWidth="5" strokeLinecap="round" />
        <path d="M0,45 Q30,30 60,45 Q90,60 120,45" fill="none" stroke="#F1204A" strokeWidth="5" strokeLinecap="round" />
      </motion.svg>

      {/* X shape - bottom right */}
      <motion.svg
        className="absolute bottom-24 right-8 w-14 h-14 opacity-60"
        viewBox="0 0 100 100"
        animate={{ rotate: [0, 90, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <rect x="15" y="42" width="70" height="16" rx="8" fill="#2DCCD3" transform="rotate(45 50 50)" />
        <rect x="15" y="42" width="70" height="16" rx="8" fill="#2DCCD3" transform="rotate(-45 50 50)" />
      </motion.svg>

      {/* Chevron arrow - mid right */}
      <motion.svg
        className="absolute top-1/3 right-20 w-10 h-12 opacity-50"
        viewBox="0 0 60 80"
        animate={{ x: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <path d="M5,5 L40,40 L5,75" fill="#FBEB35" stroke="none" />
      </motion.svg>

      {/* Small squares cluster - bottom center-left */}
      <motion.div
        className="absolute bottom-40 left-1/4 flex gap-1.5 opacity-50"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      >
        <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#2DCCD3' }} />
        <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#FBEB35' }} />
        <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#F1204A' }} />
      </motion.div>

      {/* Sunburst lines - top center */}
      <motion.svg
        className="absolute top-10 left-1/2 -translate-x-1/2 w-12 h-12 opacity-40"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="50" y1="50" x2="50" y2="5"
            stroke="#F1204A"
            strokeWidth="2"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
      </motion.svg>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-foreground"
          >
            Welcome to <span className="bg-[hsl(348,89%,53%)] px-1.5 py-0.5 leading-none inline-block">Cat Tuong's</span> portfolio
          </motion.h1>
        </div>        
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
