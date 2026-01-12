"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
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
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              Client Results
            </span>
            <h2 className="text-4xl md:text-5xl font-noto">
              What we found.
              <br />
              What we fixed.
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
              {/* Large quote mark */}
              <span className="absolute -top-10 -left-4 text-[120px] font-serif text-foreground/30 leading-none select-none">
                &quot;
              </span>

              <blockquote className="text-2xl md:text-3xl font-normal relative z-10">
                {testimonials[activeIndex].quote}
              </blockquote>

              {/* Author */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-secondary border border-border flex items-center justify-center text-lg font-bold">
                  {testimonials[activeIndex].author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
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
          <div className="lg:col-span-5">
            <div className="relative p-10 lg:p-14 rounded-3xl bg-secondary/50 border border-border">
              <div className="text-center">
                <span className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter gradient-text-accent">
                  {testimonials[activeIndex].metric}
                </span>
                <p className="text-lg text-muted-foreground mt-2">
                  {testimonials[activeIndex].metricLabel}
                </p>
              </div>
            </div>
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
