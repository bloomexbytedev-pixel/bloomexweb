import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Chen",
    role: "CTO, Luminary Health",
    avatar:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Bloomexbyte rebuilt our entire patient data platform in 10 weeks. The code quality, HIPAA compliance, and team communication were all exceptional. They didn't just build what we asked — they challenged our assumptions and delivered something far better.",
    tag: "Healthcare",
  },
  {
    name: "Marcus Williams",
    role: "Founder, TradeFlow",
    avatar:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "We brought Bloomexbyte in for a 3-month engagement and they fundamentally changed how we think about our tech stack. The AI automation workflows alone saved us 40+ hours per week. These aren't just developers — they're strategic partners.",
    tag: "FinTech",
  },
  {
    name: "Elena Petrova",
    role: "VP Product, Axiom Labs",
    avatar:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "After two failed agencies, I was skeptical. Bloomexbyte proved every doubt wrong. Deadlines were hit every single sprint, the design was exceptional, and the code is the cleanest I've reviewed in years. We're on our third project with them.",
    tag: "SaaS",
  },
  {
    name: "James Okafor",
    role: "CEO, Orbit Commerce",
    avatar:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Our e-commerce platform needed to handle 50k concurrent users during Black Friday. Bloomexbyte delivered a cloud architecture that handled 3x that load without breaking a sweat. The monitoring and alerting setup has been invaluable.",
    tag: "E-Commerce",
  },
  {
    name: "Priya Sharma",
    role: "Head of Engineering, Nexus AI",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "The AI pipeline Bloomexbyte built processes over 2 million documents daily with 99.7% accuracy. What would have taken our internal team 18 months was delivered in under 5 months. Extraordinary execution.",
    tag: "AI/ML",
  },
];

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + reviews.length) % reviews.length);
  };

  const visibleCount = 3;
  const visible = Array.from(
    { length: visibleCount },
    (_, i) => reviews[(current + i) % reviews.length],
  );

  return (
    <section id="reviews" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_80%,rgba(59,130,246,0.07),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-cyprus-800/40 text-xs text-[#93c5fd] font-mono tracking-wider uppercase mb-4">
              Client Stories
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center text-sand-600 hover:text-sand-300 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 24 : 6,
                    background:
                      i === current ? "#3b82f6" : "rgba(240,237,228,0.2)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center text-sand-600 hover:text-sand-300 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 overflow-hidden">
          <AnimatePresence mode="popLayout" custom={direction}>
            {visible.map((review, i) => (
              <motion.div
                key={`${review.name}-${current}-${i}`}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60, scale: 0.95 }}
                animate={{ opacity: i === 0 ? 1 : 0.65, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -direction * 60, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass glass-hover rounded-2xl p-6 flex flex-col gap-5"
              >
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-[#f0a040] text-[#f0a040]"
                    />
                  ))}
                </div>
                <p className="text-sand-500 text-sm leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-[#f0ede4]/[0.06]">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-cyprus-700/40"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sand-300 font-semibold text-sm">
                      {review.name}
                    </div>
                    <div className="text-sand-700 text-xs truncate">
                      {review.role}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md glass border border-[#f0ede4]/[0.07] text-sand-700 text-xs font-mono flex-shrink-0">
                    {review.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
