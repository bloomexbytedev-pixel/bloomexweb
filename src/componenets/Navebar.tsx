import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";

function BloomLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="4" fill="currentColor" />
      <g opacity="0.9">
        <path
          d="M16 4C16 4 20 8 20 12C20 14.21 18.21 16 16 16C13.79 16 12 14.21 12 12C12 8 16 4 16 4Z"
          fill="url(#petal1)"
        />
        <path
          d="M28 16C28 16 24 20 20 20C17.79 20 16 18.21 16 16C16 13.79 17.79 12 20 12C24 12 28 16 28 16Z"
          fill="url(#petal2)"
        />
        <path
          d="M16 28C16 28 12 24 12 20C12 17.79 13.79 16 16 16C18.21 16 20 17.79 20 20C20 24 16 28 16 28Z"
          fill="url(#petal3)"
        />
        <path
          d="M4 16C4 16 8 12 12 12C14.21 12 16 13.79 16 16C16 18.21 14.21 20 12 20C8 20 4 16 4 16Z"
          fill="url(#petal4)"
        />
      </g>
      <circle cx="16" cy="8" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="24" cy="16" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="16" cy="24" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="8" cy="16" r="1.5" fill="currentColor" opacity="0.7" />
      <defs>
        <linearGradient
          id="petal1"
          x1="12"
          y1="4"
          x2="20"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient
          id="petal2"
          x1="28"
          y1="12"
          x2="16"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#93c5fd" />
        </linearGradient>
        <linearGradient
          id="petal3"
          x1="20"
          y1="28"
          x2="12"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient
          id="petal4"
          x1="4"
          y1="20"
          x2="16"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#93c5fd" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const links = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isServicePage = location.pathname.startsWith("/services/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleNav = (href: string) => {
    setOpen(false);
    if (isServicePage) {
      navigate("/", { state: { scrollTo: href } });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#060810]/80 backdrop-blur-xl border-b border-[#f0ede4]/[0.06] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-cyprus-800 border border-[#f0ede4]/10 flex items-center justify-center shadow-lg shadow-cyprus-800/40 group-hover:shadow-cyprus-700/60 transition-shadow">
              <BloomLogo className="w-5 h-5 text-[#93c5fd]" />
            </div>
            <span className="text-sand-300 font-semibold text-lg tracking-tight">
              Bloom<span className="text-[#3b82f6]">exbyte</span>
            </span>
          </Link>

          {isServicePage ? (
            <div className="hidden md:flex items-center gap-2">
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 text-sm text-sand-500 hover:text-sand-300 rounded-lg hover:bg-[#f0ede4]/[0.06] transition-all duration-200"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Home
              </Link>
            </div>
          ) : (
            <ul className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="px-4 py-2 text-sm text-sand-500 hover:text-sand-300 rounded-lg hover:bg-[#f0ede4]/[0.06] transition-all duration-200"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNav("#contact")}
              className="px-4 py-2 text-sm font-medium bg-cyprus-800 hover:bg-cyprus-700 text-sand-300 rounded-lg transition-all duration-200 shadow-lg shadow-cyprus-800/30 border border-[#f0ede4]/10"
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden p-2 text-sand-500 hover:text-sand-300 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-[#060810]/95 backdrop-blur-xl border-l border-[#f0ede4]/[0.06] flex flex-col pt-24 px-6 pb-8 md:hidden"
          >
            {isServicePage ? (
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-3 text-sand-400 hover:text-sand-200 hover:bg-[#f0ede4]/[0.06] rounded-lg transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            ) : (
              <ul className="flex flex-col gap-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <button
                      onClick={() => handleNav(l.href)}
                      className="w-full text-left px-4 py-3 text-sand-400 hover:text-sand-200 hover:bg-[#f0ede4]/[0.06] rounded-lg transition-all"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => handleNav("#contact")}
              className="mt-6 px-4 py-3 text-sm font-medium bg-cyprus-800 hover:bg-cyprus-700 text-sand-300 rounded-lg transition-all border border-[#f0ede4]/10"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
