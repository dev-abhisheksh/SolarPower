import React, { useState } from 'react';
import { RiWhatsappLine, RiCloseLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { name: "Aman Dubey", role: "Support & Queries", phone: "917219730511" },
    { name: "Reshma Naik", role: "Sales & Details", phone: "917719039958" }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Contact Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-72 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="bg-green-500 text-white p-5">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <RiWhatsappLine size={24} /> Chat with us
              </h4>
              <p className="text-sm opacity-90 mt-1">Usually replies instantly.</p>
            </div>
            <div className="p-4 space-y-3">
              {contacts.map((contact, i) => (
                <a
                  key={i}
                  href={`https://wa.me/${contact.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-gray-700 rounded-2xl transition-colors group border border-transparent hover:border-green-100 dark:hover:border-green-900"
                >
                  <div className="w-10 h-10 bg-green-100 dark:bg-gray-700 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <RiWhatsappLine size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white text-sm">{contact.name}</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{contact.role}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip (only show when closed and on hover of the container) */}
      {!isOpen && (
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs py-2 px-3 rounded-lg opacity-0 transition-opacity whitespace-nowrap pointer-events-none hidden md:block group-hover:opacity-100">
          Chat with us
          <div className="absolute top-1/2 -translate-y-1/2 left-full border-[6px] border-transparent border-l-gray-900"></div>
        </div>
      )}

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-[0_10px_25px_-5px_rgba(34,197,94,0.5)] text-3xl focus:outline-none"
      >
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-green-500 rounded-full opacity-40 pointer-events-none"
          />
        )}
        {isOpen ? <RiCloseLine /> : <RiWhatsappLine />}
      </motion.button>
    </div>
  );
};

export default WhatsAppFloat;
