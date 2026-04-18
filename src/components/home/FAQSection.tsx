"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, ChevronRight } from "lucide-react";
import { fadeUp } from "../../../utils/animation";
import Badge from "../shared/Badge";

const faqData = [
  {
    question: "Is there a free consultation available?",
    answer:
      "Yes! We offer a free consultation to understand your project requirements, goals, and suggest the best development approach — no commitment needed.",
  },
  {
    question: "How secure is my project?",
    answer:
      "Security is our top priority. We follow industry-standard encryption and secure coding practices to ensure your data and intellectual property are fully protected.",
  },
  {
    question: "What happens after project delivery?",
    answer:
      "We provide post-launch support and maintenance packages to ensure your application runs smoothly and stays up to date with the latest technologies.",
  },
  {
    question: "Can you work on existing projects?",
    answer:
      "Absolutely. We can take over existing codebases, perform audits, fix bugs, and add new features to help your project scale.",
  },
  {
    question: "Do I need technical knowledge to work with you?",
    answer:
      "Not at all. We handle the technical complexities and explain everything in simple terms so you can focus on your business decisions.",
  },
  {
    question: "Do you offer custom development solutions?",
    answer:
      "Yes, every solution we build is tailored specifically to your business needs, ensuring maximum efficiency and scalability.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full flex justify-center mb-10 md:mb-[120px] ">
      {/* Main Container - Width: 846px */}
      <div className="w-full max-w-[846px] flex flex-col gap-[80px] px-5 md:px-0">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.2}
          className="flex flex-col items-center text-center gap-6 "
        >
          <Badge>FAQs</Badge>
          <h2 className="title-xl">
            Everything You <br /> Need to Know
          </h2>
          <p className="body-m ">
            Got questions about our development services? Here are <br />{" "}
            answers to help you get started with confidence.
          </p>
        </motion.div>

        {/* FAQ Accordion List - Staggered FadeUp Animation */}
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index * 0.1}
        
              style={{
                backgroundColor:
                  openIndex === index ? "#000311" : "transparent",
                boxShadow:
                  openIndex === index
                    ? "inset 0px -66px 140px 0px rgba(255, 255, 255, 0.13)"
                    : "none",
              }}
              className={`border rounded-[30px] transition-all duration-300 overflow-hidden p-6 ${
                openIndex === index
                  ? "border-[rgba(255,255,255,0.07)]"
                  : "border-[rgba(255,255,255,0.07)]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center  text-left outline-none"
              >
                <span className="title-sm">
                  {faq.question}
                </span>
                <div className="text-gray-400">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </div>
              </button>

              {/* Answer Area - No Border */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className=" text-[#9B9EA8] text-base  leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
