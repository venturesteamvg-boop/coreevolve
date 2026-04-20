"use client";

import { useState } from "react";
import Image from "next/image";
import BlogInsightsSection from "./components/BlogInsightsSection";
import FooterSection from "./components/FooterSection";
import FaqSection from "./components/FaqSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TrustSection from "./components/TrustSection";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#trust-section" },
    { label: "Blog", href: "#blog-section" },
    { label: "Reach Us", href: "#" },
  ];

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex min-h-screen flex-col">
          <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8">
            <a
              href="#"
              className="flex items-center gap-2.5 text-2xl tracking-tight text-[#1A1A1A] [font-family:var(--font-instrument-serif)] sm:gap-3 sm:text-3xl"
            >
              <Image
                src="/logo.png"
                alt="coreevolve logo"
                width={80}
                height={80}
                className="h-20 w-20 object-contain sm:h-13 sm:w-13"
                priority
              />
              <span className="tracking-[0.02em]">CoreEvolve</span>
            </a>

            <div className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#1A1A1A] transition-opacity hover:opacity-80"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="liquid-glass rounded-full px-3 py-2 text-[10px] tracking-[0.12em] text-white uppercase transition-transform duration-300 hover:scale-[1.03] md:hidden"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? "Close" : "Menu"}
              </button>

              <button
                type="button"
                className="liquid-glass rounded-full px-4 py-2 text-xs text-[#1A1A1A] transition-transform duration-300 hover:scale-[1.03] sm:px-6 sm:py-2.5 sm:text-sm"
              >
                Signup
              </button>
            </div>
          </nav>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 md:hidden">
            {isMobileMenuOpen ? (
              <div
                id="mobile-nav"
                className="liquid-glass mb-2 grid grid-cols-2 gap-2 rounded-2xl p-3"
              >
                {navLinks.map((link) => (
                  <a
                    key={`mobile-${link.label}`}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-xl bg-white/5 px-3 py-2 text-center text-[11px] tracking-[0.08em] text-[#1A1A1A] uppercase transition-colors hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-32 pb-58 text-center">
            <h1 className="animate-fade-rise max-w-7xl text-5xl leading-[0.95] tracking-[-2.46px] text-[#1A1A1A] [font-family:var(--font-instrument-serif)] sm:text-7xl md:text-8xl">
              You Don&rsquo;t Have to Handle It Alone
            </h1>
          </main>

          <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-center px-6 pb-12 sm:px-8 sm:pb-14">
            <button
              type="button"
              className="liquid-glass animate-fade-rise-delay-2 rounded-full px-14 py-5 text-base text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <div id="trust-section">
        <TrustSection />
      </div>
      <div id="blog-section">
        <BlogInsightsSection />
      </div>
      <FaqSection />
      <TestimonialsSection />
      <FooterSection />
    </>
  );
}
