import { motion } from "framer-motion";
import { Mail, Phone, User, ArrowUpRight, GraduationCap, Award, Wrench } from "lucide-react";
import catTuongPhoto from "@/assets/cat-tuong-photo.jpg";

const tags = [
  "Marketing",
  "Branding",
  "Content Creation",
  "Analytics",
  "Project Management",
  "Digital Marketing",
  "Video Production",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 px-6 bg-background text-foreground overflow-hidden"
    >
      {/* Decorative floating shapes */}
      <motion.div
        className="absolute top-20 right-[10%] w-44 h-44 rounded-full opacity-[0.08] blur-2xl pointer-events-none"
        style={{ background: "hsl(348,89%,53%)" }}
        animate={{ y: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-[5%] w-32 h-32 rounded-full opacity-[0.06] blur-2xl pointer-events-none"
        style={{ background: "hsl(15,85%,65%)" }}
        animate={{ y: [0, 15, 0], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-[3%] w-3 h-3 rounded-full opacity-30"
        style={{ background: "hsl(348,89%,53%)" }}
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[30%] left-[8%] w-2 h-2 rounded-full opacity-25"
        style={{ background: "hsl(15,85%,65%)" }}
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14"
        >
          <div
            className="w-8 h-1 rounded-full"
            style={{ background: "hsl(348,89%,53%)" }}
          />
          <span className="font-heading font-bold text-xs tracking-[0.3em] uppercase text-muted-foreground">
            About Me
          </span>
        </motion.div>

        {/* Hero name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95]">
            I'm{" "}
            <span className="relative inline-block">
              <span
                className="relative z-10 px-3 py-1 text-white"
                style={{ backgroundColor: "hsl(348,89%,53%)" }}
              >
                Cat Tuong
              </span>
            </span>
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-muted-foreground font-heading font-medium max-w-xl">
            Project management · Creative Content · Storyteller
          </p>
        </motion.div>

        {/* Main grid: Photo + Content */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">
          {/* Photo composition */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background accent block */}
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-3xl -z-10"
              style={{ backgroundColor: "hsl(348,89%,53%)", opacity: 0.08 }}
            />
            {/* Secondary accent */}
            <div
              className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl -z-10"
              style={{ backgroundColor: "hsl(15,85%,65%)", opacity: 0.15 }}
            />
            {/* Photo */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-border shadow-2xl group">
              <img
                src={catTuongPhoto}
                alt="Trần Thị Cát Tường"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
              {/* Name badge on photo */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-heading font-bold text-sm tracking-wide">
                  Trần Thị Cát Tường
                </p>
                <p className="text-white/70 text-xs mt-0.5">Sài Gòn, Vietnam</p>
              </div>
            </div>

            {/* Floating tag on photo */}
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-8"
          >
            {/* Bio paragraphs */}
            <div className="space-y-6">
              <p className="text-lg sm:text-xl leading-relaxed text-secondary-foreground">
                Born and raised in Saigon, I have been deeply shaped by the city's energy, cultural
                richness, and fast-paced rhythm. Growing up in that environment made me{" "}
                <span className="font-bold text-foreground">
                  resilient, curious, and always ready to embrace new challenges
                </span>
                .
              </p>

              <p className="text-lg sm:text-xl leading-relaxed text-secondary-foreground">
                With{" "}
                <span className="font-bold text-foreground">over three years of hands-on experience</span>
                , I've built a solid foundation across{" "}
                <span className="font-bold text-foreground">
                  video production, creative content, and integrated marketing campaigns
                </span>
                — from concept development, scripting, and post-production to{" "}
                <span className="font-bold italic text-foreground">
                  branding strategy, project management, data-driven analytics, and digital marketing execution
                </span>
                .
              </p>

            </div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2.5"
            >
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.35 + i * 0.05 }}
                  className="px-4 py-2 rounded-full text-sm font-heading font-semibold border border-border bg-card text-foreground hover:border-[hsl(348,89%,53%)] hover:text-[hsl(348,89%,53%)] transition-colors duration-300 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 p-6 rounded-2xl border border-border bg-card shadow-sm"
            >
              <p className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Get in Touch
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 group">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "hsl(348,89%,53%)", opacity: 0.1 }}
                  >
                    <User className="w-4 h-4" style={{ color: "hsl(348,89%,53%)" }} />
                  </div>
                  <span className="text-foreground font-heading font-semibold text-base">
                    Trần Thị Cát Tường
                  </span>
                </div>
                <a
                  href="mailto:catttuongtran9@gmail.com"
                  className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "hsl(348,89%,53%)", opacity: 0.1 }}
                  >
                    <Mail className="w-4 h-4" style={{ color: "hsl(348,89%,53%)" }} />
                  </div>
                  <span className="text-secondary-foreground text-base group-hover:text-foreground transition-colors">
                    catttuongtran9@gmail.com
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="tel:0906648217"
                  className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "hsl(348,89%,53%)", opacity: 0.1 }}
                  >
                    <Phone className="w-4 h-4" style={{ color: "hsl(348,89%,53%)" }} />
                  </div>
                  <span className="text-secondary-foreground text-base group-hover:text-foreground transition-colors">
                    0906648217
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Education, Certification, Skills */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl border border-border bg-card"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "hsl(348,89%,53%)", opacity: 0.1 }}
              >
                <GraduationCap className="w-5 h-5" style={{ color: "hsl(348,89%,53%)" }} />
              </div>
              <h3 className="font-heading font-bold text-sm tracking-[0.2em] uppercase text-muted-foreground">
                Education
              </h3>
            </div>
            <p className="font-heading font-bold text-foreground text-base mb-2">
              UEH-International School of Business
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Bachelor degree at Marketing (2023 - 2027)</li>
              <li>GPA: 3.39/4.0</li>
            </ul>
          </motion.div>

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl border border-border bg-card"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "hsl(348,89%,53%)", opacity: 0.1 }}
              >
                <Award className="w-5 h-5" style={{ color: "hsl(348,89%,53%)" }} />
              </div>
              <h3 className="font-heading font-bold text-sm tracking-[0.2em] uppercase text-muted-foreground">
                Certification
              </h3>
            </div>
            <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-muted-foreground">
              <li>IELTS: 6.5 (Speaking: 7.0) - 04/2023</li>
              <li>Fundamentals of Digital Marketing by Google (2021)</li>
              <li>Google Ads for Beginners by Coursera (2021)</li>
              <li>Premiere Pro Essential Training (2022–2024)</li>
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl border border-border bg-card"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "hsl(348,89%,53%)", opacity: 0.1 }}
              >
                <Wrench className="w-5 h-5" style={{ color: "hsl(348,89%,53%)" }} />
              </div>
              <h3 className="font-heading font-bold text-sm tracking-[0.2em] uppercase text-muted-foreground">
                Skills
              </h3>
            </div>
            <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-muted-foreground">
              <li>Communication, leadership, and teamwork skills</li>
              <li>Planning, organization, and problem-solving skill</li>
              <li>Ideation and public speaking skills</li>
              <li>Office computer skills with basic proficiency in Adobe Premiere Pro and CapCut PC</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
