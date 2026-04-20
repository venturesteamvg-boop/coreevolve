const navLinks = ["Platform", "Use Cases", "Resources", "Services", "About"];

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#F8FAFC] pt-24 pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0)_0%,rgba(220,230,255,0.40)_60%,rgba(200,215,255,0.6)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[100px] left-1/2 h-[400px] w-[800px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(120,150,255,0.25),transparent_70%)] blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/45 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr_1fr] lg:items-center">
          <div className="space-y-7 text-[#4B5563]">
            <div className="flex items-center gap-5">
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#3F4B63] transition-colors hover:text-[#111827]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[#3F4B63] transition-colors hover:text-[#111827]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X / Twitter"
                className="text-[#3F4B63] transition-colors hover:text-[#111827]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4l16 16" />
                  <path d="M20 4L4 20" />
                </svg>
              </a>
            </div>

            <a
              href="mailto:hello@coreevolve.io"
              className="inline-block text-4xl font-medium tracking-tight text-[#1F2937] transition-opacity hover:opacity-85 md:text-[2rem]"
            >
              hello@coreevolve.io
            </a>

            <address className="not-italic text-lg leading-8 text-[#6B7280]">
              <p>Harju maakond, Tallinn,</p>
              <p>Kesklinna linnaosa,</p>
              <p>Vesivarava tn 50-201, 10152</p>
            </address>
          </div>

          <div className="relative mx-auto flex min-h-[230px] w-full max-w-xl items-center justify-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-2 top-1/2 hidden h-40 w-28 -translate-x-8 -translate-y-1/2 rounded-2xl bg-[radial-gradient(circle,_rgba(116,143,209,0.55)_1.2px,_transparent_1.2px)] bg-[size:12px_12px] opacity-45 md:block"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-2 top-1/2 hidden h-40 w-28 translate-x-8 -translate-y-1/2 rounded-2xl bg-[radial-gradient(circle,_rgba(116,143,209,0.55)_1.2px,_transparent_1.2px)] bg-[size:12px_12px] opacity-45 md:block"
            />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-20 top-1/2 hidden h-28 w-6 -translate-y-1/2 rounded-l-2xl border-l border-y border-[#B6C4E7] md:block"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-20 top-1/2 hidden h-28 w-6 -translate-y-1/2 rounded-r-2xl border-r border-y border-[#B6C4E7] md:block"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[calc(50%-10.5rem)] top-1/2 hidden h-px w-14 -translate-y-1/2 bg-[#BAC8E8] md:block"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-[calc(50%-10.5rem)] top-1/2 hidden h-px w-14 -translate-y-1/2 bg-[#BAC8E8] md:block"
            />

            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-xl bg-[#111827] px-7 py-3.5 text-lg font-medium text-[#F9FAFB] shadow-[0_14px_30px_rgba(17,24,39,0.22)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get a Demo
              <span className="rounded-full bg-[#3A78F7] px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white uppercase">
                FREE
              </span>
            </button>
          </div>

          <nav aria-label="Footer" className="justify-self-end text-right">
            <ul className="space-y-3 text-4xl leading-tight text-[#374151] md:text-[2rem]">
              {navLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-opacity hover:opacity-75">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 grid gap-3 text-sm text-[#6B7280] sm:grid-cols-3 sm:items-center">
          <a href="#" className="justify-self-start underline decoration-[#9AA3B5] underline-offset-2 hover:text-[#374151]">
            Terms and conditions
          </a>
          <p className="justify-self-center text-center">© 2026 coreevolve. All Rights Reserved</p>
          <a href="#" className="justify-self-start underline decoration-[#9AA3B5] underline-offset-2 hover:text-[#374151] sm:justify-self-end">
            Privacy Policy
          </a>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-[25%] text-center text-[clamp(5rem,18vw,16rem)] leading-none font-semibold tracking-tight text-[#7A9BDD]/16"
        >
        CoreEvolve
        </p>
    </footer>
  );
}