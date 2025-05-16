import CallToAction from "@/components/CallToActions";
import ClientReviews from "@/components/ClientReviews";
import DesignExploration from "@/components/DesignExploration";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import WorkExperienceSection from "@/components/WorkExperienceEntry";
import WorkProgressSection from "@/components/WorkProgressSection";

export default function Home() {

  const designImages = [
    { src: "/ca1.jpg", alt: "Mockup 1" },
    { src: "/ca2.jpg", alt: "Mockup 2" },
    { src: "/ca3.jpg", alt: "Mockup 3" },
    { src: "/ca2.jpg", alt: "Mockup 2" },
    { src: "/ca1.jpg", alt: "Mockup 1" },
    { src: "/ca3.jpg", alt: "Mockup 3" },
  ];


  return (
    <div className="bg-[#151419]">
      <Header />
      <HeroSection />
      <PortfolioSection />
      <WorkProgressSection />
      <DesignExploration images={designImages} />
      <WorkExperienceSection />
      <ClientReviews />
      <CallToAction />
    </div>
  );
}
