"use client"

import { motion } from "framer-motion"
import { Mic, Menu, X, Calendar } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import CallBtn from "../CallBtn/CallBtn"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Training", href: "#training" },
    { name: "Testimonials", href: "#success-stories" },
    // { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            <span className="p-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white">
              <Mic className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>
            <h3 className="font-bold text-sm lg:text-base">
              Speak<span className="text-white">10x</span>Better
            </h3>
          </motion.div>

          {/* Right Buttons */}
          <div className="flex items-center space-between space-x-1.5">
            <Link
              className="md:hidden flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-2 py-2 rounded-sm"
              href="https://calendly.com/ifezuejudith/freeconsultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-5 h-5 mr-2" />
              <span>Book Your Free Consultation</span>
            </Link>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <CallBtn />
            {navLinks.map(({ name, href }) => (
              <motion.a
                key={name}
                href={href}
                whileHover={{ scale: 1.1 }}
                className="text-white/80 hover:text-white transition-colors text-sm sm:text-base"
              >
                {name}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 border-t border-white/10 pt-4 space-y-2"
          >
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="block py-2 text-white/80 hover:text-white transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            ))}

            <Link
              href="https://calendly.com/ifezuejudith/freeconsultation"
              className="block py-2 text-white/80 hover:text-white transition-colors text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Your Free Consultation
            </Link>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
