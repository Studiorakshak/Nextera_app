import React from 'react';
import { Target, Eye, ShieldCheck, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-500">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6 md:mb-8 animate-slide-up">
            Our Story.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed animate-slide-up [animation-delay:200ms]">
            At AVENTRA ENTERPRISES, we are redefining cleaning and hygiene solutions with our premium brand, NEXTERRA. We specialize in high-performance cleaning chemicals, housekeeping tools, and garbage bags.
          </p>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-16 md:py-32 px-4 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                With a commitment to quality, cost-effectiveness, and innovation, we ensure businesses maintain world-class hygiene standards with products that are both powerful and economical.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                <Eye size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To become the go-to brand for hygiene solutions in India's commercial sector, expanding our reach across Tier-1, Tier-2, and rural markets while maintaining eco-friendly innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-40 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              What defines us.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              { icon: Award, title: "Quality First", desc: "We never compromise on the efficacy of our products, ensuring they meet the highest standards." },
              { icon: Globe, title: "Eco-Conscious", desc: "Our commitment to the planet drives us to create biodegradable and sustainable solutions." },
              { icon: Users, title: "Customer Centric", desc: "We build lasting partnerships by providing expert consultancy and 24/7 support." }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="flex justify-center text-primary">
                  <value.icon size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 md:py-40 px-4 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-12 md:mb-20">
            Industries we serve.
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Hospitality", "Healthcare", "Corporate", "Industrial", "Commercial"].map((industry) => (
              <div key={industry} className="px-10 py-6 bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 text-xl font-semibold text-gray-900 dark:text-white">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;