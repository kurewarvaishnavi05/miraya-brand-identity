"use client";

import HeroBanner from "@/components/home/HeroBanner";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import ExploreByOccasion from "@/components/home/ExploreByOccasion";
import BestSeller from "@/components/home/BestSeller";
import NewArrivals from "@/components/home/NewArrivals";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CustomerReviews from "@/components/home/CustomerReviews";
import InstagramGallery from "@/components/home/InstagramGallery";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <HeroBanner />
      <FeaturedCategories />
      <ExploreByOccasion />
      <BestSeller />
      <NewArrivals />
      <WhyChooseUs />
      <CustomerReviews />
      <InstagramGallery />
      <Newsletter />
    </div>
  );
}
