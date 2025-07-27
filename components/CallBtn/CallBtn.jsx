import { PhoneCall } from 'lucide-react'
import React from 'react'

const CallBtn = () => {
    return (
        <a
            href="tel:+2349051071524"
            className="inline-flex items-center gap-2 bg-cyan-600 text-white px-3 py-2 rounded-xl text-lg hover:bg-cyan-500 transition"
        >
            <PhoneCall className="w-5 h-5" />
            Call Now
        </a>
    )
}

export default CallBtn
