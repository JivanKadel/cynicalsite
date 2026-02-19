"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { testimonials } from "@/data/testimonials.data";

const Testimonials = () => {
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });

  return (
    <section className="py-12 lg:mt-12 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-center mb-12">
          <div>
            <p className="text-4xl md:text-6xl font-aeonik text-center">
              Trusted by Security & Technology Leader
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplay]}
          onMouseEnter={() => autoplay.stop()}
          onMouseLeave={() => autoplay.play()}
        >
          <CarouselContent className="-ml-4 items-stretch">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.author}
                className={`md:basis-1/2 lg:basis-1/3 pl-4 py-4 flex flex-col items-stretch`}
              >
                <article className="p-2 sm:p-4 flex-1 rounded-2xl flex flex-col bg-card border-2 border-border/10">
                  <div className="mb-0 sm:mb-2">
                    <span className="text-6xl text-gray-400 font-serif leading-none opacity-60">
                      “
                    </span>
                  </div>
                  <p className="flex-1 self-center text-gray-800 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                    “
                    {testimonial.quote.map((part, index) => (
                      <span key={index}>
                        {part}
                        {index < testimonial.quote.length - 1 && <br />}
                      </span>
                    ))}
                    ”
                  </p>

                  <div className="flex justify-end">
                    <span className="text-6xl text-gray-400 font-serif leading-none opacity-60">
                      ”
                    </span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-4 mt-auto">
                    <div className="relative inline-block">
                      <Image
                        alt={testimonial.author}
                        width={50}
                        height={50}
                        className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover"
                        src={testimonial.image}
                      />
                    </div>
                    <div className="w-full flex justify-between items-center gap-1 sm:gap-2">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-slate-100 text-sm sm:text-lg">
                          {testimonial.author}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-800 dark:text-slate-300">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                      <div>
                        <Image
                          src={testimonial.brandLogo}
                          alt={`${testimonial.company}-logo`}
                          width={80}
                          height={50}
                          className={`w-16 sm:w-20 h-auto ${
                            testimonial.whiteLogo
                              ? "object-contain bg-black p-1"
                              : "object-contain"
                          } dark:bg-none`}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6 sm:-left-12" />
          <CarouselNext className="-right-6 sm:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
