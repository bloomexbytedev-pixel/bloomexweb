import { Routes, Route } from "react-router-dom";
import Navbar from "./componenets/Navebar";
import Footer from "./componenets/Footer";
import HomePage from "./pages/HomePage";
import ServicePage from "./componenets/ServicePage";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#060810] text-[#f0ede4] overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.25),transparent)]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(96,165,250,0.07),transparent)]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
