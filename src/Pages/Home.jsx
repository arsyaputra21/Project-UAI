import React, { useEffect } from "react";
import FeaturePage from "../components/Home/FeaturePage";
import LandingPage from "../components/Home/LandingPage";
import AboutSection from "../components/Home/AboutSection";
import ProductsSection from "../components/Home/ProductsSection";
import TeamSection from "../components/Home/TeamSection";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <LandingPage />
      <FeaturePage />
      <AboutSection />
      <ProductsSection />
      <TeamSection />
    </>
  );
};

export default Home;
