import Hero from "../Components/Hero";
import { Statement } from "../Components/Statement";
import Products from "../Components/Products";

import { Technology } from "../Components/Technology";
import { ContactSection } from "../Components/ContactSection";
import FinalCTA from "../Components/FinalCTA";
import FeatureHighlight from "../Components/FeatureFocus";
import ScrollShowcase from "../Components/ScrollShowcase";
import Specs from "../Components/Specs";
import BlogSection from "@/Components/BlogSection";
import ProductRail from "@/Components/ProductRail";
export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Products />
      <ProductRail />
        <FeatureHighlight />
  <ScrollShowcase />

  <Specs />
      <Technology />

      <BlogSection />
      <ContactSection />
        <FinalCTA />
    </>
  );
}

