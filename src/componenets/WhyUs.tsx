import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Lock, TrendingUp, Users, Clock, Code2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    description:
      "We ship in sprints, not quarters. Our async-first workflow eliminates bottlenecks and keeps momentum from day one.",
  },
  {
    icon: Lock,
    title: "Security by Default",
    description:
      "Security is baked in — not bolted on. Every project ships with hardened infrastructure, OWASP compliance, and regular audits.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description:
      "Architecture designed from the ground up to handle 10x growth. No rewrites, no surprises — just systems that scale.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "You get a dedicated pod — not a ticket queue. Senior engineers, a designer, and a PM fully aligned to your roadmap.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description:
      "Coverage across US, EU, and APAC time zones. Critical issues get 1-hour response SLAs, not next-day callbacks.",
  },
  {
    icon: Code2,
    title: "Clean Codebase",
    description:
      "You own everything. Fully documented, type-safe, and linted code delivered to your repository from day one.",
  },
];

// typed as any to avoid strict Variants typing issues with custom easing arrays
const containerVariants: any = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants: any = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_50%,rgba(59,130,246,0.07),transparent)]" />
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyprus-800/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-cyprus-800/40 text-xs text-[#93c5fd] font-mono tracking-wider uppercase mb-5">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              The Standard Others{" "}
              <span className="gradient-text">Measure Against</span>
            </h2>
            <p className="text-sand-500 text-lg leading-relaxed mb-8">
              We've spent years refining how digital products are built. The
              result: a process that's faster, safer, and more transparent than
              anything you've experienced before.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "50+", label: "Projects Shipped" },
                { val: "4.9★", label: "Average Rating" },
                { val: "0", label: "Missed Deadlines" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="glass rounded-xl p-4 text-center border border-cyprus-800/30"
                >
                  <div className="text-2xl font-bold text-sand-200 mb-1">
                    {val}
                  </div>
                  <div className="text-xs text-sand-600">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  variants={itemVariants}
                  className="glass glass-hover rounded-xl p-5 flex flex-col gap-3 group cursor-default"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyprus-800/40 flex items-center justify-center text-[#93c5fd] group-hover:bg-cyprus-800/60 transition-colors duration-300 border border-cyprus-700/30">
                    <Icon className="w-4 h-4" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-sand-200 font-semibold text-sm mb-1">
                      {f.title}
                    </h3>
                    <p className="text-sand-600 text-xs leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
