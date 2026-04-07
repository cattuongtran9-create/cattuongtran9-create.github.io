import { motion } from "framer-motion";
import { Mail, Linkedin, Globe, ArrowUpRight, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-dark relative py-24 sm:py-32 px-6 bg-background text-foreground overflow-hidden">
      {/* Decorative motion elements */}
      <motion.svg
        className="absolute top-12 left-8 w-10 h-10 opacity-45"
        viewBox="0 0 100 100"
        animate={{ y: [0, -10, 0], rotate: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <path d="M50 0 C55 40, 60 45, 100 50 C60 55, 55 60, 50 100 C45 60, 40 55, 0 50 C40 45, 45 40, 50 0Z" fill="#FBEB35" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-20 right-8 w-12 h-12 opacity-40"
        viewBox="0 0 100 100"
        animate={{ rotate: [0, -90, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      >
        <rect x="15" y="42" width="70" height="16" rx="8" fill="#F1204A" transform="rotate(45 50 50)" />
        <rect x="15" y="42" width="70" height="16" rx="8" fill="#F1204A" transform="rotate(-45 50 50)" />
      </motion.svg>

      <motion.svg
        className="absolute top-1/3 right-6 w-10 h-10 opacity-50"
        viewBox="0 0 100 100"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <circle cx="50" cy="50" r="38" fill="none" stroke="#2DCCD3" strokeWidth="5" />
        <circle cx="50" cy="50" r="22" fill="none" stroke="#2DCCD3" strokeWidth="5" />
      </motion.svg>

      <motion.div
        className="absolute bottom-1/3 left-6 flex gap-1 opacity-40"
        animate={{ x: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#2DCCD3' }} />
        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#F1204A' }} />
      </motion.div>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-muted-foreground font-heading font-semibold text-sm tracking-widest uppercase mb-4 block">
            Let's Connect
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to bring energy & impact to your team.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            I'm actively looking for opportunities where I can contribute, grow, and make a 
            real difference. Let's talk about what I can bring to your team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <a
            href="mailto:cattuongtran9@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-foreground text-foreground font-heading font-semibold text-sm tracking-wide hover:bg-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            Send Me an Email
          </a>
          <a
            href="https://www.linkedin.com/in/tuongtran09/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background font-heading font-semibold text-sm tracking-wide hover:opacity-80 transition-opacity"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn Profile
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <Mail className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground text-sm">cattuongtran9@gmail.com</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText("cattuongtran9@gmail.com");
            }}
            className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            Copy
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-8"
        >
          {[
            { icon: Mail, label: "Email", href: "mailto:cattuongtran9@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tuongtran09/" },
            
            { icon: Globe, label: "Portfolio", href: "#projects" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <link.icon className="w-4 h-4" />
              <span>{link.label}</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border/30">
          <p className="text-muted-foreground text-xs">
            Designed with ambition. Built to impress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
