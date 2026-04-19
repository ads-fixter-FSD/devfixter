import Image from "next/image";
import Badge from "@/components/shared/Badge";

export default function KeyBenefits() {
  return (
    <section className="relative w-full bg-black py-24 flex justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b53be2]/10 blur-[80px] rounded-full pointer-events-none z-0"></div>

      <div className="custom-container flex flex-col items-center px-4 relative z-10 w-full">
        {/* Top Tag */}
        <div className="mb-8">
          <Badge>Benefits</Badge>
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
        <div
          className="relative w-full mx-auto"
          style={{
            maxWidth: '846px',
            borderWidth: '0px',
            borderStyle: 'solid',
            borderImageSource: 'linear-gradient(158.39deg, rgba(181, 59, 226, 0.1) 24.19%, rgba(181, 59, 226, 0) 50.59%, rgba(181, 59, 226, 0) 68.79%, rgba(181, 59, 226, 0.025) 105.18%)'
          }}
        >
          {/* Logo Center (Mobile - sits on top of everything) */}
          <div className="flex sm:hidden justify-center items-center pb-8 w-full z-20">
            <div
              className="flex items-center justify-center"
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "60px",
                boxShadow: "0px 32px 24px -16px #B53BE266, inset 0px 0px 8px 0px #F8F8F866",
                border: "1.5px solid transparent",
                backgroundImage: "linear-gradient(#B53BE2B2, #B53BE2B2), linear-gradient(158.39deg, rgba(181, 59, 226, 0.1) 14.19%, rgba(181, 59, 226, 0) 50.59%, rgba(181, 59, 226, 0) 68.79%, rgba(181, 59, 226, 0.025) 105.18%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              <div
                className="relative flex items-center justify-center rounded-[4px]"
                style={{ width: "23px", height: "23px", background: "#581372" }}
              >
                <div style={{ position: "relative", width: "12.6px", height: "14px" }}>
                  <Image src="/logo.png" alt="DevFixter Logo" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Logo Center (Desktop) */}
          <div
            className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20"
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "60px",
              boxShadow: "0px 32px 24px -16px #B53BE266, inset 0px 0px 8px 0px #F8F8F866",
              border: "1.5px solid transparent",
              backgroundImage: "linear-gradient(#B53BE2B2, #B53BE2B2), linear-gradient(158.39deg, rgba(181, 59, 226, 0.1) 14.19%, rgba(181, 59, 226, 0) 50.59%, rgba(181, 59, 226, 0) 68.79%, rgba(181, 59, 226, 0.025) 105.18%)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <div
              className="relative flex items-center justify-center rounded-[4px]"
              style={{ width: "23px", height: "23px", background: "#581372" }}
            >
              <div style={{ position: "relative", width: "12.6px", height: "14px" }}>
                <Image src="/logo.png" alt="DevFixter Logo" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* 2x2 Grid container matching design's proportions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 relative z-0">
            {/* Top Left */}
            <div className="flex flex-col items-center text-center px-8 py-10 sm:py-14 h-auto min-h-[200px] sm:min-h-[246px] justify-center relative sm:border-r border-b border-transparent bg-transparent">
              <Image src="/home/keyBenefits/icon1.png" width={32} height={32} alt="Save Time & Effort" className="mb-6 object-contain" />
              <h3 className="title-sm text-white mb-3">Save Time & Effort</h3>
              <p className="text-base text-[var(--accent)] max-w-[340px]">
                Automate repetitive tasks and streamline workflows so your team can focus on high-impact work.
              </p>
            </div>

            {/* Top Right */}
            <div className="flex flex-col items-center text-center px-8 py-10 sm:py-14 h-auto min-h-[200px] sm:min-h-[246px] justify-center relative border-b border-transparent bg-transparent sm:bg-black/30">
              <Image src="/home/keyBenefits/icon2.png" width={32} height={32} alt="Boost Productivity" className="mb-6 object-contain" />
              <h3 className="title-sm text-white mb-3">Boost Productivity</h3>
              <p className="text-base text-[var(--accent)] max-w-[340px]">
                Simplify complex processes, reduce manual input, and keep everyone aligned.
              </p>
            </div>

            {/* Bottom Left */}
            <div className="flex flex-col items-center text-center px-8 py-10 sm:py-14 h-auto min-h-[200px] sm:min-h-[246px] justify-center relative sm:border-r border-transparent bg-transparent sm:bg-black/30">
              <Image src="/home/keyBenefits/icon3.png" width={32} height={32} alt="Make Smarter Decisions" className="mb-6 object-contain" />
              <h3 className="title-sm text-white mb-3">Make Smarter Decisions</h3>
              <p className="text-base text-[var(--accent)] max-w-[340px]">
                Access real-time data, insights, and analytics to guide your strategy with confidence.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="flex flex-col items-center text-center px-8 py-10 sm:py-14 h-auto min-h-[200px] sm:min-h-[246px] justify-center relative bg-transparent">
              <Image src="/home/keyBenefits/icon4.png" width={32} height={32} alt="Work From Anywhere" className="mb-6 object-contain" />
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
