import Banner from "@/components/home/Banner";
import FAQSection from "@/components/home/FAQSection";
import HowItWorks from "@/components/home/HowItWorks";
import Integrations from "@/components/home/Integrations";
import KeyBenefits from "@/components/home/KeyBenefits";
import SolveRealProblems from "@/components/home/SolveRealProblems";
import PricingSection from "@/components/home/pricing/Pricing";

export default function Home() {
  return (
    <div className="bg-black pt-20">
      <Banner></Banner>
      <SolveRealProblems></SolveRealProblems>
      <KeyBenefits />
      <HowItWorks />
      <FAQSection />
      <PricingSection/>
      <Integrations/>
    </div>
  );
}