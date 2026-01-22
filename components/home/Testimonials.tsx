"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote: [
        "Cynical Technology team brings both levels of professionalism and skill that have satisfied us beyond expectations.",
        "Their team is communicative and responsive, making them a reliable and trustworthy partner.",
      ],
      author: "Raghu Nath Bhandari",
      role: "VP Tech",
      company: "IME Group",
      metric: "4h",
      metricLabel: "Time to domain admin",
      image: "/testimonials/mr_raghu_ime_group.jpg",
    },
    {
      quote: [
        "Naresh and the team have submitted reports to our team over the last few months. ",
        "Their reports are extremely thorough and always include steps to replicate the issues and also include possible solutions to implement. We appreciate them for all the hard work and diligence they have provided.",
      ],
      author: "Jon Tsai",
      role: "Product Manager",
      company: "GoFundMe",
      metric: "2M",
      metricLabel: "Records at risk",
      image: "/testimonials/mr_jon_gofundme.jpg",
    },
    {
      quote: [
        "Cynical Technology has evolved to be our most trustworthy cyber security partner for business in the last few years. Their professionalism and dedications are unmatched. Thanks for the Support.",
      ],
      author: "Diwas Sapkota",
      role: "CEO",
      company: "FonePay",
      metric: "340",
      metricLabel: "Credential leaks found",
      image: "/testimonials/mr_diwas_fonepay.jpg",
    },
    {
      quote: [
        "A  Team of young cyber security professionals who are dedicated to strengthen Nepalese cyberspace. It has been a pleasant experience working with them in F1soft.",
      ],
      author: "Aslam Ali",
      role: "Head of SOC",
      company: "F1Soft",
      metric: "48h",
      metricLabel: "Full recovery",
      image: "/testimonials/mr_aslam_f1soft.png",
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
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
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
              <span className="absolute -top-12 -left-6 text-8xl font-serif text-primary opacity-30 select-none">
                “
              </span>
              <blockquote className="text-2xl md:text-3xl text-foreground/70 relative z-10 font-aeonik mt-8">
                {testimonials[activeIndex].quote.map((q, i) => (
                  <p key={i}>{q}</p>
                ))}
                {/* {testimonials[activeIndex].quote} */}
              </blockquote>
              {/* Author */}
              <div className="mt-10 flex items-center gap-4">
                <Image
                  src={testimonials[activeIndex].image}
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
          {/* <div className="lg:col-span-5 relative">
            <div className="glow-border relative z-20 rounded-2xl p-8 lg:p-12 overflow-hidden aspect-square flex flex-col items-center justify-center shadow-2xl bg-white/5 dark:bg-slate-900/50 backdrop-blur-sm border border-white/10">
              <div className="relative z-10 text-center space-y-2">
                <div className="text-7xl lg:text-9xl font-display font-extrabold tracking-tighter text-blue">
                  {testimonials[activeIndex].metric}
                </div>
                <p className="text-sm font-bold tracking-[0.3em] uppercase text-blue">
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
          </div> */}
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
