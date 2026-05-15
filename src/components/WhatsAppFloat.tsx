import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { DIGITAL_MENU_CONTENT } from '../content';

export const WhatsAppFloat = () => {
  const { BRAND } = DIGITAL_MENU_CONTENT;

  return (
    <motion.a
      href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#22c35e] transition-colors"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
      </span>
    </motion.a>
  );
};
