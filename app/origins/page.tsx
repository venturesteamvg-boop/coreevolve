import Image from "next/image";
import Link from "next/link";

export default function OriginsPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#0D2B45_0%,#123753_28%,#1A1A1A_100%)] text-[#F5F5F5]">
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

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="w-full bg-white/90 text-[#1A1A1A] shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
            <Link
              href="/"
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
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-full border border-[#1A1A1A]/20 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-[#1A1A1A]/80 transition-colors hover:border-[#1A1A1A]/40 hover:text-[#1A1A1A]"
              >
                Back home
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-[#1A1A1A]/35 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-[#1A1A1A] transition-colors hover:border-[#1A1A1A]/60"
              >
                Get started
              </Link>
            </div>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-12 pt-10 sm:px-10">
          <main className="mt-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Our origins
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] tracking-tight [font-family:var(--font-instrument-serif)] sm:text-6xl">
            Everyone has a story worth keeping close.
          </h1>
          <p className="mt-6 text-base leading-7 text-white/80 sm:text-lg">
            CoreEvolve began as a quiet promise: to build a place where people can
            return to their own pace, their own voice, and their own signal.
            We care about the calm between the noise, the kind of growth that
            lasts longer than a trend, and the people who want to move forward
            without feeling rushed.
          </p>
          <p className="mt-6 text-base leading-7 text-white/70 sm:text-lg">
            This is a studio for gentle momentum. A home for the patient work of
            becoming.
          </p>
        </main>

          <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/60">
            <span>CoreEvolve Origins</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
