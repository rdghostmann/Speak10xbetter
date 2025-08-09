import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import earth from "/public/earth.png";

export default function CallToAction() {
  return (
    <section className="py-16 bg-black w-full lg:hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto relative isolate bg-gray-900 rounded-2xl overflow-hidden">
          {/* Background SVG */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>

          {/* Content Section */}
          <div className="p-8 md:p-12 max-w-[600px]">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
              Speak with Confidence and Impact
            </h2>
            <p className="text-gray-100 mb-8 bg-gray-800 rounded p-4">
              Have any questions? <br className="" /> Book us we're always here.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* <Button variant="outline" className="rounded-full">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button> */}
              <Link href="https://calendly.com/ifezuejudith/freeconsultation" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Live Chat
                </Button>
              </Link>
              {/* <Link href="/register">
                <Button className="bg-blue-600 text-white hover:bg-blue-500/90 rounded-full">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link> */}
            </div>
          </div>

          {/* Decorative Image */}
          <div className="absolute animate-pulse w-72 -z-10 -right-10 -bottom-5">
            {/* <Image
              src={earth}
              alt="Investment Illustration"
              width={400}
              height={300}
              className="object-cover opacity-65"
            /> */}
            <img
              src="/public/earth.png"
              alt="Investment Illustration"
              className="object-cover opacity-65"
              width="400"
              height="300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



