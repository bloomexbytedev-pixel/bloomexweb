import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Scoping",
    description:
      "We deep-dive into your business goals, technical constraints, and competitive landscape. Every engagement starts with a structured discovery sprint — no assumptions, no generic templates.",
    duration: "Week 1",
    deliverables: ["Requirements Doc", "Tech Audit", "Roadmap Draft"],
    side: "left",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Architecture & Design",
    description:
      "Our architects map the system design, data models, and API contracts. Designers create interactive prototypes reviewed in real Figma sessions with your team.",
    duration: "Week 2–3",
    deliverables: ["System Design", "UI Prototype", "API Contracts"],
    side: "right",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development & Review",
    description:
      "Bi-weekly sprints with daily standup updates. Every PR is reviewed, every line is tested. You always have live access to staging environments.",
    duration: "Week 4–10",
    deliverables: ["Sprint Demos", "Staging Access", "Test Reports"],
    side: "left",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Deployment",
    description:
      "Zero-downtime deployment with automated rollback capabilities. Go-live is supported by our entire team standing by for the first 48 hours post-launch.",
    duration: "Week 11",
    deliverables: ["Production Deploy", "Load Testing", "Runbook"],
    side: "right",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Growth & Optimization",
    description:
      "Post-launch, we monitor performance, analyze user behavior, and iterate quickly. Your product keeps getting better with every release.",
    duration: "Ongoing",
    deliverables: ["Analytics Dash", "Monthly Reports", "Roadmap Reviews"],
    side: "left",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(59,130,246,0.08),transparent)]" />

      <div className="relative max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-cyprus-800/40 text-xs text-[#93c5fd] font-mono tracking-wider uppercase mb-4">
            How We Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-sand-500 text-lg max-w-xl mx-auto">
            A battle-tested process that turns ideas into production systems —
            predictably, every time.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyprus-700/40 via-[#3b82f6]/20 to-transparent hidden md:block transform -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = step.side === "left";
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center ${!isLeft ? "md:[direction:rtl]" : ""}`}
                >
                  <div
                    className={`glass glass-hover rounded-2xl p-6 flex flex-col gap-4 group ${!isLeft ? "md:[direction:ltr]" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyprus-800/40 border border-cyprus-700/30 flex items-center justify-center text-[#93c5fd] group-hover:bg-cyprus-800/60 transition-colors">
                        <Icon className="w-5 h-5" strokeWidth={1.8} />
                      </div>
                      <span className="font-mono text-xs text-sand-700">
                        {step.duration}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sand-200 font-semibold text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sand-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {step.deliverables.map((d) => (
                        <span
                          key={d}
                          className="px-2.5 py-1 rounded-md bg-[#f0ede4]/[0.04] border border-[#f0ede4]/[0.07] text-sand-700 text-xs font-mono"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 md:[direction:ltr]">
                      <div className="w-12 h-12 rounded-full glass border border-cyprus-700/40 flex items-center justify-center shadow-lg shadow-cyprus-800/20">
                        <span className="font-mono font-bold text-[#93c5fd] text-sm">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
