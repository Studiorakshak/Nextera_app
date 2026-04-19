import React from 'react';
import { X, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';

interface ProductModalProps {
  product: {
    name: string;
    image: string;
    description: string;
    features: string[];
  } | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  if (!product) return null;

  const whatsappMsg = encodeURIComponent(`I'm interested in ${product.name}. Please share more details.`);
  const whatsappUrl = `https://wa.me/919497436336?text=${whatsappMsg}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-gray-900 w-full max-w-4xl rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl animate-slide-up relative flex flex-col md:flex-row max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors z-20"
        >
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 bg-gray-50 dark:bg-gray-800 p-6 md:p-8 flex items-center justify-center relative overflow-hidden h-64 md:h-auto flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <img 
            src={product.image} 
            alt={product.name}
            className="relative z-10 max-w-full max-h-full object-contain drop-shadow-2xl"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600?text=Nexterra+Product';
            }}
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-6 md:p-12 overflow-y-auto">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
            Institutional Care
          </span>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            {product.name}
          </h2>
          
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-4 mb-10">
            <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
              Key Features
            </h4>
            <div className="grid gap-3">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Only WhatsApp Enquiry button, full width */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 rounded-2xl font-bold transition-all shadow-xl shadow-green-500/20 hover:-translate-y-1"
          >
            <MessageCircle size={20} /> WhatsApp Enquiry
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;