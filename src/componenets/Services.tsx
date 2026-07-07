import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cloud,
  Bot,
  Shield,
  Layers,
  ArrowRight,
} from "lucide-react";
import type { ServiceSlug } from "./ServicePage";

const services: {
  icon: typeof Globe;
  title: string;
  slug: ServiceSlug;
  description: string;
  tags: string[];
  accent: string;
  peekColor: string;
}[] = [
  {
    icon: Globe,
    slug: "web-development",
    title: "Web Development",
    description:
      "High-performance web applications built with modern frameworks — React, Next.js, and beyond. Pixel-perfect UIs that convert.",
    tags: ["React", "Next.js", "TypeScript"],
    accent: "#3b82f6",
    peekColor: "#3b82f6",
  },
  {
    icon: Smartphone,
    slug: "mobile-apps",
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile experiences on iOS and Android. React Native and Flutter apps that feel at home on every device.",
    tags: ["React Native", "Flutter", "Swift"],
    accent: "#60a5fa",
    peekColor: "#60a5fa",
  },
  {
    icon: Cloud,
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description:
      "Scalable, resilient cloud architecture on AWS, GCP, and Azure. Infrastructure as code, zero-downtime deployments, and auto-scaling.",
    tags: ["AWS", "Terraform", "Kubernetes"],
    accent: "#f0ede4",
    peekColor: "#d6cfc0",
  },
  {
    icon: Bot,
    slug: "ai-automation",
    title: "AI Automation",
    description:
      "LLM-powered workflows, intelligent agents, and ML pipelines that eliminate repetitive tasks and surface actionable insights.",
    tags: ["GPT-4", "LangChain", "Python"],
    accent: "#3b82f6",
    peekColor: "#3b82f6",
  },
  {
    icon: Shield,
    slug: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Proactive security audits, penetration testing, and hardened infrastructure to protect your most valuable digital assets.",
    tags: ["Pen Testing", "SOC 2", "Zero Trust"],
    accent: "#60a5fa",
    peekColor: "#60a5fa",
  },
  {
    icon: Layers,
    slug: "product-design",
    title: "Product Design",
    description:
      "End-to-end product design: user research, wireframing, prototyping, and design systems built for handoff and consistency.",
    tags: ["Figma", "Framer", "Design Systems"],
    accent: "#f0ede4",
    peekColor: "#d6cfc0",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const smoothEase = [0.22, 1, 0.36, 1] as const;
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

function PeekingBot({ color, hovered }: { color: string; hovered: boolean }) {
  return (
    <motion.div
      className="absolute -bottom-1 -right-3 z-20 pointer-events-none select-none"
      initial={false}
      animate={hovered ? { y: -28, rotate: -8 } : { y: 14, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <svg width="52" height="60" viewBox="0 0 52 60" fill="none">
        <rect
          x="10"
          y="26"
          width="32"
          height="28"
          rx="8"
          fill={color}
          fillOpacity="0.15"
          stroke={color}
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />
        <rect
          x="2"
          y="36"
          width="10"
          height="6"
          rx="3"
          fill={color}
          fillOpacity="0.4"
          stroke={color}
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />
        <rect
          x="40"
          y="36"
          width="10"
          height="6"
          rx="3"
          fill={color}
          fillOpacity="0.4"
          stroke={color}
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />
        <rect
          x="13"
          y="8"
          width="26"
          height="22"
          rx="7"
          fill={color}
          fillOpacity="0.2"
          stroke={color}
          strokeWidth="1.8"
          strokeOpacity="0.7"
        />
        <motion.circle
          cx="21"
          cy="19"
          r="3.5"
          fill={color}
          animate={
            hovered ? { r: 4, fillOpacity: 1 } : { r: 3.5, fillOpacity: 0.9 }
          }
          transition={{ duration: 0.2 }}
        />
        <motion.circle
          cx="31"
          cy="19"
          r="3.5"
          fill={color}
          animate={
            hovered ? { r: 4, fillOpacity: 1 } : { r: 3.5, fillOpacity: 0.9 }
          }
          transition={{ duration: 0.2 }}
        />
        <circle cx="22.5" cy="17.5" r="1" fill="white" fillOpacity="0.8" />
        <circle cx="32.5" cy="17.5" r="1" fill="white" fillOpacity="0.8" />
        <line
          x1="26"
          y1="8"
          x2="26"
          y2="2"
          stroke={color}
          strokeWidth="1.5"
          strokeOpacity="0.7"
        />
        <circle cx="26" cy="1.5" r="2" fill={color} fillOpacity="0.9" />
        <motion.path
          d={hovered ? "M 19 26 Q 26 31 33 26" : "M 19 27 Q 26 27 33 27"}
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          strokeOpacity="0.9"
          animate={{
            d: hovered ? "M 19 26 Q 26 31 33 26" : "M 19 27 Q 26 27 33 27",
          }}
          transition={{ duration: 0.25 }}
        />
        <rect
          x="16"
          y="50"
          width="8"
          height="10"
          rx="3"
          fill={color}
          fillOpacity="0.25"
        />
        <rect
          x="28"
          y="50"
          width="8"
          height="10"
          rx="3"
          fill={color}
          fillOpacity="0.25"
        />
      </svg>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 4 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-8 -left-20 whitespace-nowrap text-xs font-semibold px-2.5 py-1 rounded-lg"
            style={{
              background: `${color}18`,
              border: `1px solid ${color}44`,
              color,
              backdropFilter: "blur(8px)",
            }}
          >
            Explore service →
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_50%,rgba(59,130,246,0.08),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-cyprus-800/40 text-xs text-[#93c5fd] font-mono tracking-wider uppercase mb-4">
            What We Build
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-sand-500 text-lg max-w-xl mx-auto leading-relaxed">
            Six core disciplines, one unified team. We own the full stack so you
            can focus on what matters.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            const hovered = hoveredIndex === i;
            return (
              <motion.div
                key={s.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <Link
                  to={`/services/${s.slug}`}
                  className="block relative glass glass-hover rounded-2xl p-6 flex flex-col gap-4 cursor-pointer shadow-xl overflow-visible"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${s.accent}10, transparent 70%)`,
                    }}
                  />

                  <PeekingBot color={s.peekColor} hovered={hovered} />

                  <div
                    className="relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ background: `${s.accent}14`, color: s.accent }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>

                  <div className="relative flex flex-col gap-2">
                    <h3 className="text-sand-200 font-semibold text-lg">
                      {s.title}
                    </h3>
                    <p className="text-sand-600 text-sm leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  <div className="relative flex items-center justify-between mt-auto pt-2">
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-[#f0ede4]/[0.04] border border-[#f0ede4]/[0.07] text-sand-600 text-xs font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <motion.div
                      animate={
                        hovered ? { x: 0, opacity: 1 } : { x: -6, opacity: 0 }
                      }
                      transition={{ duration: 0.2 }}
                      className="ml-3 flex-shrink-0"
                    >
                      <ArrowRight
                        className="w-4 h-4"
                        style={{ color: s.accent }}
                      />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
