import React from 'react';
import CategoryHero from '@/components/category/CategoryHero';
import FilterSidebar from '@/components/category/FilterSidebar';
import ProductCard from '@/components/ui/ProductCard';
import { categoryData } from '@/lib/categoryData';
import { notFound } from 'next/navigation';
import { ChevronRight, Filter } from 'lucide-react';

// Using mock data for prototyping the luxury UI
const mockProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: `mock-${i + 1}`,
  name: `Premium Designer Piece ${i + 1}`,
  price: 75000 + (i * 5000),
  image: [
    '/categories/lehenga-v4.png',
    '/categories/saree-v4.png',
    '/categories/kurti-v4.png',
    '/categories/anarkali-v4.png',
    '/categories/sharara-v4.png',
    '/categories/salwar-v4.png',
    '/categories/gown-v4.png',
    '/categories/coord-v3.png',
  ][i % 8],
  isNew: i < 3,
  discount: i === 4 ? 15 : undefined,
}));

export default async function CategoryPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const data = categoryData[params.slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-miraya-white pt-20">
      <CategoryHero 
        title={data.title} 
        description={data.description} 
        image={data.heroImage} 
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Breadcrumb & Occasion Tags */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-8 border-b border-miraya-black/10">
          <div className="flex items-center text-sm text-miraya-black/60 mb-4 md:mb-0">
            <span>Home</span>
            <ChevronRight size={14} className="mx-2" />
            <span>Category</span>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-miraya-black font-medium">{data.title}</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-serif italic text-miraya-black/70 mr-2">Best For:</span>
            {data.bestFor.map(tag => (
              <span key={tag} className="px-4 py-1 bg-miraya-burgundy/5 border border-miraya-burgundy/10 rounded-full text-xs font-medium text-miraya-burgundy">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Mobile Filter Button */}
          <button className="lg:hidden flex items-center justify-center gap-2 w-full py-3 border border-miraya-black/20 font-medium tracking-wide uppercase text-sm">
            <Filter size={18} /> Show Filters
          </button>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Product Grid Area */}
          <div className="flex-1">
            {/* Top Bar (Sorting & Results) */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm text-miraya-black/60">Showing 1-12 of 48 products</span>
              
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-miraya-black uppercase tracking-widest hidden sm:block">Sort By</label>
                <select className="border border-miraya-black/20 bg-transparent py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-miraya-gold cursor-pointer">
                  <option>Newest Arrivals</option>
                  <option>Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Sub-collection Pills */}
            <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
              {data.subCollections.map(sub => (
                <button key={sub} className="whitespace-nowrap px-6 py-2 border border-miraya-black/20 rounded-full text-sm hover:border-miraya-gold hover:text-miraya-gold transition-colors">
                  {sub}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {mockProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="w-10 h-10 border border-miraya-black/20 flex items-center justify-center hover:bg-miraya-black hover:text-miraya-white transition-colors">
                  1
                </button>
                <button className="w-10 h-10 border border-miraya-black/5 bg-miraya-black text-miraya-white flex items-center justify-center">
                  2
                </button>
                <button className="w-10 h-10 border border-miraya-black/20 flex items-center justify-center hover:bg-miraya-black hover:text-miraya-white transition-colors">
                  3
                </button>
                <span className="px-2">...</span>
                <button className="w-10 h-10 border border-miraya-black/20 flex items-center justify-center hover:bg-miraya-black hover:text-miraya-white transition-colors">
                  <ChevronRight size={18} />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
