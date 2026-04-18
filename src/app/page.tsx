import FAQSection from "@/components/home/FAQSection";
import KeyBenefits from "@/components/home/KeyBenefits";
import SolveRealProblems from "@/components/home/SolveRealProblems";
import PricingSection from "@/components/home/pricing/Pricing";

export default function Home() {
  return (
    <div className="bg-black pt-20">
      <SolveRealProblems></SolveRealProblems>
      <KeyBenefits />
      <FAQSection />
      <PricingSection/>
    </div>
  );
}
