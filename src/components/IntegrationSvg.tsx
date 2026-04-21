import React from 'react';

export const InteGrationUpperLeft = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <div className="relative w-full h-auto">
      <svg
        viewBox="0 0 353 114" // এটি খুবই গুরুত্বপূর্ণ রেসপনসিভ হওয়ার জন্য
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full" // উইডথ অনুযায়ী অটো বড়-ছোট হবে
        preserveAspectRatio="xMidYMid meet"
        {...props}
      >
        {/* অরিজিনাল ব্যাকগ্রাউন্ড পাথ */}
        <path
          d="M0 1H116.889C117.86 1 118.798 1.35297 119.527 1.99313L192.724 66.2089H300.512C301.528 66.2089 302.506 66.5957 303.248 67.2909L352 113"
          stroke="url(#paint0_linear_20_747)"
          strokeWidth="2"
          strokeOpacity="0.2" // আপনি হালকা চেয়েছিলেন তাই কমিয়ে দিলাম
        />

        {/* অ্যানিমেটেড আলোর পাথ */}
        <path
          className="moving-light-path"
          d="M0 1H116.889C117.86 1 118.798 1.35297 119.527 1.99313L192.724 66.2089H300.512C301.528 66.2089 302.506 66.5957 303.248 67.2909L352 113"
          stroke="url(#light_gradient_blue)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        <defs>
          <linearGradient
            id="paint0_linear_20_747"
            x1="9.3245"
            y1="113"
            x2="344.173"
            y2="35.8786"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0930EF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#27BBFF" />
          </linearGradient>

          <linearGradient id="light_gradient_blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#27BBFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <style jsx>{`
        .moving-light-path {
          stroke-dasharray: 60, 400;
          animation: sweep 4s linear infinite; /* গতি রিলাক্স করার জন্য ৪ সেকেন্ড */
        }

        @keyframes sweep {
          0% {
            stroke-dashoffset: 460;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export const InteGrationLowerRight = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <div className="relative w-full max-w-[210px] h-auto">
      <svg
        viewBox="0 0 210 114"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        {...props}
      >
        {/* ব্যাকগ্রাউন্ডের স্থির লাইন (হালকা করা হয়েছে) */}
        <path
          d="M208.834 0.70752L167.665 41.8481C166.915 42.5976 165.898 43.0186 164.837 43.0186H49.0315C47.6882 43.0186 46.4346 43.6928 45.6942 44.8136L0.83432 112.708"
          stroke="url(#paint0_linear_20_748)"
          strokeWidth="2"
          strokeOpacity="0.2"
        />

        {/* অ্যানিমেটেড আলোর পাথ */}
        <path
          className="moving-light-path-lower-right"
          d="M208.834 0.70752L167.665 41.8481C166.915 42.5976 165.898 43.0186 164.837 43.0186H49.0315C47.6882 43.0186 46.4346 43.6928 45.6942 44.8136L0.83432 112.708"
          stroke="url(#light_gradient_lower_right)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        <defs>
          <linearGradient
            id="paint0_linear_20_748"
            x1="6.34425"
            y1="112.708"
            x2="210.916"
            y2="84.866"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0930EF" stopOpacity="0.7" />
            <stop offset="1" stopColor="#27BBFF" />
          </linearGradient>

          {/* আলোর জন্য স্পেশাল গ্রেডিয়েন্ট */}
          <linearGradient id="light_gradient_lower_right" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#27BBFF" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <style jsx>{`
        .moving-light-path-lower-right {
          stroke-dasharray: 40, 300;
          animation: sweep-lower-right 3.5s linear infinite;
        }

        @keyframes sweep-lower-right {
          0% {
            stroke-dashoffset: 340;
          }
          100% {
            stroke-dashoffset: -40;
          }
        }
      `}</style>
    </div>
  );
};


export const InteGrationLowerLeft = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <div className="relative w-full max-w-[333px] h-auto">
      <svg
        viewBox="0 0 333 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        {...props}
      >
        {/* মেইন স্থির লাইন (ব্যাকগ্রাউন্ড) */}
        <path
          d="M332.207 1H222.287C221.272 1 220.295 1.38581 219.554 2.07925L150.707 66.5H49.3639C48.3031 66.5 47.2857 66.9214 46.5355 67.6716L0.707092 113.5"
          stroke="url(#paint0_linear_20_771)"
          strokeWidth="2"
          strokeOpacity="0.2"
        />

        {/* অ্যানিমেটেড দৌড়াতে থাকা আলো */}
        <path
          className="moving-glow-lower-left"
          d="M332.207 1H222.287C221.272 1 220.295 1.38581 219.554 2.07925L150.707 66.5H49.3639C48.3031 66.5 47.2857 66.9214 46.5355 67.6716L0.707092 113.5"
          stroke="url(#light_gradient_ll)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        <defs>
          {/* অরিজিনাল গ্রাডিয়েন্ট */}
          <linearGradient
            id="paint0_linear_20_771"
            x1="323.426"
            y1="113.5"
            x2="6.14507"
            y2="44.9865"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0930EF" stopOpacity="0.7" />
            <stop offset="1" stopColor="#27BBFF" />
          </linearGradient>

          {/* আলোর জন্য উজ্জ্বল নীল গ্রাডিয়েন্ট */}
          <linearGradient id="light_gradient_ll" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#27BBFF" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <style jsx>{`
        .moving-glow-lower-left {
          /* ৫০ পিক্সেল লম্বা আলো, বাকি ৪৫০ পিক্সেল গ্যাপ */
          stroke-dasharray: 50, 450;
          animation: sweep-ll 4s linear infinite;
        }

        @keyframes sweep-ll {
          0% {
            /* ডান দিক থেকে শুরু হবে (পাথের শেষ মাথা থেকে) */
            stroke-dashoffset: 500;
          }
          100% {
            /* বাম দিকে গিয়ে শেষ হবে */
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};


export const InteGrationLowerRightAlt = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <div className="relative w-full max-w-[199px] h-auto">
      <svg
        viewBox="0 0 199 114"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        {...props}
      >
        {/* ব্যাকগ্রাউন্ড স্থির পাথ */}
        <path
          d="M0.72821 0.685547L39.5437 41.927C40.2996 42.7301 41.3536 43.1855 42.4565 43.1855H151.504C152.887 43.1855 154.172 43.8998 154.902 45.0743L197.228 113.186"
          stroke="url(#paint0_linear_20_772)"
          strokeWidth="2"
          strokeOpacity="0.2"
        />

        {/* অ্যানিমেটেড আলোর পাথ (Glow) */}
        <path
          className="moving-glow-lr-alt"
          d="M0.72821 0.685547L39.5437 41.927C40.2996 42.7301 41.3536 43.1855 42.4565 43.1855H151.504C152.887 43.1855 154.172 43.8998 154.902 45.0743L197.228 113.186"
          stroke="url(#light_gradient_lr_alt)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        <defs>
          {/* অরিজিনাল কালার গ্রেডিয়েন্ট */}
          <linearGradient
            id="paint0_linear_20_772"
            x1="192.023"
            y1="113.186"
            x2="-1.64505"
            y2="88.396"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0930EF" stopOpacity="0.7" />
            <stop offset="1" stopColor="#27BBFF" />
          </linearGradient>

          {/* দৌড়াতে থাকা আলোর গ্রেডিয়েন্ট */}
          <linearGradient id="light_gradient_lr_alt" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#27BBFF" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <style jsx>{`
        .moving-glow-lr-alt {
          /* পাথের দৈর্ঘ্য অনুযায়ী dasharray */
          stroke-dasharray: 50, 300;
          animation: sweep-lr-alt 3.5s linear infinite;
        }

        @keyframes sweep-lr-alt {
          0% {
            stroke-dashoffset: 350;
          }
          100% {
            stroke-dashoffset: -50;
          }
        }
      `}</style>
    </div>
  );
};