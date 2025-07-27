import { PhoneCall } from 'lucide-react'
import React from 'react'

const CallBtn = () => {
    return (
        <a
            href="tel:+2349051071524"
            className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-4 rounded-xl text-lg hover:bg-cyan-500 transition"
        >
            <PhoneCall className="w-5 h-15" />
            Call Now
        </a>
    )
}

export default CallBtn
