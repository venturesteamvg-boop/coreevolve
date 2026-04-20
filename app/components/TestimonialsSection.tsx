/* eslint-disable @next/next/no-img-element */

import { Star } from "lucide-react";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Robert Fox",
    role: "CEO & Founder at AcmeCorp",
    avatar: "https://i.pravatar.cc/96?img=11",
    feedback:
      "Since onboarding with CoreEvolve, our support team resolves emotional-care requests faster and with far more empathy than before.",
  },
  {
    id: 2,
    name: "Guy Hawkins",
    role: "CEO & Founder at AcmeCorp",
    avatar: "https://i.pravatar.cc/96?img=12",
    feedback:
      "The platform helped us automate repetitive check-ins while keeping conversations warm and personal for every user.",
  },
  {
    id: 3,
    name: "Jacob Jones",
    role: "CEO & Founder at AcmeCorp",
    avatar: "https://i.pravatar.cc/96?img=14",
    feedback:
      "We now engage users proactively, and our conversion from free consultations to paid sessions improved significantly.",
  },
  {
    id: 4,
    name: "Kristin Watson",
    role: "CEO & Founder at AcmeCorp",
    avatar: "https://i.pravatar.cc/96?img=23",
    feedback:
      "For a distributed team like ours, the multilingual support has made communication with clients much smoother.",
  },
  {
    id: 5,
    name: "Cody Fisher",
    role: "CEO & Founder at AcmeCorp",
    avatar: "https://i.pravatar.cc/96?img=31",
    feedback:
      "Every interaction feels tailored to our brand voice. Users consistently mention how understood they feel after sessions.",
  },
  {
    id: 6,
    name: "Albert Flores",
    role: "CEO & Founder at AcmeCorp",
    avatar: "https://i.pravatar.cc/96?img=36",
    feedback:
      "We started small, but scaling has been effortless. The workflow handles thousands of touchpoints without friction.",
  },
  {
    id: 7,
    name: "Ralph Edwards",
    role: "CEO & Founder at AcmeCorp",
    avatar: "https://i.pravatar.cc/96?img=47",
    feedback:
      "The analytics views are practical and clear. They help us make confident product decisions week after week.",
  },
  {
    id: 8,
    name: "Floyd Miles",
    role: "CEO & Founder at AcmeCorp",
    avatar: "https://i.pravatar.cc/96?img=53",
    feedback:
      "Our users appreciate the accessibility features, especially voice support, which made our service more inclusive.",
  },
];

const testimonialColumns = Array.from({ length: 4 }, (_, columnIndex) =>
  testimonials.filter((_, testimonialIndex) => testimonialIndex % 4 === columnIndex)
);

type TestimonialCardProps = {
  name: string;
  role: string;
  avatar: string;
  feedback: string;
};

function TestimonialCard({
  name,
  role,
  avatar,
  feedback,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "relative w-[15.5rem] overflow-hidden rounded-xl border border-slate-200/80 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)]",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(15,23,42,0.12)]"
      )}
    >
      <div className="flex items-start gap-3">
        <img
          src={avatar}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div>
          <figcaption className="text-sm font-semibold text-[#111827]">
            {name}
          </figcaption>
          <p className="text-[11px] text-[#6B7280]">{role}</p>
        </div>
      </div>

      <blockquote className="mt-4 text-sm leading-6 text-[#374151]">
        {feedback}
      </blockquote>

      <div className="mt-4 flex items-center gap-1 text-[#FBBF24]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={`${name}-star-${index}`}
            className="h-3.5 w-3.5 fill-current"
            strokeWidth={1.8}
          />
        ))}
      </div>
    </figure>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-20 text-[#111827] sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-[0.95] tracking-[-2.46px] text-[#0F172A] [font-family:var(--font-instrument-serif)] sm:text-5xl lg:text-6xl">
            You&apos;re Not Alone, Hear From Our Community
          </h2>
        </header>

        <div className="relative mt-14">
          <div className="relative h-[620px] overflow-hidden md:hidden">
            <Marquee pauseOnHover vertical className="h-full [--duration:30s]">
              {testimonials.map((item) => (
                <TestimonialCard
                  key={`mobile-${item.id}`}
                  name={item.name}
                  role={item.role}
                  avatar={item.avatar}
                  feedback={item.feedback}
                />
              ))}
            </Marquee>
          </div>

          <div className="relative hidden h-[520px] grid-cols-2 gap-3 overflow-hidden md:grid lg:h-[560px] lg:grid-cols-4">
            {testimonialColumns.map((column, columnIndex) => (
              <Marquee
                key={`column-${columnIndex}`}
                reverse={columnIndex % 2 === 1}
                pauseOnHover
                vertical
                className={cn(
                  "h-full [--duration:28s]",
                  columnIndex > 1 && "hidden lg:flex"
                )}
              >
                {column.map((item) => (
                  <TestimonialCard
                    key={`column-${columnIndex}-item-${item.id}`}
                    name={item.name}
                    role={item.role}
                    avatar={item.avatar}
                    feedback={item.feedback}
                  />
                ))}
              </Marquee>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F8FAFC] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
        </div>
      </div>
    </section>
  );
}