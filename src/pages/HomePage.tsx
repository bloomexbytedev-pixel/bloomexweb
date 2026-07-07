import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../componenets/Hero";
import Services from "../componenets/Services";
import WhyUs from "../componenets/WhyUs";
import Process from "../componenets/Process";
import Reviews from "../componenets/Review";
import Contact from "../componenets/Contact";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      const attempt = (tries: number) => {
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
        if (tries > 0) setTimeout(() => attempt(tries - 1), 120);
      };
      attempt(8);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.state]);

  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Reviews />
      <Contact />
    </main>
  );
}
