import About from "@/components/About/About";
import CallToAction from "@/components/CallToAction/CallToAction";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Popups from "@/components/Popups/Popups";
import Stats from "@/components/Stats/Stats";
import Subscribe from "@/components/SubscribeForm/Subscribe2";
import SubscribeForm from "@/components/SubscribeForm/SubscribeForm";
import SuccessStories from "@/components/SuccessStories/SuccessStories";
import Testimonials from "@/components/Testimonials/Testimonials";
import VideoSection from "@/components/VideoSection/VideoSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        <Hero />
        <About />
        {/* <VideoSection /> */}
        <Stats />
        <SuccessStories />
        <Testimonials />
        <div className="mt-5">
          {/* Insert Kit popups here */}
          {/* <Popups /> */}
          <Subscribe />
          <SubscribeForm />
        </div>
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
