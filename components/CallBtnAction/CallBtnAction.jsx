import Link from "next/link"
import { PhoneCall } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const CallBtnAction = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 0 0px rgba(0, 255, 255, 0)",
          "0 0 20px rgba(34, 211, 238, 0.6)",
          "0 0 0px rgba(0, 255, 255, 0)"
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className="inline-block rounded-sm"
    >
      <Button
        size="lg"
        asChild
        className="gap-2 bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-800 text-white px-6 py-6 text-2xl lg:text-3xl hover:from-cyan-600 hover:to-cyan-500"
      >
        <Link
          href="https://calendly.com/ifezuejudith/freeconsultation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PhoneCall className="animate-pulse w-10 h-10 md:w-6 md:h-6" />
          <span className=""> Call Now</span>

        </Link>
      </Button>
    </motion.div>
  )
}

export default CallBtnAction
