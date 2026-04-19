import React, { useState, useEffect } from 'react';
import { cn } from '../utils/cn';
import { ArrowRight, Shield, Zap, Leaf, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const slides = [
    {
      image: '/assets/images/banner.jpg',
      title: '',
      caption: ''
    },
    {
      image: '/assets/images/banner1.jpg',
      title: '',
      caption: ''
    },
    {
      image: '/assets/images/banner2.jpg',
      title: '',
      caption: ''
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-black transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-24 md:pt-32">
        <div className="z-10 max-w-5xl mt-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6 animate-slide-up">
            Hygiene. <br />
            <span className="text-gray-400 dark:text-gray-500">Perfected.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:200ms]">
            Nexterra delivers the next generation of professional cleaning solutions. Engineered for performance, designed for the planet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-slide-up [animation-delay:400ms]">
            <Link
              to="/products"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold text-base transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="group flex items-center gap-2 text-primary dark:text-blue-400 font-semibold text-base hover:underline"
            >
              Get a Quote <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Premium Slideshow – fully responsive */}
        <div className="mt-8 md:mt-12 w-full max-w-6xl relative group animate-fade-in [animation-delay:600ms]">
          <div className="relative w-full aspect-[2.5/1] md:aspect-[3/1] lg:aspect-[3.5/1] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl dark:shadow-primary/10 bg-gray-100 dark:bg-gray-900">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-1000",
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <img
                  src={slide.image}
                  alt={`Nexterra Banner ${index + 1}`}
                  className="w-full h-full object-contain md:object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-2 md:p-8 z-20 pointer-events-none">
            <button
              onClick={prevSlide}
              className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition-all"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition-all"
            >
              ›
            </button>
          </div>

          {/* Progress Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 cursor-pointer shadow-sm",
                    i === currentSlide ? "bg-primary w-6 md:w-8" : "bg-black/30 dark:bg-white/30 hover:bg-primary/50"
                  )}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-32 px-4 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 group text-center">
              <div className="text-primary transition-transform duration-500 group-hover:scale-110"><Shield size={40} /></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Uncompromising Safety</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our formulas are rigorously tested to ensure maximum efficacy while maintaining the highest safety standards.
              </p>
            </div>
            <div className="space-y-4 group text-center">
              <div className="text-primary transition-transform duration-500 group-hover:scale-110"><Zap size={40} /></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Peak Performance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Engineered with advanced chemical technology to tackle the toughest industrial grime and institutional hygiene challenges.
              </p>
            </div>
            <div className="space-y-4 group text-center">
              <div className="text-primary transition-transform duration-500 group-hover:scale-110"><Leaf size={40} /></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Sustainable Future</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe in clean spaces and a clean planet. Our products are biodegradable and designed to minimize environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions in Action */}
      <section className="py-20 md:py-40 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
              <Sparkles size={16} /> Solutions in Action
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Trusted in every environment.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-8 relative group overflow-hidden rounded-2xl md:rounded-3xl h-[250px] md:h-auto md:min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Corporate Office"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-bold uppercase tracking-widest mb-1">Corporate</p>
                <h4 className="text-xl font-bold">Modern Workspaces</h4>
              </div>
            </div>
            <div className="md:col-span-4 relative group overflow-hidden rounded-2xl md:rounded-3xl h-[250px] md:h-auto md:min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                alt="Healthcare"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-bold uppercase tracking-widest mb-1">Healthcare</p>
                <h4 className="text-xl font-bold">Sterile Environments</h4>
              </div>
            </div>
            <div className="md:col-span-4 relative group overflow-hidden rounded-2xl md:rounded-3xl h-[250px] md:h-auto md:min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
                alt="Hospitality"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-bold uppercase tracking-widest mb-1">Hospitality</p>
                <h4 className="text-xl font-bold">Luxury Hotels</h4>
              </div>
            </div>
            <div className="md:col-span-8 relative group overflow-hidden rounded-2xl md:rounded-3xl h-[250px] md:h-auto md:min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                alt="Industrial"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-bold uppercase tracking-widest mb-1">Industrial</p>
                <h4 className="text-xl font-bold">Manufacturing Units</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white mb-8">
            Ready to elevate your standards?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-gray-900 dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index; // ✅ default export resolves TS1192