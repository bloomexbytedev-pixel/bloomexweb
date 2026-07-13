import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Jack Thompson",
    role: "Client, E-commerce",
    rating: 5,
    text: "We had a truly great experience working with Bloomexbyte on our new project. They built a highly stable e-commerce store that never slows down when traffic spikes, and the beautifully intuitive design has noticeably improved our daily checkout completion rates.",
    tag: "E-Commerce",
  },
  {
    name: "Sarah Lin",
    role: "Client, Enterprise Software Solutions",
    rating: 5,
    text: "We were under a lot of pressure to launch fast. They took the challenge head-on and worked around the clock to get everything done ahead of schedule. To our surprise, they even optimized our database as a bonus without charging extra and added a custom reporting dashboard we didn't even know we needed.",
    tag: "Enterprise",
  },
  {
    name: "Priya Desai",
    role: "Client, Finance",
    rating: 5,
    text: "We wanted a clean finance website, and they really delivered. The custom SIP and lumpsum calculators they built work flawlessly with the interactive charts. Plus, the new blog setup is exactly what we needed to share market updates. Highly recommend this team!",
    tag: "Finance",
  },
  {
    name: "Jessica Miller",
    role: "Client, Tenant Management App",
    rating: 5,
    text: "They built our property app from the ground up, and the new rent collection process is a total game-changer. They added a seamless WhatsApp API integration that automatically sends a text to tenants when rent is due, so we never have to chase anyone down anymore.",
    tag: "Property",
  },
  {
    name: "Ryan Gallagher",
    role: "Client, Travel & Tours",
    rating: 5,
    text: "They set up our travel portal from the ground up and honestly, it's been a game-changer. It easily handles thousands of daily searches for our tour packages, and our users keep saying how smooth the booking checkout is. They absolutely nailed it.",
    tag: "Travel",
  },
  {
    name: "Dr. Alan Peterson",
    role: "Client, Healthcare",
    rating: 5,
    text: "We partnered with their team to create a custom appointment system for our medical center. They coded a fantastic, secure platform that lets patients find open slots instantly. It has drastically cut down our daily phone volume, and the final product exceeded our expectations.",
    tag: "Healthcare",
  },
  {
    name: "Ethan Walker",
    role: "Client, Hotel Booking",
    rating: 5,
    text: "We needed a custom booking site for our new resorts, and they built it completely from scratch. It handles heavy traffic without freezing up, and the mobile checkout they designed is super easy for our guests to use.",
    tag: "Hotel",
  },
  {
    name: "Mia Svensson",
    role: "Client, Massage Booking Portal",
    rating: 5,
    text: "They developed a custom web app for our day spa, and the result is fantastic. Guests can easily secure their preferred massage treatments on their phones, and the automated text confirmations have practically eliminated our no-shows. Truly a great investment for our business.",
    tag: "Wellness",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

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
                  aria-label={`Show review ${i + 1}`}
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111827]/[0.64] text-sm font-semibold text-sand-100 ring-1 ring-white/10">
                    {getInitials(review.name)}
                  </div>
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
