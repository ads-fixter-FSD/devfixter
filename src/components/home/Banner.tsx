import Image from "next/image";
import Badge from "../shared/Badge";

/** `public/images/banner.svg` — mockup (1268×775) */
const BANNER_IMAGE = "/images/banner.svg";

export default function Banner() {
  return (
    <div className="h-[1476px]">
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
            <div className="relative z-30 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-0">
              <div className="relative min-h-[1px] lg:min-h-[775px]">
                <div
                  className="relative mx-auto flex w-full max-w-[min(1300px,calc(100%-32px))] justify-center lg:absolute lg:mx-0 lg:block lg:w-[1300px] lg:max-w-[1300px]"
                  style={{
                    left: "40px",
                    top: "120px",
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 rounded-[39px]"
                    style={{
                      boxShadow: "0 100px 150px -50px rgba(0, 0, 0, 0.8)", // শ্যাডো বাড়াতে কমাতে চাইলে এখানে করুন
                    }}
                    aria-hidden
                  />

                  <div
                    className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] opacity-90 lg:hidden"
                    style={{
                      background:
                        "linear-gradient(315.92deg, rgba(0, 42, 255, 0) 60%, rgba(0, 174, 255, 0.35) 92%)",
                      filter: "blur(36px)",
                    }}
                    aria-hidden
                  />

                  <Image
                    src={BANNER_IMAGE}
                    width={1268}
                    height={775}
                    alt="Product dashboard preview"
                    className="relative z-30 mx-auto h-auto w-full max-w-[1268px] rounded-[24px] shadow-2xl sm:rounded-[32px] lg:rounded-[39px]"
                    sizes="(max-width: 1024px) 100vw, 1300px"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}