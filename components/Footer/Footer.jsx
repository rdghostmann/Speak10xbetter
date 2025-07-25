"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, MessageCircle, Linkedin, Twitter, Instagram, Mic } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer className="py-20 px-4 border-t border-white/10" ref={ref}>
      <div className="container mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Transform
                </span>{" "}
                Your Voice?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of professionals who've conquered their fear and now speak with confidence and impact.
              </p>
              <Button
                size="sm"
                asChild
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-6"
              >
                <Link className="animate-bounce" href="https://calendly.com/ifezuejudith/freeconsultation" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="text-lg hidden lg:block">Book Your Free Consultation Now</span>
                  <span className="text-lg block lg:hidden">Book Free Now</span>
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <div>
            <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {/* <span className="p-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white"> */}
                <Mic className="w-5 h-5" />
              {/* </span> */}
              Speak10xbetter
            </span>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming professionals into confident, impactful speakers through personalized coaching and proven
              methodologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About", "Training Programs", "Success Stories", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-white/80 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <a
                  href="mailto:support@speak10xbetter.com"
                  className="text-white/80 hover:text-cyan-400 transition-colors"
                >
                  support@speak10xbetter.com
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 text-blue-400 mr-3" />
                <a
                  href="mailto:training@speak10xbetter.com"
                  className="text-white/80 hover:text-cyan-400 transition-colors"
                >
                  training@speak10xbetter.com
                </a>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-400 mr-3" />
                <a
                  href="https://calendly.com/ifezuejudith/freeconsultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-cyan-400 transition-colors"
                >
                  Book a Free Call
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-white/10 text-center space-y-2"
        >
          <p className="text-white/60">
            © {new Date().getFullYear()} Speak10xbetter. All rights reserved.
          </p>
          <p className="text-white/60">Transforming voices,<br className="hidden sm:inline" /> building confidence, creating leaders.</p>
        </motion.div>
      </div>
    </footer>
  )
}
