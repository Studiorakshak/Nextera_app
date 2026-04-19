"use client";

import React, { useState, useMemo } from 'react';
import { Package, ArrowRight, Search, Filter } from 'lucide-react';
import ProductModal from '../components/ProductModal';
import { cn } from '../utils/cn';

const categories = ['All', 'Cleaners', 'Fresheners', 'Hand Care'];

const products = [
  { 
    id: 'n1', 
    name: 'NEXTERRA N-1 Tile Cleaner', 
    category: 'Cleaners',
    image: '/assets/images/Product/n1-tile-cleaner.png',
    description: 'Powerful acid-based cleaner formulated to remove limescale, watermarks, rust stains, and soap scum from taps, tiles, sinks, and bathroom fittings. Restores original shine while ensuring hygienic cleanliness.',
    features: ['Acid-based formula for deep descaling', 'Eliminates mineral deposits & hard water stains', 'Restores shine to taps, tiles & fixtures', 'Ideal for hospitals, hotels & commercial washrooms']
  },
  { 
    id: 'n2', 
    name: 'NEXTERRA N-2 Hygienic Hard Surface Cleaner', 
    category: 'Cleaners',
    image: '/assets/images/Product/n2-floor-cleaner.png',
    description: 'High-performance hygienic hard surface cleaner designed for streak-free daily maintenance of all hard surfaces including marble, granite, vitrified tiles and mosaic floors.',
    features: ['Neutral pH formula safe for all surfaces', 'Quick-drying & streak-free finish', 'Powerful degreasing action', 'Fresh long-lasting fragrance']
  },
  { 
    id: 'n3', 
    name: 'NEXTERRA N-3 Glass Cleaner', 
    category: 'Cleaners',
    image: '/assets/images/Product/n3-glass-cleaner.png',
    description: 'Professional-grade glass cleaner that removes fingerprints, dust, and grime without leaving residue or streaks. Crystal-clear results on glass, mirrors, and transparent surfaces.',
    features: ['Ammonia-free formula', 'Anti-static finish repels dust', 'Streak-free crystal clarity', 'Safe on electronic screens & glass surfaces']
  },
  { 
    id: 'n5-floral', 
    name: 'NEXTERRA N-5 Room Freshener – Floral', 
    category: 'Fresheners',
    image: '/assets/images/Product/n5-room-freshener-floral.png',
    description: 'Premium floral room freshener that neutralizes odors and creates a welcoming, refreshing atmosphere. Enriched with natural floral extracts for a soothing ambience in commercial spaces.',
    features: ['Odor-neutralizing technology', 'Premium natural floral scent', 'Non-staining formula', 'Long-lasting freshness up to 8 hours']
  },
  { 
    id: 'n5-blend', 
    name: 'NEXTERRA N-5 Room Freshener – Blend', 
    category: 'Fresheners',
    image: '/assets/images/Product/n5-room-freshener-blend.png',
    description: 'Aromatic blend room freshener combining exotic fragrance notes for a warm, inviting atmosphere. Perfect for hotels, offices, and premium commercial environments.',
    features: ['Unique multi-note fragrance blend', 'Neutralizes tough odors effectively', 'Safe for use in air-conditioned spaces', 'Economical 5L institutional pack']
  },
  { 
    id: 'n6', 
    name: 'NEXTERRA N-6 Toilet Cleaner', 
    category: 'Cleaners',
    image: '/assets/images/Product/n6-toilet-cleaner.png',
    description: 'Thick gel formula that clings to bowl surfaces to remove tough stains, limescale, and disinfect 99.9% of germs. Leaves toilets sparkling clean with a fresh fragrance.',
    features: ['Thick gel cling technology', 'Removes limescale & rust stains', 'Disinfects & deodorizes effectively', 'Septic-safe formula']
  },
  { 
    id: 'n7', 
    name: 'NEXTERRA N-7 Multipurpose Cleaner', 
    category: 'Cleaners',
    image: '/assets/images/Product/n7-multipurpose-cleaner.png',
    description: 'Versatile all-purpose cleaner for counters, walls, and washable surfaces. Concentrated formula effectively tackles grease, grime, and everyday dirt on any surface.',
    features: ['Highly concentrated formula', 'Safe on most hard surfaces', 'Superior degreasing action', 'Economical bulk use – 5L pack']
  },
  { 
    id: 'nh8-lemon', 
    name: 'NEXTERRA NH-8 Hand Wash – Lemon', 
    category: 'Hand Care',
    image: '/assets/images/Product/nh8-hand-wash-lemon.png',
    description: 'Gentle yet effective lemon-scented hand wash that cleanses and moisturizes skin while eliminating 99.9% of germs. Enriched with lemon extracts for a refreshing clean.',
    features: ['Natural lemon extract formula', 'Kills 99.9% germs', 'pH-balanced & moisturizing', 'WCMEIT certified quality']
  },
  { 
    id: 'nh8-rose', 
    name: 'NEXTERRA NH-8 Hand Wash – Rose', 
    category: 'Hand Care',
    image: '/assets/images/Product/nh8-hand-wash-rose.png',
    description: 'Luxurious rose-scented hand wash enriched with rose extracts for a soothing, aromatic cleansing experience. Gentle on skin while providing powerful germ protection.',
    features: ['Natural rose extract formula', 'Kills 99.9% germs effectively', 'Soft & moisturizing on skin', 'Premium fragrance experience']
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-white dark:bg-black pt-28 pb-24 md:py-32 transition-colors min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-gray-900 dark:text-white mb-4 md:mb-6">
            Our <span className="text-primary">Solutions.</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Engineered for performance, designed for the planet. Explore our full range of professional hygiene products.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12 md:mb-16 bg-gray-50 dark:bg-neutral-900 p-4 md:p-6 rounded-3xl md:rounded-[2rem] border border-gray-100 dark:border-gray-800">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-white dark:bg-black text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group relative bg-white dark:bg-neutral-900 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 transition-all hover:scale-[1.02] hover:shadow-2xl border border-gray-100 dark:border-gray-800 cursor-pointer animate-slide-up flex flex-col"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square mb-6 md:mb-8 relative overflow-hidden rounded-2xl md:rounded-3xl bg-gray-50 dark:bg-black flex items-center justify-center p-6 md:p-12">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    onError={e => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400?text=Nexterra+Product';
                    }}
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest">
                    {product.category}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 md:line-clamp-2 mb-6 md:mb-8 leading-relaxed flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center text-primary font-bold text-sm mt-auto">
                  View Details <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <Package size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-xl text-gray-500 dark:text-gray-400">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Products;