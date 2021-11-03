import React from "react";
import FeaturePage from "../components/Home/FeaturePage";
import LandingPage from "../components/Home/LandingPage";
import AboutSection from "../components/Home/AboutSection";
import ProductsSection from "../components/Home/ProductsSection";
import TeamSection from "../components/Home/TeamSection";

const Home = () => {
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
