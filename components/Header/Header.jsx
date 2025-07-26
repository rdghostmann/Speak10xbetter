"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Menu, X, Mic } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
           <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
    >
      <span className="p-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white">
        <Mic className="w-5 h-5" />
      </span>
    
    </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {["About", "Training", "Testimonials", "FAQ"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-white/80 hover:text-white transition-colors text-sm sm:text-base"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            {/* CTA Button – Visible on all sizes */}
            <Button
              asChild
              className="hidden sm:inline text-xs sm:text-sm px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0"
            >
              <a
                href="https://calendly.com/ifezuejudith/freeconsultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Free Call</span>
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 border-t border-white/10 pt-4"
          >
            {["About", "Training", "Testimonials", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-white/80 hover:text-white transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
