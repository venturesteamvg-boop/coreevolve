/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "What can I expect from my first session?",
    answer:
      "In our first session, I listen to your concerns, understand your goals, and explain how we can work together. You'll leave with a clear sense of the next steps.",
  },
  {
    question: "How long does therapy usually take?",
    answer:
      "The duration of therapy depends on your unique needs and goals. Some find short-term therapy sufficient, while others prefer ongoing support. We will discuss a timeline that feels right for you.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes, I offer secure, confidential online sessions for your convenience.",
  },
  {
    question: "What types of therapy do you use?",
    answer:
      "I use an integrative approach, drawing from cognitive-behavioral therapy, mindfulness practices, and psychodynamic theory.",
  },
  {
    question: "How do I know if therapy is working for me?",
    answer:
      "You may start to notice changes in how you handle stress, improved relationships, and a greater sense of clarity and well-being. We will regularly check in on your progress.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D2B45] to-[#1A1A1A] py-10 font-sans">
      <div aria-hidden="true" className="watermark watermark--trust">
        <Image
          src="/logo.png"
          alt=""
          width={1200}
          height={1200}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-[700px]">
        <header className="mb-12 text-center">
          <span className="mb-3 block text-[13px] font-semibold tracking-[0.1em] text-[#C2A96A] opacity-70 uppercase">
            • FAQs
          </span>
          <h2 className="font-serif text-[38px] leading-[1.2] font-normal text-[#F5F5F5]">
            Everything You Need to Know before Working with Me
          </h2>
        </header>

        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full outline-none transition-all duration-[400ms] focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2B45] ${
                    isOpen
                      ? "mt-2 mb-2 rounded-lg border-b-0 bg-[#1F4E5F] p-6 text-[#F5F5F5]"
                      : "border-b border-white/15 bg-transparent px-2 py-6 text-[#F5F5F5] hover:bg-white/[0.03]"
                  } flex items-center justify-between text-left`}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`pr-6 text-[18px] transition-colors duration-300 ${
                      isOpen ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-[#2F7F86]">
                    {isOpen ? (
                      <Minus className="h-6 w-6" strokeWidth={1.8} />
                    ) : (
                      <Plus className="h-6 w-6" strokeWidth={1.8} />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pt-2 pb-6 text-[15px] leading-[1.6] text-[#F5F5F5]/70">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}