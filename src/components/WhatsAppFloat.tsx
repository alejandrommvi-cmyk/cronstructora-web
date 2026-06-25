'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/34600000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-[#F5A623] text-[#0F0E0E] w-14 h-14 flex items-center justify-center shadow-xl shadow-[#F5A623]/20 hover:bg-[#F7B84B] transition-colors duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={22} fill="white" />
      <motion.span
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        className="absolute -top-1 -right-1 w-3 h-3 bg-[#0F0E0E] rounded-full"
      />
    </motion.a>
  )
}
