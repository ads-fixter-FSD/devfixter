import Badge from "@/components/shared/Badge";
import Image from "next/image";
const BANNER_IMAGE = "/images/banner.svg";

export default function Banner() {
  return (
    <div>
      <div className="flex w-full justify-center px-3 sm:px-4 hero-banner-bg h-[1132px]">
        <div className=" relative mx-auto w-full  pb-16 lg:pb-[380px] max-w-[1350px]">
          {/* Six lines */}
          <div
            className="hero-vline-oneline top-0 h-[1132px] left-[60px]"
            aria-hidden
          />
          <div
            className="hero-vline-oneline hero-vline-oneline-delay-1 h-[1132px] left-[16%] lg:left-[257px]"
            aria-hidden
          />
          <div
            className="hero-vline-oneline hero-vline-oneline-delay-2 h-[1132px] left-[72%] lg:left-[calc(100%-257px)]"
            aria-hidden
          />
          <div
            className="hero-vline-oneline hero-vline-oneline-delay-3 h-[1132px] left-[88%] lg:left-[calc(100%-60px)]"
            aria-hidden
          />

          <div
            className="pointer-events-none absolute left-1/2  z-[2] h-[1132px] w-[min(28vw,198px)] -translate-x-1/2 border-x border-[#FFFFFF1F] lg:left-[621px]  lg:w-[198px] lg:translate-x-0"
            style={{
              background:
                "linear-gradient(360deg, rgba(255, 255, 255, 0.04) 33.01%, rgba(255, 255, 255, 0) 84.98%)",
            }}
            aria-hidden
          >
            <div className="hero-vline-sheen-middle absolute inset-0 overflow-hidden" />
          </div>

          {/* Glows: isolated stack only */}

          <div
            className=" absolute left-0 right-0 top-0 z-0 mx-auto h-[1132px] w-full lg:block"
            style={{ isolation: "isolate" }}
            aria-hidden
          >
            <div className="absolute left-[70px] top-[691px] h-[775px] w-[1300px] rounded-[39px] overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(315.92deg, rgba(0, 42, 255, 0) 65.92%, #00AEFF 91.67%)",
                  filter: "blur(40px)",

                  mixBlendMode: "screen",
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(120.81deg, #8D1DB6 3.22%, rgba(255, 255, 255, 0) 38.58%)",
                  mixBlendMode: "plus-lighter",
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(315.92deg, rgba(0, 42, 255, 0) 75.92%, #FFFFFF 95.67%)",
                  opacity: "0.4",
                  zIndex: 10,
                }}
              />

              <div
                className="absolute left-[35%] top-[10%] h-[451px] w-[451px] rounded-full"
                style={{
                  background: "#E1B0F1",
                  filter: "blur(180px)",
                  opacity: "0.45",
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  backdropFilter: "blur(74px)",
                  WebkitBackdropFilter: "blur(74px)",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              />
            </div>
          </div>

          {/* Copy — above glows */}
          <div className="relative z-20 mx-auto flex w-full max-w-[1300px] flex-col items-center pt-[clamp(72px,14vw,218px)]">
            <div className="max-w-[606px] flex flex-col items-center gap-[30px] text-center">
              <Badge>For Big team and startup</Badge>

              <div className="title-xl ">
                Build, Launch &amp; Scale Your Product Faster
              </div>

              <p className="text-base px-6">
                We help startups and businesses build high-performance websites,
                web apps, and scalable systems — quickly and efficiently.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  className="btn-primary-custom px-8 py-4 text-base"
                >
                  Get Started
                  <span aria-hidden className="text-lg leading-none">
                    →
                  </span>
                </button>
                <button
                  type="button"
                  className="btn-glass-custom border border-white/10 px-8 py-4 text-base"
                >
                  Book a Free Consultation
                </button>
              </div>
            </div>

            {/* Image Container */}
            {/* Image Container */}
<div className="relative  mx-auto  w-full ">
  <div className="relative">
    <div
      className="relative mx-auto flex w-full  border justify-center lg:absolute lg:mx-0 lg:block lg:w-[1268px] lg:max-w-[1300px]"
      style={{ left: "40px", top: "120px" }}
    >
      <div className="relative mx-auto w-full max-w-[1268px]">
        
        {/* 1. Background Glow (ইমেজের পেছনে বড় সফট আলো) */}
        <div className="absolute -left-20 -top-20 -z-10  opacity-50 pointer-events-none">
          <div 
            className="absolute inset-0 blur-[120px] rounded-full"
            style={{
              background: "radial-gradient(circle at center, rgba(0, 174, 255, 0.4) 0%, rgba(141, 29, 182, 0.2) 40%, transparent 70%)"
            }}
          />
        </div>

        {/* 2. Main Image Wrapper with Light Effect */}
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[39px]">
          
          {/* Top-Left 'Light Hit' (যে আলোটা ইমেজের ওপর পড়ছে) */}
          <div 
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              // এটি ইমেজের ভেতর দিকে একটি সফট গ্লো তৈরি করবে যা ডানে ও নিচে মিলিয়ে যাবে
              background: `
                linear-gradient(135deg, 
                  rgba(0, 174, 255, 0.5) 0%, 
                  rgba(255, 255, 255, 0.2) 10%, 
                  rgba(141, 29, 182, 0.1) 25%, 
                  transparent 50%
                )
              `,
              // ইনসেট শ্যাডো দিয়ে ধারের লাইট স্ট্রোকটা তৈরি করা হয়েছে (বর্ডার ছাড়া)
              boxShadow: "inset 2px 2px 20px rgba(0, 174, 255, 0.3), inset 1px 1px 2px rgba(255, 255, 255, 0.8)"
            }}
          />

          <Image
            src={BANNER_IMAGE}
            width={1268}
            height={775}
            alt="Product dashboard preview"
            className="relative z-10 w-full h-auto object-cover"
            priority
            unoptimized
          />
        </div>

        {/* 3. Deep Bottom Shadow (ইমেজটিকে ভাসিয়ে রাখার জন্য) */}
        <div 
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 -z-10 opacity-70 blur-[80px]"
          style={{ background: "rgba(0,0,0,0.9)" }}
        />
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
