import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Bridge from "@/components/Bridge";
import Programs from "@/components/Programs";
import CreativeSessions from "@/components/CreativeSessions";
import Impact from "@/components/Impact";
import MediaWall from "@/components/MediaWall";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Bridge />
      <Programs />
      <CreativeSessions />
      <Impact />
      <MediaWall />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}
