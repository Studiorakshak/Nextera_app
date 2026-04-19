import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-gray-900 dark:text-white pt-16 md:pt-24 pb-8 md:pb-12 border-t border-gray-100 dark:border-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tighter">NEXTERRA</h3>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              Redefining professional hygiene with performance-driven solutions.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Contact</h4>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0 text-primary" />
                <p>aventraenterprises@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0 text-primary" />
                <p>+91 94974-36336</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Location</h4>
            <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
              <MapPin size={18} className="mt-1 flex-shrink-0 text-primary" />
              <p className="leading-relaxed">
                0 Back Side Saini High School,<br />
                Kaithal, Haryana 136027, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 pt-8 border-t border-gray-100 dark:border-gray-900 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Nexterra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;