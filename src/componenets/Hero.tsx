import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import RotatingCube from "./RotatingCube";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

export default function Hero() {
  const scrollToServices = () =>
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_60%,rgba(96,165,250,0.07),transparent)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyprus-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyprus-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(240,237,228,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(240,237,228,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 flex flex-col gap-6 lg:gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full glass border border-cyprus-800/40 text-xs text-[#93c5fd] font-mono tracking-wider uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            Next-Gen Digital Agency
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
          >
            We Architect the{" "}
            <span className="gradient-text">Digital Infrastructure</span> for
            Your Next Stage of Growth
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-sand-500 text-lg leading-relaxed max-w-lg"
          >
            From concept to scale — we build the systems, applications, and
            automation engines that power tomorrow's most ambitious companies.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-2 px-6 py-3 bg-cyprus-800 hover:bg-cyprus-700 text-sand-300 font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-cyprus-800/40 hover:shadow-cyprus-700/50 hover:-translate-y-0.5 border border-[#f0ede4]/10"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 px-6 py-3 glass glass-hover text-sand-400 hover:text-sand-200 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              View Services
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="flex items-center gap-6 pt-2"
          >
            {[
              ["50+", "Projects Shipped"],
              ["98%", "Client Retention"],
              ["2+", "Years of Experience"],
            ].map(([val, label]) => (
              <div key={label} className="flex flex-col">
                <div className="text-2xl font-bold text-sand-200 flex items-center justify-center">
                  {val}
                </div>
                <span className="text-xs text-sand-600">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3D Cube */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0 flex items-center justify-center opacity-25 sm:opacity-40 lg:static lg:z-auto lg:opacity-100"
        >
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-cyprus-800/20 blur-3xl animate-pulse-glow pointer-events-none" />
          <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-cyprus-700/10 blur-2xl pointer-events-none" />

          <div className="relative w-72 h-72 md:w-[420px] md:h-[420px]">
            <RotatingCube />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-4 sm:right-8 md:right-12 z-10 glass border border-cyprus-800/40 rounded-xl px-3 py-2 text-xs text-[#93c5fd] font-mono shadow-lg"
          >
            <span className="text-sand-600">// </span>Full-Stack Dev
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-6 left-80 sm:left-4 md:left-6 z-10 glass border border-cyprus-800/40 rounded-xl px-3 py-2 text-xs text-[#93c5fd] font-mono shadow-lg"
          >
            <span className="text-sand-600">{"{ "}</span>AI-Powered
            <span className="text-sand-600">{" }"}</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-sand-700 hover:text-sand-500 transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.button>
    </section>
  );
}
