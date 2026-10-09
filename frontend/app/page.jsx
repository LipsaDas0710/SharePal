"use client";

import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import CategoryNav from "../components/layout/CategoryNav";
import Sidebar from "../components/catalog/Sidebar";
import GamingBanner from "../components/catalog/GamingBanner";
import PartnerBanner from "../components/catalog/PartnerBanner";
import GearBanner from "../components/catalog/GearBanner";
import ProductGrid from "../components/catalog/ProductGrid";
import RecommendationForm from "../components/catalog/RecommendationForm";

import FAQSection from "../components/content/FAQSection";
import ReviewsSection from "../components/content/ReviewsSection";
import ImpactStats from "../components/content/ImpactStats";

import Footer from "../components/layout/Footer";
import FloatingAction from "../components/layout/FloatingAction";



export default function HomePage() {

  const [visibleCount, setVisibleCount] = useState(12);
  const totalProducts = 55;

  return (
    <>
      <Navbar />
      <CategoryNav />
      <main className="catalog-layout">
        <Sidebar />
        <div className="catalog-content">
          <GamingBanner />
          <div className="catalog-heading">
            <h1>Gaming Gadgets On Rent</h1>
            <p><span>Total items:</span> 55 items</p>
          </div>
          <ProductGrid />
          <PartnerBanner />
          <ProductGrid start={4} end={8} />
          <GearBanner />
          <ProductGrid start={0} end={Math.min(4, visibleCount)} />

{visibleCount > 4 && <PartnerBanner />}

{visibleCount > 4 && (
  <ProductGrid
    start={4}
    end={Math.min(8, visibleCount)}
  />
)}

{visibleCount > 8 && <GearBanner />}

{visibleCount > 8 && (
  <ProductGrid
    start={8}
    end={Math.min(visibleCount, totalProducts)}
  />
)}

<div className="show-more-wrap">
  <p>
    Showing {Math.min(visibleCount, totalProducts)} of {totalProducts} results
  </p>

  {visibleCount < totalProducts && (
    <button
      className="show-more"
      type="button"
      onClick={() =>
        setVisibleCount((count) =>
          Math.min(count + 12, totalProducts)
        )
      }
    >
      Show More
    </button>
  )}
</div>
          <RecommendationForm />
        </div>
      </main>
      <FAQSection />
      <div className="breadcrumb"><span>Bangalore</span><b>›</b><strong>Gaming gadgets on rent</strong></div>
      <ReviewsSection />
      <ImpactStats />
      <Footer />
      <FloatingAction />
    </>
  );
}
