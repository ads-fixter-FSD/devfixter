import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";

const SaveTimeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6">
    <path d="M8 12h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4z" />
    <circle cx="21" cy="11" r="5" />
  </svg>
);

const BoostProductivityIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6">
    <path d="M16 4l2.5 8.5L27 15l-8.5 2.5L16 26l-2.5-8.5L5 15l8.5-2.5z" />
  </svg>
);

const SmarterDecisionsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6">
    <polygon points="16 6 4 12 16 18 28 12 16 6" />
    <polyline points="4 18 16 24 28 18" />
  </svg>
);

const WorkAnywhereIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6">
    <circle cx="12" cy="16" r="8" />
    <circle cx="20" cy="16" r="8" />
  </svg>
);

export default function KeyBenefits() {
  return (
    <section className="relative w-full bg-black py-24 flex justify-center overflow-hidden">
      {/* Background glow behind center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="custom-container flex flex-col items-center px-4 relative z-10 w-full">
        {/* Top Tag */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <div className="bg-[#B53BE2] rounded p-0.5">
            <IoChevronForward className="w-3 h-3 text-white" />
          </div>
          <span className="text-white text-sm font-medium">Benefits</span>
        </div>

        {/* Title & Subtitle */}
        <div className="max-w-[846px] mx-auto text-center flex flex-col items-center gap-4 mb-20">
          <h2 className="title-lg text-white">
            The Key Benefits of Working <br className="hidden sm:block" /> with DevFixter
          </h2>
          <p className="text-base text-[var(--accent)] max-w-[565px]">
            Our all-in-one platform simplifies your workflow so you can focus on what really matters growing your business.
          </p>
        </div>

        {/* Quadrants Section */}
        <div className="relative w-full max-w-[846px] mx-auto">
          {/* Inner solid border lines (using gradients to fade edges) */}
          <div
            className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0"
            style={{
              background: "linear-gradient(180deg, rgba(181, 59, 226, 0.05) 0%, rgba(181, 59, 226, 0.4) 50%, rgba(181, 59, 226, 0.05) 100%)",
            }}
          ></div>
          <div
            className="hidden sm:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 z-0"
            style={{
              background: "linear-gradient(90deg, rgba(181, 59, 226, 0.05) 0%, rgba(181, 59, 226, 0.4) 50%, rgba(181, 59, 226, 0.05) 100%)",
            }}
          ></div>

          {/* Logo Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#B53BE2] shadow-[0px_0px_25px_rgba(181,59,226,0.5)] rounded-full flex items-center justify-center z-20 border border-white/20">
            <div className="relative w-6 h-6">
              <Image src="/logo.png" alt="DevFixter Logo" fill className="object-contain" />
            </div>
          </div>

          {/* 2x2 Grid container matching design's proportions */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Top Left */}
            <div className="flex flex-col items-center text-center px-8 py-14 h-auto min-h-[246px] justify-center relative sm:border-r border-b border-transparent">
              <SaveTimeIcon />
              <h3 className="title-sm text-white mb-3">Save Time & Effort</h3>
              <p className="text-base text-[var(--accent)] max-w-[340px]">
                Automate repetitive tasks and streamline workflows so your team can focus on high-impact work.
              </p>
            </div>

            {/* Top Right */}
            <div className="flex flex-col items-center text-center px-8 py-14 h-auto min-h-[246px] justify-center relative border-b border-transparent">
              <BoostProductivityIcon />
              <h3 className="title-sm text-white mb-3">Boost Productivity</h3>
              <p className="text-base text-[var(--accent)] max-w-[340px]">
                Simplify complex processes, reduce manual input, and keep everyone aligned.
              </p>
            </div>

            {/* Bottom Left */}
            <div className="flex flex-col items-center text-center px-8 py-14 h-auto min-h-[246px] justify-center relative sm:border-r border-transparent">
              <SmarterDecisionsIcon />
              <h3 className="title-sm text-white mb-3">Make Smarter Decisions</h3>
              <p className="text-base text-[var(--accent)] max-w-[340px]">
                Access real-time data, insights, and analytics to guide your strategy with confidence.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="flex flex-col items-center text-center px-8 py-14 h-auto min-h-[246px] justify-center relative">
              <WorkAnywhereIcon />
              <h3 className="title-sm text-white mb-3">Work From Anywhere</h3>
              <p className="text-base text-[var(--accent)] max-w-[340px]">
                Cloud-based access means your team can stay productive no matter where they are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
