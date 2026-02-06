'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, MessageCircle } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  if (!product) return null;

  const calculateInstallment = (price: number) => {
    return (price / 12).toFixed(2);
  };

  const whatsappNumber = '5567992429385';
  const whatsappMessage = `Olá! Gostaria de saber mais sobre o plano: *${product.title}*`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-700" />
                </button>

                <div className="grid md:grid-cols-2">
                  {/* Left side - Image */}
                  <div className="relative h-64 md:h-auto bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-8">
                    <div className="text-8xl">
                      {product.category === 'landing' && '📄'}
                      {product.category === 'empresarial' && '🌐'}
                      {product.category === 'loja' && '🛒'}
                      {(product.category === 'gestao' || product.category === 'crm' || product.category === 'personalizado') && '⚙️'}
                    </div>
                  </div>

                  {/* Right side - Details */}
                  <div className="p-8 overflow-y-auto max-h-[80vh]">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      {product.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-4">
                      {product.subtitle}
                    </p>

                    {/* Price */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                      {product.promoPrice ? (
                        <>
                          <div className="text-sm text-gray-500 line-through">
                            De R$ {product.price.toFixed(2).replace('.', ',')}
                          </div>
                          <div className="text-3xl font-bold text-blue-600">
                            R$ {product.promoPrice.toFixed(2).replace('.', ',')}
                          </div>
                        </>
                      ) : (
                        <div className="text-3xl font-bold text-slate-900">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </div>
                      )}
                      <div className="text-sm text-gray-600 mt-1">
                        ou 12x de R$ {calculateInstallment(product.promoPrice || product.price).replace('.', ',')}
                      </div>
                    </div>

                    {/* Indicated for */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold text-slate-700 uppercase mb-2">
                        Indicado para:
                      </h3>
                      <p className="text-slate-600">{product.indicatedFor}</p>
                    </div>

                    {/* Pages (if applicable) */}
                    {product.pages && (
                      <div className="mb-6">
                        <h3 className="text-sm font-bold text-slate-700 uppercase mb-2">
                          Escopo:
                        </h3>
                        <p className="text-slate-600">{product.pages}</p>
                      </div>
                    )}

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold text-slate-700 uppercase mb-3">
                        Sugestões de páginas/funcionalidades:
                      </h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Extras (if applicable) */}
                    {product.extras && product.extras.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-sm font-bold text-slate-700 uppercase mb-3">
                          Extras disponíveis:
                        </h3>
                        <ul className="space-y-1 text-sm text-slate-600">
                          {product.extras.map((extra, index) => (
                            <li key={index}>• {extra}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA Button */}
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors uppercase"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Contratar pelo WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
