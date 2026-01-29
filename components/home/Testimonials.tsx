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

const Testimonials = () => {
  const testimonials = [
    {
      quote: [
        "Cynical Technology team brings both levels of professionalism and skill that have satisfied us beyond expectations.",
        "Their team is communicative and responsive, making them a reliable and trustworthy partner.",
      ],
      author: "Raghu Nath Bhandari",
      role: "VP Tech",
      company: "IME Group",
      image: "/testimonials/mr_raghu_ime_group.jpg",
      bgColor: "bg-card-blue",
    },
    {
      quote: [
        "Naresh and the team have submitted reports to our team over the last few months. ",
        "Their reports are extremely thorough and always include steps to replicate the issues and also include possible solutions to implement. We appreciate them for all the hard work and diligence they have provided.",
      ],
      author: "Jon Tsai",
      role: "Product Manager",
      company: "GoFundMe",
      image: "/testimonials/mr_jon_gofundme.jpg",
      bgColor: "bg-card-yellow",
    },
    {
      quote: [
        "Cynical Technology has evolved to be our most trustworthy cyber security partner for business in the last few years. Their professionalism and dedications are unmatched. Thanks for the Support.",
      ],
      author: "Diwas Sapkota",
      role: "CEO",
      company: "FonePay",
      image: "/testimonials/mr_diwas_fonepay.jpg",
      bgColor: "bg-card-green",
    },
    {
      quote: [
        "A  Team of young cyber security professionals who are dedicated to strengthen Nepalese cyberspace. It has been a pleasant experience working with them in F1soft.",
      ],
      author: "Aslam Ali",
      role: "Head of SOC",
      company: "F1Soft",
      image: "/testimonials/mr_aslam_f1soft.png",

      bgColor: "bg-card-orange",
    },
    {
      quote: [
        "Cynical Technology is really good at what they do!  Professional penetration test with very good preliminary discussion and an impressive presentation of the vulnerabilities and results. We are more secure because of the work they do for us.",
      ],
      author: "Ravi Shakya",
      role: "CTO",
      company: "eSewa Fonepay Pvt. Ltd.",
      image: "/testimonials/mr_ravi_esewa.jpg",
      bgColor: "bg-card-purple",
    },
    {
      quote: [
        "Cynical Technology Provided the best services for us. They delivered what they had promised. They had kept us updated on progress and delivered the reports on time. ",
      ],
      author: "Er. Prabin Chauhan",
      role: "CTO",
      company: "IME Pay",
      image: "/testimonials/mr_prabin_nitc.jpg",
      bgColor: "bg-card-pink",
    },
  ];

  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-center mb-12">
          <div>
            <span className="text-center text-md text-muted-foreground uppercase tracking-widest mb-4 block">
              Client Results
            </span>
            <h2 className="text-4xl md:text-6xl text-center">
              What we found.
              <br />
              <span className="text-slate-500 text-center">What we fixed.</span>
            </h2>
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
                <article
                  // className={`p-4 flex-1 rounded-2xl flex flex-col ${testimonial.bgColor}`}
                  className="p-4 flex-1 rounded-2xl flex flex-col bg-card border-2 border-border/10"
                >
                  <div className="mb-0 sm:mb-2">
                    <span className="text-6xl text-gray-400 font-serif leading-none opacity-60">
                      “
                    </span>
                  </div>
                  <p className="flex-1 self-center text-gray-800 dark:text-slate-300 text-lg leading-relaxed mb-6">
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
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative inline-block">
                      <Image
                        alt={testimonial.author}
                        width={50}
                        height={50}
                        className="w-14 h-14 rounded-full object-cover"
                        src={testimonial.image}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-slate-100 text-lg">
                        {testimonial.author}
                      </h3>
                      <p className="text-sm text-gray-800 dark:text-slate-300">
                        {testimonial.role}, {testimonial.company}
                      </p>
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
