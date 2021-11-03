import React from "react";
import GoalSection from "../components/About/GoalSection";
import HeroSection from "../components/About/HeroSection";
import LocationSection from "../components/About/LocationSection";
import VisionMission from "../components/About/VisionMission";
import Gallery from "../components/About/Gallery";

const About = () => {
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
