import { Hero } from "@/components/Hero";
import { PainSection } from "@/components/PainSection";
import { MagicQueryDemo } from "@/components/MagicQueryDemo";
import { PrivacySection } from "@/components/PrivacySection";
import { TargetUsers } from "@/components/TargetUsers";
import { ProductFlowSection } from "@/components/ProductFlowSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="gradient-mesh gradient-mesh-animated min-h-screen">
      <Nav />
      <Hero />
      <SectionDivider />
      <PainSection />
      <SectionDivider />
      <MagicQueryDemo />
      <SectionDivider />
      <PrivacySection />
      <SectionDivider />
      <TargetUsers />
      <SectionDivider />
      <ProductFlowSection />
      <SectionDivider />
      <FinalCTA />
      <Footer />
    </main>
  );
}
