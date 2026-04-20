    {/* --- TOP RIGHT: Web Applications Node --- */}
          <div className="absolute top-[20%] right-[25%] md:top-30 md:right-[30%] flex flex-col items-start origin-top-right scale-75 md:scale-100 z-10">
            <div className="relative">
              {/* 1. User Profile Pic (Exactly at the top end of the line) */}
              {/* Line-er mathay exact position korar jonno coordinate adjust kora hoyeche */}
              <div className="absolute -top-4 left-[66px] z-30">
                <div className="w-8 h-8 rounded-full border-2 border-primary/50 overflow-hidden bg-gray-800 shadow-lg">
                  <img
                    src="https://i.pravatar.cc/30?img=5"
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 2. Web Apps Card (Custom Styled per your requirements) */}
            
              <div className="absolute top-8 -left-1 bg-card w-[150px] h-[52px] rounded-[6px] my-box z-20 shadow-2xl flex flex-col justify-center px-3">
                <h4 className="text-[13px] font-semibold leading-tight text-white">
                  Web Applications
                </h4>
                <p className="text-[10px] text-muted leading-tight">
                  high-performance
                </p>
              </div>

              {/* 3. SVG Line */}
              <div className="relative z-10">
                <svg
                  width="83"
                  height="142"
                  viewBox="0 0 83 142"
                  fill="none"
                  className="opacity-80"
                >
                  <path
                    d="M0 141H70.5C77.1274 141 82.5 135.627 82.5 129V0"
                    stroke="url(#paint0_linear_139_623)"
                    strokeWidth="1.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_139_623"
                      x1="58"
                      y1="41"
                      x2="111.895"
                      y2="69.4089"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#187099" stopOpacity="0" />
                      <stop offset="1" stopColor="#EAB1FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>