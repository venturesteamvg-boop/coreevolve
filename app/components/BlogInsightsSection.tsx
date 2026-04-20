/* eslint-disable @next/next/no-img-element */

import { ArrowLeft, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "How to Manage Anxiety in Daily Life",
    date: "April 2026",
    readTime: "5 min read",
    description:
      "Simple techniques to stay calm and in control during stressful moments.",
    imageUrl:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Understanding Burnout Before It's Too Late",
    date: "April 2026",
    readTime: "5 min read",
    description:
      "Recognize early signs of burnout and learn how to recover effectively.",
    imageUrl:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Why Talking Helps More Than You Think",
    date: "April 2026",
    readTime: "5 min read",
    description:
      "Explore how open conversations and therapy improve mental well-being.",
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Building Better Relationships Through Communication",
    date: "April 2026",
    readTime: "5 min read",
    description:
      "Improve how you connect with others through simple communication shifts.",
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
  },
];

export default function BlogInsightsSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f7f5] p-8 font-sans text-gray-800 md:p-16 lg:p-24">
      <div aria-hidden="true" className="watermark watermark--blog">
        <img src="/logo.png" alt="" className="h-auto w-full object-contain" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="space-y-4">
            <span className="text-sm tracking-wide text-gray-400">Blogs</span>
            <h2 className="max-w-2xl font-serif text-4xl leading-tight font-light tracking-wide text-[#4A6B57] md:text-5xl lg:text-6xl">
              Insights for a Healthier Mind
            </h2>
          </div>

          <div className="flex items-center gap-4 text-gray-800">
            <button
              type="button"
              className="cursor-pointer rounded-full p-2 transition-colors hover:bg-gray-200/50"
              aria-label="Previous posts"
            >
              <ArrowLeft strokeWidth={1} className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-full p-2 transition-colors hover:bg-gray-200/50"
              aria-label="Next posts"
            >
              <ArrowRight strokeWidth={1} className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article key={post.id} className="group flex flex-col">
              <div className="mb-6 aspect-square overflow-hidden rounded-sm bg-white shadow-sm">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mb-3 flex items-center gap-2 text-xs text-gray-500">
                <time>{post.date}</time>
                <span>&bull;</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="mb-3 font-serif text-2xl leading-snug font-normal text-[#4A6B57]">
                {post.title}
              </h3>

              <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-500 line-clamp-3">
                {post.description}
              </p>

              <a
                href="#"
                className="group/link mt-auto inline-flex items-center text-sm font-medium text-gray-800 transition-colors hover:text-[#4A6B57]"
              >
                Read more
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1"
                  strokeWidth={1.5}
                />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <button
            type="button"
            className="group/btn inline-flex items-center justify-center rounded-sm border border-gray-400 px-6 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-200/50 hover:text-gray-900"
          >
            View more blogs
            <ArrowRight
              className="ml-3 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
              strokeWidth={1}
            />
          </button>
        </div>
      </div>
    </section>
  );
}