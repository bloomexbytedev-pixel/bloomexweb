import { Github, Twitter, Linkedin } from "lucide-react";

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
          fill="url(#petal1f)"
        />
        <path
          d="M28 16C28 16 24 20 20 20C17.79 20 16 18.21 16 16C16 13.79 17.79 12 20 12C24 12 28 16 28 16Z"
          fill="url(#petal2f)"
        />
        <path
          d="M16 28C16 28 12 24 12 20C12 17.79 13.79 16 16 16C18.21 16 20 17.79 20 20C20 24 16 28 16 28Z"
          fill="url(#petal3f)"
        />
        <path
          d="M4 16C4 16 8 12 12 12C14.21 12 16 13.79 16 16C16 18.21 14.21 20 12 20C8 20 4 16 4 16Z"
          fill="url(#petal4f)"
        />
      </g>
      <circle cx="16" cy="8" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="24" cy="16" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="16" cy="24" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="8" cy="16" r="1.5" fill="currentColor" opacity="0.7" />
      <defs>
        <linearGradient
          id="petal1f"
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
          id="petal2f"
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
          id="petal3f"
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
          id="petal4f"
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

const links = {
  Company: ["About", "Careers", "Blog", "Press"],
  Services: [
    "Web Development",
    "Mobile Apps",
    "Cloud Solutions",
    "AI Automation",
  ],
  Resources: ["Documentation", "Case Studies", "API Reference", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[#f0ede4]/[0.06] pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(59,130,246,0.08),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-14">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyprus-800 border border-[#f0ede4]/10 flex items-center justify-center shadow-lg shadow-cyprus-800/40">
                <BloomLogo className="w-5 h-5 text-[#93c5fd]" />
              </div>
              <span className="text-sand-300 font-semibold text-lg tracking-tight">
                Bloom<span className="text-[#3b82f6]">exbyte</span>
              </span>
            </div>
            <p className="text-sand-700 text-sm leading-relaxed max-w-xs">
              Crafting digital experiences that blossom into success. Your
              vision, our expertise, limitless growth.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-sand-700 hover:text-sand-300 hover:bg-[#f0ede4]/[0.08] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sand-300 font-semibold text-sm mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <button className="text-sand-700 hover:text-sand-400 text-sm transition-colors text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#f0ede4]/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sand-700 text-xs">
            © 2024 Bloomexbyte. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-sand-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
