import CardMain from "@/components/CardMain";
import Choose from "@/components/Choose";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";

export default function Home() {
  return (
  <main >
    <Navbar/>
    <HomeSection />
    <SocialProof />
    <About />
    <Choose/>
    <Services />
    <Explore />
    <Testimonials />
    <CardMain />
    <Footer />
  </main>

  
  )
}
