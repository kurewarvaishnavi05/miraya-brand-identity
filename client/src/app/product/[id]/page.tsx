import React from 'react';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductTabs from '@/components/product/ProductTabs';
import SimilarProducts from '@/components/product/SimilarProducts';
import { ChevronRight } from 'lucide-react';

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  
  // Mock images for the gallery
  const images = [
    '/categories/lehenga-v4.png',
    '/categories/saree-v4.png',
    '/categories/kurti-v4.png',
    '/categories/anarkali-v4.png',
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-miraya-white pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full">
        <div className="flex items-center text-sm text-miraya-black/60">
          <span>Home</span>
          <ChevronRight size={14} className="mx-2" />
          <span>Shop</span>
          <ChevronRight size={14} className="mx-2" />
          <span>Lehenga</span>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-miraya-black font-medium">Midnight Velvet Bridal Lehenga</span>
        </div>
      </div>

      {/* Main Product Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Gallery */}
          <div className="w-full lg:w-1/2">
            <ProductGallery images={images} />
          </div>

          {/* Right: Info & Actions */}
          <div className="w-full lg:w-1/2 flex flex-col lg:sticky lg:top-24 h-max">
            <ProductInfo id={params.id} />
            <ProductTabs />
          </div>
        </div>
      </div>

      {/* Frequently Bought Together Bundle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full border-t border-miraya-black/10 dark:border-miraya-white/10">
         <h2 className="text-2xl font-serif mb-8 text-miraya-black dark:text-miraya-white">Frequently Bought Together</h2>
         <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-miraya-black/5 dark:bg-miraya-white/5 border border-miraya-black/10 dark:border-miraya-white/10">
            <div className="flex items-center gap-4">
               <img src="/categories/lehenga-v4.png" className="w-24 h-32 object-cover rounded-md" alt="Item 1" />
               <span className="text-3xl text-miraya-black/50 dark:text-miraya-white/50">+</span>
               <img src="/hero-banner.png" className="w-24 h-32 object-cover rounded-md" alt="Item 2" />
            </div>
            <div className="flex-1 md:pl-8">
               <p className="text-lg font-medium text-miraya-black dark:text-miraya-white">Bridal Set: Lehenga & Matching Jewellery</p>
               <p className="text-miraya-black/60 dark:text-miraya-white/60 mb-4 text-sm">Save 15% when you buy these items together.</p>
               <div className="flex items-center gap-4">
                  <span className="text-2xl font-serif text-miraya-black dark:text-miraya-white">₹1,65,000</span>
                  <span className="text-miraya-black/40 line-through">₹1,95,000</span>
               </div>
            </div>
            <button className="px-8 py-4 bg-miraya-black dark:bg-miraya-white text-miraya-white dark:text-miraya-black uppercase tracking-widest text-sm font-medium hover:bg-miraya-gold dark:hover:bg-miraya-gold hover:text-miraya-white transition-colors rounded-md w-full md:w-auto">
               Add Bundle
            </button>
         </div>
      </div>

      {/* Recommended Section */}
      <SimilarProducts />

      {/* Recently Viewed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full border-t border-miraya-black/10 dark:border-miraya-white/10 mb-20">
         <h2 className="text-2xl font-serif mb-8 text-miraya-black dark:text-miraya-white">Recently Viewed</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1,2,3,4].map(item => (
              <div key={item} className="group relative aspect-[3/4] overflow-hidden rounded-xl">
                 <div className="absolute inset-0 bg-miraya-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                 <img src={`/categories/saree-v4.png`} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" alt="Recent item" />
                 <div className="absolute bottom-4 left-4 z-20">
                    <p className="text-miraya-white font-medium drop-shadow-md">Velvet Saree {item}</p>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
