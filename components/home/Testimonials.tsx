"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote:
        "They compromised our domain controller in 4 hours. Our MSSP had been giving us green reports for two years. That's the difference between compliance testing and real offensive security.",
      author: "CISO",
      role: "",
      company: "Fortune 500 Financial Institution",
      metric: "4h",
      metricLabel: "Time to domain admin",
    },
    {
      quote:
        "Cynical's researchers found an auth bypass in our API that would have exposed 2M customer records. Our previous pen test vendor ran the same test six months prior and missed it.",
      author: "VP of Engineering",
      role: "",
      company: "Series D Fintech",
      metric: "2M",
      metricLabel: "Records at risk",
    },
    {
      quote:
        "We thought we had good visibility into our attack surface. Vigile discovered 340 leaked credentials and 12,000 assets we didn't know existed. We had shadow IT everywhere.",
      author: "Head of Security",
      role: "",
      company: "National Airline",
      metric: "340",
      metricLabel: "Credential leaks found",
    },
    {
      quote:
        "When we got hit with ransomware, their IR team was on-site in 3 hours. They contained the spread, identified the initial access vector, and had us operational in 48 hours.",
      author: "CTO",
      role: "",
      company: "Healthcare Technology",
      metric: "48h",
      metricLabel: "Full recovery",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-md text-muted-foreground uppercase tracking-widest mb-4 block">
              Client Results
            </span>
            <h2 className="text-4xl md:text-6xl">
              What we found.
              <br />
              <span className="text-slate-500">What we fixed.</span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-all"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-all"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Quote */}
          <div className="lg:col-span-7">
            <div className="relative">
              <span className="absolute -top-12 -left-6 text-8xl font-serif text-primary opacity-20 select-none">
                “
              </span>
              <blockquote className="text-2xl md:text-3xl font-normal relative z-10 font-aeonik">
                {testimonials[activeIndex].quote}
              </blockquote>
              {/* Author */}
              <div className="mt-10 flex items-center gap-4">
                <Image
                  src={"/people/guy.png"}
                  width={48}
                  height={48}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                />
                <div>
                  <p className="font-semibold text-lg">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Metric */}
          <div className="lg:col-span-5 relative">
            <div className="glow-border relative z-20 rounded-2xl p-8 lg:p-12 overflow-hidden aspect-square flex flex-col items-center justify-center shadow-2xl bg-white/5 dark:bg-slate-900/50 backdrop-blur-sm border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center metric-bg-text font-display font-extrabold text-slate-900 dark:text-white">
                48
              </div>
              <div className="relative z-10 text-center space-y-2">
                <div className="text-7xl lg:text-9xl font-display font-extrabold tracking-tighter text-[#3b82f6]">
                  {testimonials[activeIndex].metric}
                </div>
                <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#3b82f6]">
                  {testimonials[activeIndex].metricLabel}
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div
                  className="w-64 h-64 border border-primary rounded-full animate-ping"
                  style={{ animationDuration: "4s" }}
                ></div>
                <div className="absolute w-48 h-48 border border-primary/40 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full z-10 pointer-events-none"></div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="mt-16 flex items-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveIndex(index);
              }}
              className="group relative h-1 flex-1 max-w-24 bg-border rounded-full overflow-hidden"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <div
                className={`absolute inset-y-0 left-0 bg-foreground rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-full"
                    : "w-0 group-hover:w-full group-hover:bg-foreground/50"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-10">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-all"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-all"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
