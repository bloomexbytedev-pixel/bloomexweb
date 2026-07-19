import { useEffect, useRef } from "react";
import { useParams, useNavigate, Navigate, Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Smartphone,
  Bot,
  Shield,
  Layers,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Zap,
  ChevronRight,
  Code2,
  Database,
  Cpu,
  Palette,
  Server,
  Monitor,
  ShoppingCart,
  FileCode,
  RefreshCw,
  Play,
  Wifi,
  Bell,
  Eye,
  AlertTriangle,
  Figma,
  Layout,
  MousePointer,
  Sparkles,
  Users,
  Search,
  Bug,
  ShieldCheck,
  KeyRound,
  Radio,
  Network,
  BrainCircuit,
  Workflow,
  MessageSquare,
  LineChart,
  Target,
  Repeat,
  Layers2,
  Gauge,
} from "lucide-react";

export type ServiceSlug =
  | "web-development"
  | "mobile-apps"
  | "cloud-solutions"
  | "ai-automation"
  | "cybersecurity"
  | "product-design";

const serviceData: Record<
  ServiceSlug,
  {
    slug: ServiceSlug;
    icon: React.ElementType;
    title: string;
    subtitle: string;
    heroDescription: string;
    accent: string;
    accentLight: string;
    highlights: { icon: React.ElementType; label: string }[];
    features: {
      icon: React.ElementType;
      title: string;
      description: string;
      example: string;
    }[];
    technologies: { name: string; category: string }[];
    stats: { value: string; label: string }[];
    process: { step: string; title: string; description: string }[];
  }
> = {
  "web-development": {
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    subtitle: "That Drives Results",
    heroDescription:
      "We build fast, secure, responsive and scalable websites that deliver exceptional user experiences and help your business grow online. From landing pages to complex SaaS platforms.",
    accent: "#38bdf8",
    accentLight: "#7dd3fc",
    highlights: [
      { icon: CheckCircle, label: "Secure & Reliable" },
      { icon: Zap, label: "High Performance" },
      { icon: Monitor, label: "Fully Responsive" },
      { icon: Code2, label: "Clean Codebase" },
    ],
    features: [
      {
        icon: Palette,
        title: "Website Design",
        description:
          "We craft immersive digital environments that tell your brand's story. By combining striking aesthetics with smart user psychology, we design intuitive interfaces that leave a lasting impression and keep your audience coming back.",
        example: "Brand-led redesign that lifted session time by 55%.",
      },
      {
        icon: Monitor,
        title: "Front-End Development",
        description:
          "We bring static concepts to life with pixel-perfect, dynamic code. Our front-end architectures prioritize lightning-fast load times, fluid animations, and adaptable layouts that perform brilliantly on any screen size.",
        example: "98 Lighthouse performance score on a content-heavy platform.",
      },
      {
        icon: Server,
        title: "Back-End Development",
        description:
          "We build the invisible powerhouse behind your digital operations. From complex data management to secure API integrations, our custom server-side solutions are built to process heavy workloads smoothly, safely, and efficiently.",
        example: "API handling 50M monthly requests for a SaaS product.",
      },
      {
        icon: Layers2,
        title: "Full-Stack Development",
        description:
          "We connect the dots between visual brilliance and technical logic. Our complete, end-to-end development approach ensures that your user interface and server architecture work in perfect harmony to deliver a seamless platform.",
        example: "End-to-end SaaS platform shipped in 10 weeks.",
      },
      {
        icon: ShoppingCart,
        title: "E-Commerce Development",
        description:
          "We engineer digital marketplaces built for growth. By optimizing the entire buyer journey — from intuitive product discovery to secure, frictionless checkouts — we create scalable online stores that consistently drive sales.",
        example: "Online store achieving 3.8% conversion rate from day one.",
      },
      {
        icon: FileCode,
        title: "Custom Web App Development",
        description:
          "We transform complex business workflows into streamlined digital tools. Whether you need an internal management dashboard or a sophisticated customer portal, we build specialized software that automates tasks and boosts your productivity.",
        example:
          "Internal ops dashboard saving 30 hours of manual work weekly.",
      },
    ],
    technologies: [
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "MongoDB", category: "Database" },
      { name: "Vercel", category: "Hosting" },
    ],
    stats: [
      { value: "50+", label: "Websites Delivered" },
      { value: "99.9%", label: "Uptime Guaranteed" },
      { value: "< 2s", label: "Avg Load Time" },
      { value: "100%", label: "Mobile Optimized" },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Planning",
        description:
          "We analyze your goals, audience and competitors to create a solid blueprint.",
      },
      {
        step: "02",
        title: "Design & Prototype",
        description:
          "High-fidelity wireframes and interactive prototypes before a single line of code.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "Clean, well-structured code built with scalability and performance in mind.",
      },
      {
        step: "04",
        title: "QA & Launch",
        description:
          "Rigorous testing across devices, then a smooth deployment with zero downtime.",
      },
    ],
  },
  "mobile-apps": {
    slug: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Development",
    subtitle: "For Every Device",
    heroDescription:
      "Native and cross-platform mobile experiences on iOS and Android. We craft apps that feel at home on every device — fluid animations, intuitive UX, and rock-solid performance.",
    accent: "#22d3ee",
    accentLight: "#67e8f9",
    highlights: [
      { icon: Smartphone, label: "iOS & Android" },
      { icon: Zap, label: "Native Performance" },
      { icon: Wifi, label: "Offline Support" },
      { icon: Bell, label: "Push Notifications" },
    ],
    features: [
      {
        icon: Layout,
        title: "Mobile UI/UX Design",
        description:
          "We craft intuitive mobile experiences designed specifically for the tap, swipe, and scroll. By blending stunning visual aesthetics with mobile-first user psychology, we create engaging interfaces that keep users hooked and drive daily retention.",
        example: "Redesigned onboarding flow that cut drop-off by 62%.",
      },
      {
        icon: Smartphone,
        title: "iOS App Development",
        description:
          "We engineer premium digital experiences exclusively for the Apple ecosystem. Leveraging native iOS architecture, we build highly secure, lightning-fast applications that perform flawlessly and meet the strict standards of the App Store.",
        example: "Fintech app approved on first App Store submission.",
      },
      {
        icon: Play,
        title: "Android App Development",
        description:
          "We develop robust, dynamic applications for the world's most widely used mobile platform. From deep hardware integration to optimizing for a vast range of devices, we deliver Android apps that offer a seamless, native feel for every user.",
        example:
          "Delivery app running smoothly across 800+ Android device models.",
      },
      {
        icon: RefreshCw,
        title: "Cross-Platform Development",
        description:
          "We maximize your market reach with a single, powerful codebase. Using advanced frameworks, we deliver high-performance applications that look, feel, and function perfectly on both iOS and Android simultaneously, getting you to market faster.",
        example: "Launched on both platforms 40% faster than native builds.",
      },
      {
        icon: Database,
        title: "Mobile Backend Engineering",
        description:
          "We build the secure, cloud-based infrastructure that powers your mobile application from behind the scenes. From real-time data synchronization to complex API integrations, our custom back-ends ensure your app runs smoothly even under massive user loads.",
        example:
          "Backend sustaining 500k concurrent connections for a live-events app.",
      },
      {
        icon: Users,
        title: "Enterprise Mobile Solutions",
        description:
          "We transform complex operational workflows into powerful, on-the-go digital tools. Whether you need a secure internal workforce application or a sophisticated B2B management portal, we engineer custom mobile software that drives efficiency and empowers your team anywhere.",
        example: "Field-ops app used daily by 4,000 enterprise employees.",
      },
      {
        icon: ShoppingCart,
        title: "Mobile E-Commerce Development",
        description:
          "We engineer mobile-first marketplaces optimized for maximum conversion. By designing frictionless checkout flows, secure payment integrations, and highly personalized shopping journeys, we build scalable m-commerce platforms that turn casual scrollers into loyal buyers.",
        example: "Mobile store achieving a 4.1% add-to-cart conversion rate.",
      },
      {
        icon: Cpu,
        title: "Custom Mobile Applications",
        description:
          "We architect bespoke mobile solutions tailored to your unique business vision. Whether you are disrupting an industry or solving a highly specific consumer challenge, we engineer customized, feature-rich applications designed to give your brand a definitive competitive edge.",
        example: "Proprietary app that became the category leader in 8 months.",
      },
    ],
    technologies: [
      { name: "React Native", category: "Cross-Platform" },
      { name: "Flutter", category: "Cross-Platform" },
      { name: "Swift", category: "iOS" },
      { name: "Kotlin", category: "Android" },
      { name: "Firebase", category: "Backend" },
      { name: "Supabase", category: "Backend" },
      { name: "Expo", category: "Tooling" },
      { name: "Fastlane", category: "CI/CD" },
    ],
    stats: [
      { value: "80+", label: "Apps Published" },
      { value: "4.8★", label: "Avg App Rating" },
      { value: "10M+", label: "Users Served" },
      { value: "48h", label: "Avg Review Time" },
    ],
    process: [
      {
        step: "01",
        title: "Platform Strategy",
        description:
          "We define the right platform approach — native, cross-platform, or hybrid — based on your audience and budget.",
      },
      {
        step: "02",
        title: "UX & Prototyping",
        description:
          "Interactive prototypes validated with real users before development begins.",
      },
      {
        step: "03",
        title: "Agile Build",
        description:
          "Two-week sprints with demo deliveries so you see progress throughout.",
      },
      {
        step: "04",
        title: "Store Launch",
        description:
          "We handle App Store and Google Play submissions, metadata and ASO optimization.",
      },
    ],
  },
  "cloud-solutions": {
    slug: "cloud-solutions",
    icon: Search,
    title: "SEO Optimization",
    subtitle: "Rank. Reach. Convert.",
    heroDescription:
      "Technical SEO, on-page optimization, content planning and performance improvements that make your website easier to find, faster to use and stronger at converting traffic.",
    accent: "#34d399",
    accentLight: "#6ee7b7",
    highlights: [
      { icon: Search, label: "Technical SEO" },
      { icon: LineChart, label: "Ranking Growth" },
      { icon: Gauge, label: "Core Web Vitals" },
      { icon: Target, label: "Conversion Focused" },
    ],
    features: [
      {
        icon: Search,
        title: "Technical SEO Audit",
        description:
          "We identify crawl, indexing, speed, schema and architecture issues that hold your site back in search.",
        example: "Audit roadmap that fixed 120+ indexability issues.",
      },
      {
        icon: FileCode,
        title: "On-Page Optimization",
        description:
          "Titles, meta descriptions, headings, internal links and page structure refined for search intent and readability.",
        example: "Service pages rebuilt around high-intent keywords.",
      },
      {
        icon: Gauge,
        title: "Performance SEO",
        description:
          "Core Web Vitals, mobile speed and technical performance improvements that support rankings and user experience.",
        example: "LCP reduced from 4.8s to under 2s.",
      },
      {
        icon: Layout,
        title: "Content Strategy",
        description:
          "Search-driven content plans for landing pages, blogs and topic clusters that build authority over time.",
        example: "90-day content plan for a local service business.",
      },
      {
        icon: Eye,
        title: "Analytics & Tracking",
        description:
          "Search Console, GA4 and conversion tracking configured so improvements are measured clearly.",
        example: "Dashboard showing keyword, traffic and lead growth.",
      },
      {
        icon: Target,
        title: "Local SEO",
        description:
          "Google Business Profile, location pages and local signals optimized for area-based searches.",
        example: "Local pages built for city-level service visibility.",
      },
    ],
    technologies: [
      { name: "Google Search Console", category: "SEO" },
      { name: "GA4", category: "Analytics" },
      { name: "Ahrefs", category: "Research" },
      { name: "SEMrush", category: "Research" },
      { name: "Screaming Frog", category: "Audit" },
      { name: "PageSpeed Insights", category: "Performance" },
      { name: "Schema.org", category: "Structured Data" },
      { name: "Looker Studio", category: "Reporting" },
    ],
    stats: [
      { value: "120+", label: "SEO Audits" },
      { value: "2x", label: "Traffic Potential" },
      { value: "90d", label: "Growth Roadmap" },
      { value: "100%", label: "Tracked Results" },
    ],
    process: [
      {
        step: "01",
        title: "SEO Audit",
        description:
          "We review technical health, content gaps, competitors and search demand.",
      },
      {
        step: "02",
        title: "Keyword Strategy",
        description:
          "We map high-intent keywords to pages, content and conversion paths.",
      },
      {
        step: "03",
        title: "Optimization",
        description:
          "We implement on-page, technical, schema and speed improvements.",
      },
      {
        step: "04",
        title: "Report & Improve",
        description:
          "We track rankings, traffic and leads, then refine the next growth cycle.",
      },
    ],
  },
  "ai-automation": {
    slug: "ai-automation",
    icon: Bot,
    title: "AI Automation & Chatbots",
    subtitle: "Work Smarter, Not Harder",
    heroDescription:
      "LLM-powered workflows, intelligent agents, custom chatbots and ML pipelines that eliminate repetitive tasks, support customers 24/7 and surface actionable insights.",
    accent: "#a78bfa",
    accentLight: "#c4b5fd",
    highlights: [
      { icon: MessageSquare, label: "AI Chatbots" },
      { icon: Workflow, label: "Automated Workflows" },
      { icon: LineChart, label: "Predictive Insights" },
      { icon: Repeat, label: "Always On" },
    ],
    features: [
      {
        icon: MessageSquare,
        title: "AI Chatbots & Assistants",
        description:
          "Intelligent chatbots trained on your data that handle customer support, internal Q&A and lead qualification 24/7.",
        example:
          "Support bot that handles 80% of tier-1 tickets automatically.",
      },
      {
        icon: Workflow,
        title: "Workflow Automation",
        description:
          "End-to-end automation of complex business processes that previously required manual intervention at every step.",
        example: "Invoice processing workflow saving 40 hours per week.",
      },
      {
        icon: FileCode,
        title: "Document Intelligence",
        description:
          "AI pipelines that extract, classify and summarise information from documents, contracts and PDFs at scale.",
        example: "Contract analysis system processing 2M docs daily.",
      },
      {
        icon: BrainCircuit,
        title: "Custom ML Models",
        description:
          "Bespoke machine learning models trained on your data for classification, prediction, recommendation and anomaly detection.",
        example: "Churn prediction model achieving 91% accuracy.",
      },
      {
        icon: Target,
        title: "AI-Powered Personalisation",
        description:
          "Recommendation engines and dynamic content systems that adapt to each user's behaviour in real-time.",
        example: "28% uplift in conversion for an e-commerce client.",
      },
      {
        icon: LineChart,
        title: "Analytics & Reporting",
        description:
          "Automated analytics pipelines and natural-language reporting so insights reach the right people instantly.",
        example: "Auto-generated weekly executive reports from raw data.",
      },
    ],
    technologies: [
      { name: "OpenAI GPT-4", category: "LLM" },
      { name: "Claude", category: "LLM" },
      { name: "LangChain", category: "Orchestration" },
      { name: "LlamaIndex", category: "Orchestration" },
      { name: "Python", category: "Language" },
      { name: "FastAPI", category: "Backend" },
      { name: "Pinecone", category: "Vector DB" },
      { name: "Airflow", category: "Pipelines" },
    ],
    stats: [
      { value: "40h+", label: "Saved Per Week" },
      { value: "99.7%", label: "Pipeline Accuracy" },
      { value: "5x", label: "Team Productivity" },
      { value: "< 5mo", label: "Avg Delivery" },
    ],
    process: [
      {
        step: "01",
        title: "Process Audit",
        description:
          "We map your workflows to identify the highest-value automation opportunities.",
      },
      {
        step: "02",
        title: "Proof of Concept",
        description:
          "A rapid prototype proves the AI solution works on your real data before full investment.",
      },
      {
        step: "03",
        title: "Build & Integrate",
        description:
          "Production-grade pipelines with monitoring, fallbacks and human-in-the-loop where needed.",
      },
      {
        step: "04",
        title: "Train & Iterate",
        description:
          "Continuous fine-tuning and feedback loops ensure the system improves over time.",
      },
    ],
  },
  cybersecurity: {
    slug: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity",
    subtitle: "Defence That Never Sleeps",
    heroDescription:
      "Proactive security audits, penetration testing and hardened infrastructure to protect your most valuable digital assets. We find the vulnerabilities before the attackers do.",
    accent: "#f59e0b",
    accentLight: "#fbbf24",
    highlights: [
      { icon: ShieldCheck, label: "Penetration Testing" },
      { icon: Eye, label: "24/7 Monitoring" },
      { icon: KeyRound, label: "Zero Trust" },
      { icon: AlertTriangle, label: "Incident Response" },
    ],
    features: [
      {
        icon: Bug,
        title: "Penetration Testing",
        description:
          "Simulated real-world attacks on your web apps, APIs, mobile apps and network to find exploitable vulnerabilities before attackers do.",
        example: "Full-scope pentest for a fintech company pre-launch.",
      },
      {
        icon: Search,
        title: "Security Audits & Code Review",
        description:
          "Comprehensive review of your codebase, configuration and dependencies to surface security flaws and technical debt.",
        example: "Audit revealing 12 critical issues in a healthcare API.",
      },
      {
        icon: Network,
        title: "Network Security",
        description:
          "Firewall configuration, network segmentation, VPN setup and intrusion detection to lock down your perimeter.",
        example: "Zero-trust network redesign for a 500-seat enterprise.",
      },
      {
        icon: Radio,
        title: "SOC 2 & Compliance",
        description:
          "We help you achieve and maintain SOC 2, ISO 27001, GDPR and HIPAA compliance with policies, tooling and evidence collection.",
        example: "SOC 2 Type II readiness in 90 days for a SaaS startup.",
      },
      {
        icon: Eye,
        title: "Continuous Monitoring",
        description:
          "Real-time threat detection, log analysis and alerting so suspicious activity is caught and contained immediately.",
        example: "SIEM setup that caught an insider threat within hours.",
      },
      {
        icon: AlertTriangle,
        title: "Incident Response",
        description:
          "When a breach occurs, our team is ready to contain the damage, investigate the root cause and harden defences.",
        example: "Ransomware recovery with < 4 hour containment time.",
      },
    ],
    technologies: [
      { name: "Burp Suite", category: "Pentest" },
      { name: "Metasploit", category: "Pentest" },
      { name: "Nessus", category: "Scanning" },
      { name: "OWASP ZAP", category: "Scanning" },
      { name: "Splunk", category: "SIEM" },
      { name: "CrowdStrike", category: "EDR" },
      { name: "Vault", category: "Secrets" },
      { name: "Cloudflare", category: "WAF" },
    ],
    stats: [
      { value: "500+", label: "Vulnerabilities Found" },
      { value: "< 4h", label: "Incident Response" },
      { value: "100%", label: "Compliance Rate" },
      { value: "0", label: "Post-Audit Breaches" },
    ],
    process: [
      {
        step: "01",
        title: "Threat Modelling",
        description:
          "We identify your attack surface, critical assets and most likely threat vectors.",
      },
      {
        step: "02",
        title: "Active Testing",
        description:
          "Hands-on ethical hacking — no automated scanner blindly clicking buttons.",
      },
      {
        step: "03",
        title: "Detailed Reporting",
        description:
          "Clear findings with CVSS scores, business impact and actionable remediation steps.",
      },
      {
        step: "04",
        title: "Remediation & Retest",
        description:
          "We verify every fix is correctly implemented before signing off the engagement.",
      },
    ],
  },
  "product-design": {
    slug: "product-design",
    icon: Layers,
    title: "UI/UX",
    subtitle: "Simple. Smooth. Useful.",
    heroDescription:
      "User interface and experience design for websites, mobile apps and dashboards. We shape clear flows, polished screens and design systems that make products easier to use.",
    accent: "#f472b6",
    accentLight: "#f9a8d4",
    highlights: [
      { icon: Users, label: "User Research" },
      { icon: Layout, label: "Design Systems" },
      { icon: MousePointer, label: "Prototyping" },
      { icon: Sparkles, label: "Micro-interactions" },
    ],
    features: [
      {
        icon: Users,
        title: "UX Research & Strategy",
        description:
          "Interviews, usability tests, competitor analysis and persona development to ground every design decision in evidence.",
        example: "Research sprint that reshaped a B2B product's IA entirely.",
      },
      {
        icon: Layout,
        title: "Wireframing & Information Architecture",
        description:
          "Low and mid-fidelity wireframes that map every user flow and screen state before visual design begins.",
        example: "40-screen wireframe for a complex SaaS dashboard.",
      },
      {
        icon: Figma,
        title: "UI Design",
        description:
          "Polished, pixel-perfect screens in Figma with thorough component libraries, variants and interaction annotations.",
        example: "Full UI for a mobile fintech app in 3 weeks.",
      },
      {
        icon: MousePointer,
        title: "Interactive Prototypes",
        description:
          "Clickable prototypes that simulate real app behaviour — perfect for stakeholder demos and usability testing.",
        example: "Prototype used to close a $2M enterprise deal.",
      },
      {
        icon: Sparkles,
        title: "Design Systems",
        description:
          "Scalable component libraries with tokens, documentation and handoff specs so your product stays consistent as it grows.",
        example: "Design system covering 200+ components for a SaaS platform.",
      },
      {
        icon: Palette,
        title: "Visual Polish",
        description:
          "Colour, typography, spacing and component styling refined so the interface feels clean, consistent and credible.",
        example: "Dashboard UI refresh that made key workflows easier to scan.",
      },
    ],
    technologies: [
      { name: "Figma", category: "Design" },
      { name: "Framer", category: "Prototyping" },
      { name: "Principle", category: "Animation" },
      { name: "Lottie", category: "Animation" },
      { name: "Storybook", category: "Components" },
      { name: "Zeroheight", category: "Docs" },
      { name: "Maze", category: "Testing" },
      { name: "Hotjar", category: "Analytics" },
    ],
    stats: [
      { value: "200+", label: "UI Screens Designed" },
      { value: "4.9/5", label: "Client Satisfaction" },
      { value: "60%", label: "Avg Task Success Lift" },
      { value: "2 wks", label: "Sprint Turnaround" },
    ],
    process: [
      {
        step: "01",
        title: "Research & Discovery",
        description:
          "Deep dives into your users, business goals and market to build a rock-solid design strategy.",
      },
      {
        step: "02",
        title: "Concept & Wireframes",
        description:
          "Multiple design directions explored quickly, then refined based on stakeholder feedback.",
      },
      {
        step: "03",
        title: "High-Fidelity & Prototype",
        description:
          "Full visual design with interactive prototypes ready for usability testing.",
      },
      {
        step: "04",
        title: "Handoff & Support",
        description:
          "Developer-ready specs, assets and a design system so implementation is seamless.",
      },
    ],
  },
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: smoothEase },
  }),
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const featuresRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-80px",
  });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!slug || !serviceData[slug as ServiceSlug]) {
    return <Navigate to="/" replace />;
  }

  const service = serviceData[slug as ServiceSlug];
  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(240,237,228,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(240,237,228,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: `${service.accent}18` }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ background: `${service.accent}10` }}
        />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          {/* Breadcrumb */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-2 text-sm text-sand-600 mb-10"
          >
            <Link
              to="/"
              className="flex items-center gap-1.5 hover:text-sand-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
            <span className="text-sand-500">Services</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
            <span style={{ color: service.accentLight }}>{service.title}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-7">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.05}
                className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full glass border text-xs font-mono tracking-wider uppercase"
                style={{
                  borderColor: `${service.accent}40`,
                  color: service.accentLight,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: service.accent }}
                />
                Our Services
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.1}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight"
              >
                {service.title}{" "}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${service.accent}, ${service.accentLight})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {service.subtitle}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
                className="text-sand-500 text-lg leading-relaxed max-w-lg"
              >
                {service.heroDescription}
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.28}
                className="flex flex-wrap gap-3"
              >
                {service.highlights.map(({ icon: HIcon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm text-sand-400"
                    style={{ borderColor: `${service.accent}20` }}
                  >
                    <HIcon
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: service.accentLight }}
                    />
                    {label}
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.35}
                className="flex items-center gap-3 pt-2"
              >
                <button
                  onClick={() =>
                    navigate("/", { state: { scrollTo: "#contact" } })
                  }
                  className="group flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 shadow-xl hover:-translate-y-0.5 border border-[#f0ede4]/10 text-[#060810]"
                  style={{
                    background: `linear-gradient(135deg, ${service.accent}, ${service.accentLight})`,
                  }}
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() =>
                    featuresRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center gap-2 px-6 py-3 glass glass-hover text-sand-400 hover:text-sand-200 font-semibold rounded-xl transition-all hover:-translate-y-0.5"
                >
                  See What's Included
                </button>
              </motion.div>
            </div>

            {/* Stats card grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: smoothEase,
              }}
              className="grid grid-cols-2 gap-4"
            >
              {service.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="glass rounded-2xl p-6 flex flex-col gap-2 relative overflow-hidden"
                  style={{ borderColor: `${service.accent}20` }}
                >
                  <div
                    className="absolute top-0 left-0 w-24 h-24 rounded-full blur-3xl pointer-events-none"
                    style={{ background: `${service.accent}12` }}
                  />
                  <span
                    className="text-3xl font-bold tracking-tight"
                    style={{ color: service.accentLight }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-sand-600 text-sm">{stat.label}</span>
                </motion.div>
              ))}

              {/* Large visual icon */}
              <div
                className="col-span-2 glass rounded-2xl p-6 flex items-center gap-5 relative overflow-hidden"
                style={{ borderColor: `${service.accent}20` }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 20% 50%, ${service.accent}10, transparent 70%)`,
                  }}
                />
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 relative"
                  style={{
                    background: `${service.accent}18`,
                    border: `1px solid ${service.accent}30`,
                  }}
                >
                  <Icon
                    className="w-8 h-8"
                    style={{ color: service.accentLight }}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <div className="text-sand-200 font-semibold text-lg">
                    {service.title}
                  </div>
                  <div className="text-sand-600 text-sm mt-1">
                    Enterprise-grade solutions, startup speed
                  </div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: service.accent }}
                    />
                    <span
                      className="text-xs font-mono"
                      style={{ color: service.accentLight }}
                    >
                      Available now
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What's Included ──────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden" ref={featuresRef}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_50%,rgba(59,130,246,0.06),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border text-xs font-mono tracking-wider uppercase mb-4"
              style={{
                borderColor: `${service.accent}40`,
                color: service.accentLight,
              }}
            >
              What's Included
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything You Need to{" "}
              <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-sand-500 text-lg max-w-xl mx-auto">
              A comprehensive set of capabilities, all under one roof.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((feature, i) => {
              const FIcon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.08,
                    ease: smoothEase,
                  }}
                  className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4 group"
                  style={{ ["--hover-accent" as string]: service.accent }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: `${service.accent}18`,
                      color: service.accentLight,
                    }}
                  >
                    <FIcon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-sand-200 font-semibold text-base mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sand-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-3 border-t border-[#f0ede4]/[0.06]">
                    <span
                      className="text-xs font-mono"
                      style={{ color: `${service.accentLight}99` }}
                    >
                      Example:{" "}
                    </span>
                    <span className="text-xs text-sand-600">
                      {feature.example}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Technologies ─────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div
            className="glass rounded-2xl p-8 md:p-10"
            style={{ borderColor: `${service.accent}20` }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <div
                  className="text-xs font-mono tracking-wider uppercase mb-2"
                  style={{ color: service.accentLight }}
                >
                  Tech Stack
                </div>
                <h3 className="text-2xl font-bold text-sand-200">
                  Technologies We Use
                </h3>
              </div>
              <p className="text-sand-600 text-sm max-w-xs">
                Best-in-class tools selected for performance, reliability and
                developer experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  style={{ borderColor: `${service.accent}20` }}
                >
                  <span className="text-sand-300 font-medium">{tech.name}</span>
                  <span
                    className="px-2 py-0.5 rounded text-xs font-mono"
                    style={{
                      background: `${service.accent}18`,
                      color: service.accentLight,
                    }}
                  >
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden" ref={processRef}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_60%,rgba(59,130,246,0.06),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border text-xs font-mono tracking-wider uppercase mb-4"
              style={{
                borderColor: `${service.accent}40`,
                color: service.accentLight,
              }}
            >
              How We Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our <span className="gradient-text">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden"
                style={{ borderColor: `${service.accent}20` }}
              >
                <div
                  className="absolute top-0 right-0 text-7xl font-black pointer-events-none leading-none pr-4 pt-2 select-none"
                  style={{ color: `${service.accent}08` }}
                >
                  {step.step}
                </div>
                <div
                  className="text-4xl font-black tracking-tight"
                  style={{ color: service.accent, opacity: 0.4 }}
                >
                  {step.step}
                </div>
                <div>
                  <h3 className="text-sand-200 font-semibold text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sand-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="w-5 h-5 text-sand-700" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${service.accent}12, transparent)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-12 md:p-16"
            style={{ borderColor: `${service.accent}25` }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{
                background: `${service.accent}20`,
                border: `1px solid ${service.accent}40`,
              }}
            >
              <Icon
                className="w-8 h-8"
                style={{ color: service.accentLight }}
                strokeWidth={1.5}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to get started with{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${service.accent}, ${service.accentLight})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {service.title}?
              </span>
            </h2>
            <p className="text-sand-500 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Let's talk about your project. We'll scope it, price it, and get
              you a proposal within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() =>
                  navigate("/", { state: { scrollTo: "#contact" } })
                }
                className="group flex items-center gap-2 px-8 py-4 font-semibold rounded-xl transition-all duration-300 shadow-xl hover:-translate-y-0.5 text-[#060810]"
                style={{
                  background: `linear-gradient(135deg, ${service.accent}, ${service.accentLight})`,
                }}
              >
                Get a Free Proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/"
                className="flex items-center gap-2 px-8 py-4 glass glass-hover text-sand-400 hover:text-sand-200 font-semibold rounded-xl transition-all hover:-translate-y-0.5"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export { serviceData };
