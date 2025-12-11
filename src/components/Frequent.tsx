"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does the PF system work?",
    answer:
      "Zaneta manages PF contributions automatically, ensuring transparency and long-term financial safety for maids.",
  },
  {
    question: "Is ESI included for all maids?",
    answer:
      "Yes, ESI covers medical treatment, hospitalization, and essential health needs for all registered maids.",
  },
  {
    question: "How much does it cost to hire a maid?",
    answer:
      "Our pricing is very affordable and varies based on the services required. Contact us for a detailed quote.",
  },
  {
    question: "What training do the maids receive?",
    answer:
      "All maids undergo a 30-day training program covering from basic etiquettes to essential skills.",
  },
];

export default function Frequent() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="bg-[#f8f9fb] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        

          {/* FAQ Header */}
          <div className="text-center mb-6">
            <span className = "text-md font-bold bg-[#db0000]/20 text-[#db0000]/80 px-3 py-1 rounded-full inline-block">
              FAQs
            </span>
          </div>

        {/* Title */}
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold mb-16 tracking-tight leading-tight">
          <span className="text-black">We Have </span>
          <span className="animate-gradient bg-gradient-to-r from-[#db0000] via-[#ffcc33] to-[#000000]
 bg-clip-text text-transparent">
            Answers
          </span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div
                key={index}
                className="rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05),0_15px_45px_rgba(0,0,0,0.03)] p-6 sm:p-8 transition-all duration-300"
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start gap-4 text-left"
                >
                  {/* Icon */}
                  <div className="mt-1">
                    {isOpen ? (
                      <Minus className="w-6 h-6 text-[#000000]" />
                    ) : (
                      <Plus className="w-6 h-6 text-[#000000]" />
                    )}
                  </div>

                  {/* Question */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {faq.question}
                  </h3>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="text-gray-600 mt-4 ml-10 text-base leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
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
