"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

// Single testimonial card component
function TestimonialCard({ testimonial, index, isInView }) {
  const [expanded, setExpanded] = useState(false);

  const lines =
    testimonial.content.split("\n").join(" ").match(/(.+?[\.\!\?])(\s|$)/g) || [
      testimonial.content,
    ];
  const previewLines = lines.slice(0, 10).join(" ");
  const restLines = lines.slice(10).join(" ");

  return (
    <motion.div
      key={testimonial.name}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

      <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group-hover:border-blue-400/30 transition-all duration-300">
        <div className="flex items-center mb-6">
          <Quote className="w-8 h-8 text-blue-400 mr-3" />
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-cyan-400 font-semibold text-lg mb-3">
            "{testimonial.highlight}"
          </p>
          <p className="text-white/80 text-left lg:text-justify leading-relaxed">
            {expanded || !restLines ? (
              testimonial.content
            ) : (
              <>
                {previewLines}
                ...{" "}
                <button
                  className="text-blue-400 underline ml-1"
                  onClick={() => setExpanded(true)}
                >
                  Read more
                </button>
              </>
            )}
          </p>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <img
          src={testimonial.img}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-400"
        />
        <div>
          <h4 className="text-white font-semibold">{testimonial.name}</h4>
          <p className="text-blue-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Main testimonials section
export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [

    {
      name: "Victory Sunday Daniel",
      role: "UN Ambassador for Peace",
      content: `

I embarked on an intensive 8-week journey with Ms. Judith Ifezue who provided an individual customized curriculum combining theory, practical sessions, book reading and evaluations.

This personalized approach yielded remarkable results: I aced my PhD interview, received a standing ovation at a regional conference, delivered impactful workshop presentations, and received enthusiastic applause after speeches. Most importantly, my day-to-day communication improved significantly, eliminating misunderstandings.

Public speaking is crucial for effective communication, active listening, persuasive speaking, and ultimately becoming a more successful and respected individual. I am thrilled with the progress I've made and the results I've achieved.

PS: Sincere appreciation to Judith Ifezue, she doesn’t just teach but provides a safe space to learn, re-learn and unlearn. Looking for a public speaking coach, I recommend her.
      `,
      highlight: "Aced my PhD interview and received standing ovations",
      img: "/victory-sunday.jpg",
    },
    {
      name: "Gideon Okibe",
      role: "Industrial Chemist",
      content:
        `You ever met someone whose words can rebuild your confidence from scratch? That's Judith. She's not just a public speaker. She's a transformation architect in the world of communication. Her program doesn't just teach you how to speak, it rebuilds your confidence, eliminates stage fright, and helps you own any room you walk into. I joined her mentorship program and let me tell you, my communication skills, presentation power, and self-belief skyrocketed. Judith is that coach who doesn't just teach—she TRANSFORMS. If you're an Entrepreneur, 9-5er, Executive, Speaker, Creative, Leader, or someone who wants to own your voice, Sign up for her classes now",
      highlight: "I Found My Voice—and So Will You`,
      img: "/gideon-okibe.jpg",
    },
    {
      name: "Wendy Wakhusama",
      role: "International Relations & Communications Specialist",
      content:
        "Working with Judith in February 2025 was a revelation—I learned to command every conversation and pitch. In the months that followed, I closed six‑figure deals for my company, earned substantial commissions, and was flown on two international business trips—and even one all‑expenses‑paid reward getaway. Judith doesn’t just teach you to speak better; she equips you to win, fast.",
      highlight: "Closed Deals and Earned Getaways: My Journey to Presentation Mastery",
      img: "/wendy.jpg",
    },
    {
      name: "Elsie McGuire",
      role: "Entrepreneur/Founder",
      content: `

You ever met someone whose words can rebuild your confidence from scratch?
That's Judith.

She's not just a public speaker. She's a transformation architect in the world of communication. Her program doesn't just teach you how to speak, it rebuilds your confidence, eliminates stage fright, and helps you own any room you walk into.

I joined her mentorship program and let me tell you, my communication skills, presentation power, and self-belief skyrocketed

Judith is that coach who doesn't just teach—she TRANSFORMS.
If you're an Entrepreneur, 9-5er, Executive, Speaker, Creative,Leader, or someone who wants to own your voice, Sign up for her classes now
      `,
      highlight: "Mentorship That Built My Confidence—and My Client/Investor Roster",
      img: "/elsie.jpg",
    },
    {
      name: "Blessing Etete",
      role: "Creative",
      content: `
     Before working with Judith, every pitch felt like a leap into the unknown—I’d rehearse until my voice shook, only to walk away empty‑handed. But from our very first session, her coaching felt like a conversation with a trusted mentor. She listened to my struggles, then tailored practical drills that built my confidence step by step.

Within weeks, I wasn’t just speaking—I was connecting. I closed my first high‑value client, and soon after secured commitments from investors I’d only dreamed of impressing. Boardroom meetings became collaborative conversations, and I walked out with partnerships that continue to drive my business forward.

Judith doesn’t hand you generic scripts—she helps you discover your authentic voice, then shows you exactly how to use it. If you’re an entrepreneur like myself & you are ready to turn every conversation into opportunities, you’ll want Judith in your corner.
      `,
      highlight: "Stage Fright Met Its Match",
      img: "/ms-judith.jpg",
    },
    {
      name: "Kemi Davis",
      role: "News Presenter",
      content: "Partnering with Judith was a game‑changer for my career as a local news presenter. Her laser‑focused, one‑on‑one coaching refined my on‑air presence and storytelling, propelling me to the forefront of my station. The results were evident: higher bonuses, a significant salary bump, and recognition as one of the UK’s Top 50 Best Presenters. Judith is amazing! ",
      highlight: "Judith's One-on-One Coaching Propelled Me to the UK’s Top 50",
      img: "/kemi-davis.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real transformations from real people
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
