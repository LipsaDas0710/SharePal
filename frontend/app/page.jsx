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
          <ProductGrid start={8} end={12} />
          <div className="show-more-wrap">
            <p>Showing 12 of 55 results</p>
            <button className="show-more" type="button">Show More</button>
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
