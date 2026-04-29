"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Component as SocialLoginIcons } from "@/components/ui/demo";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const hasErrors = isSignUp
      ? !trimmedUsername || !trimmedEmail || !trimmedPassword
      : !trimmedEmail || !trimmedPassword;

    setShowErrors(hasErrors);

    if (hasErrors) {
      return;
    }

    console.log(isSignUp ? "signup submit" : "login submit", {
      username: isSignUp ? trimmedUsername : undefined,
      email: trimmedEmail,
      password: trimmedPassword,
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#0D2B45_0%,#123753_28%,#1A1A1A_100%)] text-[#F5F5F5]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_9%,rgba(47,127,134,0.24),transparent_37%),radial-gradient(circle_at_86%_12%,rgba(13,43,69,0.48),transparent_43%),radial-gradient(circle_at_72%_80%,rgba(47,127,134,0.16),transparent_44%)]"
      />

      <div
        aria-hidden="true"
        className="watermark watermark--trust !left-[-15%] !right-auto"
      >
        <Image
          src="/logo.png"
          alt=""
          width={1400}
          height={1400}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
        <div className="relative w-full max-w-[420px]">
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            <span className="text-lg">&larr;</span>
            Back
          </Link>
          <div className="relative rounded-[18px] border border-white/20 bg-[linear-gradient(125deg,rgba(13,43,69,0.92)_0%,rgba(26,26,26,0.95)_57%,rgba(47,127,134,0.6)_100%)] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45),inset_0_1px_rgba(255,255,255,0.25)] backdrop-blur-2xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
          <div className="relative z-10">
            <h1 className="mb-2 text-3xl font-normal tracking-wide text-white [font-family:var(--font-instrument-serif)]">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h1>
            <p className="mb-8 text-[13px] font-light text-[#C2A96A]">
              {isSignUp
                ? "Create your account to get started"
                : "Keep it all together and you'll be fine"}
            </p>

            <form className="flex flex-col" onSubmit={handleSubmit}>
              {isSignUp ? (
                <div className="relative mb-3">
                  <input
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    type="text"
                    placeholder="Username"
                    className="h-11 w-full rounded-[4px] border border-white/20 bg-transparent px-4 text-[13px] font-mono text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none transition-colors"
                  />
                  {showErrors && !username.trim() ? (
                    <p className="mt-2 text-xs text-pink-200">Username is required.</p>
                  ) : null}
                </div>
              ) : null}

              <div className="relative mb-3">
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="text"
                  placeholder={isSignUp ? "Email" : "Email or Phone"}
                  className="h-11 w-full rounded-[4px] border border-white/20 bg-transparent px-4 text-[13px] font-mono text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none transition-colors"
                />
                {showErrors && !email.trim() ? (
                  <p className="mt-2 text-xs text-pink-200">Email is required.</p>
                ) : null}
              </div>

              <div className="relative mb-3">
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="h-11 w-full rounded-[4px] border border-white/20 bg-transparent pl-4 pr-16 text-[13px] font-mono text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[13px] font-mono text-white/60 transition-colors hover:text-white focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                {showErrors && !password.trim() ? (
                  <p className="mt-2 text-xs text-pink-200">Password is required.</p>
                ) : null}
              </div>

              {!isSignUp ? (
                <div className="mb-6 mt-1 flex justify-start">
                  <a
                    href="#"
                    className="text-[13px] text-white/60 transition-colors hover:text-white"
                  >
                    Forgot Password
                  </a>
                </div>
              ) : (
                <div className="mb-6 mt-1" />
              )}

              <button
                type="submit"
                className="h-11 w-full rounded-[4px] bg-[#C2A96A] text-sm font-medium text-[#1A1A1A] transition-opacity hover:opacity-90"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/15" />
              <span className="text-[13px] text-white/60">or</span>
              <div className="h-px flex-1 bg-white/15" />
            </div>

            <div className="text-center">
              <p className="text-[13px] font-mono text-white/70">
                {isSignUp ? "Sign up using:" : "Sign in using:"}
              </p>
              <div className="mt-3 flex justify-center">
                <SocialLoginIcons />
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-[13px] font-mono text-white/70">
                {isSignUp ? "Already have an account?" : "New to coreevolve?"}
                <button
                  type="button"
                  onClick={() => setIsSignUp((prev) => !prev)}
                  className="ml-1 font-medium text-[#C2A96A] transition-colors hover:text-[#D7C07E]"
                >
                  {isSignUp ? "Sign In" : "Join Now"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
