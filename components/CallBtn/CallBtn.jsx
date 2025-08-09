import { PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CallBtn = () => {
    return (
        <Link
            href="https://calendly.com/ifezuejudith/freeconsultation" target="_blank" rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-cyan-600 text-white px-3 py-2 rounded-sm text-lg hover:bg-cyan-500 transition"
        >
            <PhoneCall className="w-8 h-8" />
            Book a Call
        </Link>
    )
}

export default CallBtn
