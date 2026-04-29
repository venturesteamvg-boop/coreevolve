"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  const navLinks = [
    { label: "Origins", href: "/origins" },
    { label: "Blog", href: "#blog-section" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex min-h-screen flex-col">
          <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8">
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
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#1A1A1A] transition-opacity hover:opacity-80"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="liquid-glass-dark rounded-full px-3 py-2 text-[10px] tracking-[0.12em] text-[#1A1A1A] uppercase transition-transform duration-300 hover:scale-[1.03] md:hidden"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? "Close" : "Menu"}
              </button>

              <Link
                href="/login"
                className="liquid-glass-dark rounded-full px-4 py-2 text-xs text-[#1A1A1A] transition-transform duration-300 hover:scale-[1.03] sm:px-6 sm:py-2.5 sm:text-sm"
              >
                Get Started
              </Link>
            </div>
          </nav>

          <div className="relative z-20 mx-auto w-full max-w-7xl px-6 sm:px-8 md:hidden">
            {isMobileMenuOpen ? (
              <div
                id="mobile-nav"
                className="liquid-glass mb-2 grid grid-cols-2 gap-2 rounded-2xl p-3"
              >
                {navLinks.map((link) => (
                  <Link
                    key={`mobile-${link.label}`}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-xl bg-white/5 px-3 py-2 text-center text-[11px] tracking-[0.08em] text-[#1A1A1A] uppercase transition-colors hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-0 -mt-80 text-center">
        <h1 className="animate-fade-rise max-w-7xl text-5xl leading-[0.95] tracking-[-2.46px] text-[#1A1A1A] [font-family:var(--font-instrument-serif)] sm:text-7xl md:text-8xl">
          You Don&rsquo;t Have to Handle It Alone
        </h1>
      </main>
      <div className="mt-auto grid w-full gap-3 px-6 pb-16 text-sm text-white sm:grid-cols-3 sm:items-center sm:px-8">
          <a href="#" className="justify-self-start no-underline hover:text-white/80">
            Terms and conditions
          </a>
          <p className="justify-self-center text-center text-white/80">© 2026 coreevolve. All Rights Reserved</p>
          <a href="#" className="justify-self-start no-underline hover:text-white/80 sm:justify-self-end">
            Privacy Policy
          </a>
        </div>
    </div>
    <p
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-[25%] text-center text-[clamp(5rem,18vw,16rem)] leading-none font-semibold tracking-tight bg-gradient-to-t from-white/40 via-white/20 to-transparent bg-clip-text text-transparent"
    >
      CoreEvolve
    </p>
  </section>
    </>
  );
}
