"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const stats = [
  {
    title: "Sessions Completed",
    value: "5,000+",
    description:
      "Supporting individuals through stress, anxiety, and relationships",
  },
  {
    title: "Certified Therapists",
    value: "50+",
    description: "Qualified professionals across multiple specialties",
  },
  {
    title: "Satisfaction Rate",
    value: "90%+",
    description: "Users report improved well-being after consistent sessions",
  },
  {
    title: "Areas of Support",
    value: "10+",
    description:
      "Anxiety, depression, relationships, student stress, and more",
  },
];

const easeOutCubic = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutCubic,
    },
  },
};

const staggerCards: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export default function TrustSection() {
  return (
    <motion.section
      aria-labelledby="trust-section-heading"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#0D2B45_0%,#123753_28%,#1A1A1A_100%)] text-[#F5F5F5]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_9%,rgba(47,127,134,0.24),transparent_37%),radial-gradient(circle_at_86%_12%,rgba(13,43,69,0.48),transparent_43%),radial-gradient(circle_at_72%_80%,rgba(47,127,134,0.16),transparent_44%)]"
      />

      <div aria-hidden="true" className="watermark watermark--trust">
        <Image
          src="/logo.png"
          alt=""
          width={1400}
          height={1400}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pt-10 pb-24 sm:px-8 lg:pt-14 lg:pb-28">
        <motion.header
          variants={fadeUp}
          className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start"
        >
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-[#C2A96A] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#2F7F86]" />
              Why Choose Us
            </p>

            <h2
              id="trust-section-heading"
              className="max-w-4xl text-4xl leading-[0.95] tracking-[-2.46px] text-[#F5F5F5]/95 [font-family:var(--font-instrument-serif)] sm:text-6xl lg:text-7xl"
            >
              Real Support Starts When You Feel Heard and Understood
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-[#F5F5F5]/75 sm:text-lg lg:pt-10">
            We connect you with experienced, licensed therapists who understand
            your concerns and provide practical, evidence-based support.
          </p>
        </motion.header>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2"
          variants={staggerCards}
        >
          {stats.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{
                scale: 1.03,
                y: -6,
                boxShadow: "0 22px 48px rgba(47,127,134,0.2)",
              }}
              transition={{ type: "spring", stiffness: 220, damping: 19 }}
              className="rounded-3xl border border-[rgba(245,245,245,0.12)] bg-[rgba(245,245,245,0.05)] p-7 shadow-[0_12px_32px_rgba(0,0,0,0.3)] backdrop-blur-md sm:p-8"
            >
              <h3 className="text-xs font-medium tracking-[0.14em] text-[#2F7F86] uppercase">
                {item.title}
              </h3>

              <p className="mt-5 text-4xl font-semibold tracking-tight text-[#F5F5F5] sm:text-5xl">
                {item.value}
              </p>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#F5F5F5]/72 sm:text-base">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.aside
          variants={fadeUp}
          className="mt-16 rounded-3xl border border-[rgba(245,245,245,0.1)] bg-[linear-gradient(125deg,rgba(13,43,69,0.92)_0%,rgba(26,26,26,0.95)_57%,rgba(47,127,134,0.6)_100%)] p-6 shadow-[0_20px_48px_rgba(0,0,0,0.3)] sm:p-10"
          aria-label="Community newsletter"
        >
          <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-[#C2A96A] uppercase">
                <span className="h-2 w-2 rounded-full bg-[#C2A96A]" />
                Join Our Community
              </p>
              <h3 className="mt-4 max-w-xl text-3xl leading-tight tracking-[-0.02em] text-[#F5F5F5]/95 [font-family:var(--font-instrument-serif)] sm:text-4xl">
                Get Mental Health Insights That Actually Help
              </h3>
            </div>

            <form className="w-full" action="#" method="post">
              <label
                htmlFor="community-email"
                className="mb-2 block text-xs font-medium tracking-[0.12em] text-[#F5F5F5]/80 uppercase"
              >
                Email Address
              </label>
              <div className="flex flex-col gap-3">
                <input
                  id="community-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="h-12 rounded-2xl border border-[rgba(245,245,245,0.18)] bg-[rgba(245,245,245,0.06)] px-4 text-sm text-[#F5F5F5] placeholder:text-[#F5F5F5]/55 outline-none backdrop-blur-md transition-[box-shadow,border-color] focus:border-[#2F7F86] focus:shadow-[0_0_0_3px_rgba(47,127,134,0.22)]"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="h-12 rounded-2xl bg-[#C2A96A] px-5 text-sm font-semibold text-[#1A1A1A] shadow-[0_10px_24px_rgba(194,169,106,0.24)]"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
}