import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Mail, MapPin } from "lucide-react";
import { supabase } from "../lib/supabase";

const services = [
  "Web Development",
  "Mobile Apps",
  "SEO Optimization",
  "AI Automation & Chatbots",
  "Cybersecurity",
  "UI/UX",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";
interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.service ||
      !form.message
    )
      return;
    setStatus("loading");
    setErrorMsg("");

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: form.name,
            email: form.email,
            service: form.service,
            message: form.message,
          },
        ]);
      if (dbError) throw dbError;

      // Send email notification
      const res = await fetch(
        "https://bloomexmail.onrender.com/api/v1/notifications/email/inquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            subject: form.service,
            message: form.message,
          }),
        },
      );

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        console.warn(
          "Email notification failed:",
          err?.error || res.statusText,
        );
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "w-full bg-[#f0ede4]/[0.04] border border-[#f0ede4]/[0.08] rounded-xl px-4 py-3 text-sand-200 placeholder:text-sand-700 text-sm focus:outline-none focus:border-cyprus-700/60 focus:bg-[#f0ede4]/[0.06] transition-all duration-200";

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(59,130,246,0.1),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-cyprus-800/40 text-xs text-[#93c5fd] font-mono tracking-wider uppercase mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Ready to <span className="gradient-text">Build Something</span>{" "}
            Great?
          </h2>
          <p className="text-sand-500 text-lg max-w-xl mx-auto">
            Tell us about your project. We'll get back to you within 24 hours
            with a plan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass rounded-2xl p-6 flex flex-col gap-6">
              <div>
                <h3 className="text-sand-200 font-semibold text-lg mb-2">
                  Let's Talk
                </h3>
                <p className="text-sand-500 text-sm leading-relaxed">
                  Whether you have a fully scoped project or just an idea, we'd
                  love to hear from you.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Mail,
                    label: "Email Us",
                    value: "info@bloomexbyte.com",
                  },
                  {
                    icon: MapPin,
                    label: "Offices",
                    value: "India",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyprus-800/40 border border-cyprus-700/30 flex items-center justify-center text-[#93c5fd] flex-shrink-0">
                      <Icon className="w-4 h-4" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-xs text-sand-700 mb-0.5">
                        {label}
                      </div>
                      <div className="text-sand-400 text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-5 flex flex-col gap-3">
              <p className="text-xs text-sand-700 uppercase font-mono tracking-wider">
                Response SLA
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Initial response", val: "< 2 hours" },
                  { label: "Discovery call", val: "Within 24 hrs" },
                  { label: "Proposal ready", val: "< 3 business days" },
                ].map(({ label, val }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-sand-600">{label}</span>
                    <span className="text-[#93c5fd] font-mono text-xs">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-7 md:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#3b82f6]/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#3b82f6]" />
                  </div>
                  <h3 className="text-sand-200 font-semibold text-xl">
                    Message Received!
                  </h3>
                  <p className="text-sand-500 text-sm max-w-xs">
                    Thanks for reaching out. You'll hear back from our team
                    within 2 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 px-5 py-2.5 text-sm font-medium bg-cyprus-800 hover:bg-cyprus-700 text-sand-300 rounded-xl transition-all border border-[#f0ede4]/10"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-sand-200 font-semibold text-lg mb-1">
                    Start a Conversation
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-sand-600 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Alex Johnson"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-sand-600 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="alex@company.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-sand-600 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="9876543210"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-sand-600 font-medium">
                      Service Interested In
                    </label>
                    <select
                      value={form.service}
                      onChange={set("service")}
                      required
                      className={`${inputClass} cursor-pointer`}
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#060810]">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-sand-600 font-medium">
                      Project Details
                    </label>
                    <textarea
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Tell us about your project, timeline, and goals..."
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-rose-400 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {errorMsg}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex items-center justify-center gap-2.5 px-6 py-3.5 bg-cyprus-800 hover:bg-cyprus-700 disabled:bg-cyprus-800/50 text-sand-300 font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyprus-800/30 hover:shadow-cyprus-700/40 hover:-translate-y-0.5 disabled:hover:translate-y-0 border border-[#f0ede4]/10"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-sand-400/30 border-t-sand-300 rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
