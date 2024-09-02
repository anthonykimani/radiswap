"use client";

import About from "@/components/landing-page/About";
import Features from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";
import HeroSection from "@/components/landing-page/HeroSection";
import Navbar from "@/components/landing-page/Navbar";
import RoadMap from "@/components/landing-page/RoadMap";
import Team from "@/components/landing-page/Team";

export default function Home() {
  return (
    <main className="bg-[#0A0E1D] text-white">
        <Navbar />
        <HeroSection />
        <About />
        <Features />
        <RoadMap />
        <Team />
        <Footer />
    </main>
  );
}
