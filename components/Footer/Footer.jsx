"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail, ChevronRight, MessageCircle, Mic, PhoneIncoming, PhoneCall, MailQuestion, MessageCircleMoreIcon } from "lucide-react"
import { FaLinkedin, FaFacebook, FaWhatsapp, FaTiktok, FaYoutube } from "react-icons/fa"
import { FaInstagram, FaXTwitter } from "react-icons/fa6"

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
            <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-4 lg:p-12 border border-white/10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready {" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  to Transform
                </span>{" "} <br className="hidden md:block" />
                How You Speak?
              </h2>
              <p className="w-4/5 lg:w-3/5 lg text-xl text-white/80 mb-2 max-w-2xl mx-auto">
                “Don’t let another opportunity slip by because you couldn’t command the room”
              </p>
              {/* <CallBtn /> */}
              {/* <Button
                size="sm"
                asChild
                className="ml-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-6 my-4"
              >
                <Link
                  className=""
                  href="https://calendly.com/ifezuejudith/freeconsultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneCall className="w-15 h-15 text-red-600 text-2xl mr-2 animate-pulse" />
                  <span className="text-lg hidden lg:block">Book Your Free Consultation Now</span>
                  <span className="text-lg block lg:hidden">Book Free Now</span>
                </Link>
              </Button> */}

              <div className="pt-4">
                <Link
                  className=""
                  href="https://calendly.com/ifezuejudith/freeconsultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition">
                    📞 Book Your Strategy Call
                  </button>
                </Link>
                <motion.p
                  className="text-sm text-white/70 mt-10"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  (Free consultation • No Pressure • See if Speak10XBetter is Right For You.)
                </motion.p>
              </div>
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
            <div className="flex items-center space-x-2 mb-4">
              <span className="p-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white">
                <Mic className="w-5 h-5 sm:w-6 sm:h-6" />
              </span>
              <h3 className="font-bold text-lg text-white">
                Speak<span className="text-cyan-400">10x</span>Better
              </h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming Voices, Building Confidence,<br className="hidden lg:block" /> Eliminating Stage Fright
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/judithifezue" },
                { icon: FaTiktok, href: "https://www.tiktok.com/@ifezuejudith" },
                { icon: FaFacebook, href: "https://www.facebook.com/share/19KS2aHEzB/?mibextid=wwXIfr" },
                { icon: FaInstagram, href: "https://www.instagram.com/ifezue_judith" },
                { icon: FaWhatsapp, href: "https://wa.me/9051071524" },
                { icon: FaXTwitter, href: "https://x.com/IfezueJudith" },
                { icon: FaYoutube, href: "https://www.youtube.com/@ifezuejudith" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About", "Testimonials", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={link === "Contact" ? "mailto:support@speak10xbetter.com" : `#${link.toLowerCase()}`}
                    className="flex items-center space-x-2 text-white/80 hover:text-cyan-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MailQuestion className="w-5 h-5 text-blue-400 mr-3" />
                <a
                  href="mailto:support@speak10xbetter.com"
                  className="text-white/80 hover:text-cyan-400 transition-colors"
                >
                  support@speak10xbetter.com
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircleMoreIcon className="w-5 h-5 text-blue-400 mr-3" />
                <a
                  href="mailto:training@speak10xbetter.com"
                  className="text-white/80 hover:text-cyan-400 transition-colors"
                >
                  training@speak10xbetter.com
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIncoming className="w-5 h-5 text-blue-400 mr-3" />
                <a
                  href="https://calendly.com/ifezuejudith/freeconsultation" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-cyan-400 transition-colors"
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
        </motion.div>
      </div>
    </footer>
  )
}
