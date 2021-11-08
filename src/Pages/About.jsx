import React, { useEffect } from "react";
import GoalSection from "../components/About/GoalSection";
import HeroSection from "../components/About/HeroSection";
import LocationSection from "../components/About/LocationSection";
import VisionMission from "../components/About/VisionMission";
import Gallery from "../components/About/Gallery";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <HeroSection />
      <VisionMission />
      <LocationSection />
      <GoalSection />
      <Gallery />
    </div>
  );
};

export default About;
