import React from 'react';
import { RiWhatsappLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
        <div className="absolute top-1/2 -translate-y-1/2 left-full border-[6px] border-transparent border-l-gray-900"></div>
      </div>

      {/* Pulsing Background */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-green-500 rounded-full opacity-40"
      ></motion.div>

      {/* Main Button */}
      <motion.a
        href="https://wa.me/917219730511"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative block w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center text-3xl"
      >
        <RiWhatsappLine />
      </motion.a>
    </div>
  );
};

export default WhatsAppFloat;
