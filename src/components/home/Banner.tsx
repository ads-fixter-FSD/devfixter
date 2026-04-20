import Image from "next/image";
import Badge from "../shared/Badge";

const BANNER_IMAGE = "/images/banner.svg";

export default function Banner() {
  return (
    <div className="h-auto lg:h-[1476px] md:mb-20">
      <div className="flex w-full justify-center px-3 sm:px-4 hero-banner-bg h-auto lg:h-[1132px]">
        <div className="relative mx-auto w-full pb-16 lg:pb-[380px] max-w-[1440px]">

          {/* === VERTICAL LINES (desktop only) === */}
          <div className="hidden lg:block hero-vline-oneline top-0 h-[1132px] left-[60px]" aria-hidden />
          <div className="hidden lg:block hero-vline-oneline hero-vline-oneline-delay-1 h-[1132px] left-[16%] lg:left-[257px]" aria-hidden />
          <div className="hidden lg:block hero-vline-oneline hero-vline-oneline-delay-2 h-[1132px] left-[72%] lg:left-[calc(100%-257px)]" aria-hidden />
          <div className="hidden lg:block hero-vline-oneline hero-vline-oneline-delay-3 h-[1132px] left-[88%] lg:left-[calc(100%-60px)]" aria-hidden />

          {/* Center sheen line (desktop only) */}
          <div
            className="hidden lg:block pointer-events-none absolute z-[2] h-[1132px] w-[198px] border-x border-[#FFFFFF1F] lg:left-[621px]"
            style={{
              background: "linear-gradient(360deg, rgba(255, 255, 255, 0.04) 33.01%, rgba(255, 255, 255, 0) 84.98%)",
            }}
            aria-hidden
          >
            <div className="hero-vline-sheen-middle absolute inset-0 overflow-hidden" />
          </div>

          {/* === HEADING & BUTTONS === */}
          <div className="relative z-20 mx-auto flex w-full max-w-[1300px] flex-col items-center pt-[clamp(72px,14vw,218px)] pb-16 lg:pb-0">
            <div className="max-w-[556px] flex flex-col items-center gap-[30px] text-center">
              <Badge>For Big team and startup</Badge>

              <div className="title-xl">
                Build, Launch &amp; Scale Your Product Faster
              </div>

              <p className="text-base px-6">
                We help startups and businesses build high-performance websites,
                web apps, and scalable systems — quickly and efficiently.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button type="button" className="btn-primary-custom px-8 py-4 text-base">
                  Get Started
                  <span aria-hidden className="text-lg leading-none">→</span>
                </button>
                <button type="button" className="btn-glass-custom border border-white/10 px-8 py-4 text-base">
                  Book a Free Consultation
                </button>
              </div>
            </div>
          </div>

          {/* === IMAGE + GLOW SECTION ===
              mobile (< md)  : hidden
              tablet (md)    : visible, image scaled down ~78%
              desktop (lg+)  : full Figma size, absolute positioned
          */}
          <div className="hidden md:block relative mx-auto w-full ">
            <div
              className="relative   mx-auto w-full flex justify-center lg:absolute lg:mx-0"
              style={{ top: "120px", left: "0px" }}
            >
              {/* Outer bound — Figma Dashboard: 1300×805 */}
              <div
                className="relative w-full max-w-[1300px]"
                style={{ height: "805px" }}
              >

                {/* ── GLOW 1: Ellipse 3 — #E1B0F1 purple center glow ── */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: "451px",
                    height: "451px",
                    top: "0px",
                    left: "426px",
                    borderRadius: "34px",
                    background: "#E1B0F1",
                    filter: "blur(200px)",
                    opacity: 1,
                    zIndex: 1,
                  }}
                  aria-hidden
                />

                {/* ── GLOW 2: Rectangle 1 — blue top-left sweep ── */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: "1027px",
                    height: "612px",
                    top: "25px",
                    left: "20px",
                    borderRadius: "34px",
                    background: "linear-gradient(315.92deg, rgba(0, 42, 255, 0) 65.92%, #00AEFF 91.67%)",
                    filter: "blur(44px)",
                    zIndex: 2,
                  }}
                  aria-hidden
                />

                {/* ── GLOW 3: Rectangle 2 — white gradient, wide soft glow ── */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: "1300px",
                    height: "775px",
                    top: "20px",
                    left: "0px",
                    borderRadius: "39px",
                    background: "linear-gradient(315.92deg, rgba(0, 42, 255, 0) 65.92%, rgba(255, 255, 255, 0.12) 91.67%)",
                    backdropFilter: "blur(74px)",
                    WebkitBackdropFilter: "blur(74px)",
                    maskImage: "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
                    zIndex: 3,
                  }}
                  aria-hidden
                />

                {/* ── GLOW 4: Rectangle 3 — purple, mix-blend-mode plus-lighter ── */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: "1027px",
                    height: "612px",
                    top: "10px",
                    left: "100px",
                    borderRadius: "34px",
                    background: "linear-gradient(120.81deg, #8D1DB6 3.22%, rgba(255, 255, 255, 0) 38.58%)",
                    filter: "blur(44px)",
                    mixBlendMode: "plus-lighter",
                    zIndex: 4,
                  }}
                  aria-hidden
                />

                {/* ── MAIN IMAGE — Figma Group: 1268×775, top:30, left:13 ── */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    top: "30px",
                    left: "13px",
                    width: "1268px",
                    height: "775px",
                    borderRadius: "16px",
                    zIndex: 5,
                  }}
                >
                  <Image
                    src={BANNER_IMAGE}
                    width={1268}
                    height={775}
                    alt="Product dashboard preview"
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>

                {/* ── BOTTOM SHADOW ── */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    bottom: "-24px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "90%",
                    height: "48px",
                    zIndex: 0,
                    opacity: 0.6,
                    background: "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, transparent 70%)",
                  }}
                  aria-hidden
                />

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}