"use client";
import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/app/infos";

export function CarouselDemo() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    <div className="w-full max-w-6xl rounded-md">
      <Carousel
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <article className="flex flex-col items-center gap-12 p-4 text-center">
                <Image
                  width={250}
                  height={250}
                  src={testimonial.photo}
                  alt={testimonial.author}
                  loading="lazy"
                />

                <header className="flex flex-col items-center gap-1">
                  <Image
                    width={64}
                    height={56}
                    src={"/assets/icons/quote.svg"}
                    alt={testimonial.author}
                    loading="lazy"
                    className="mb-4"
                  />
                  <h3 className="font-gestura text-3xl">
                    {testimonial.author}
                  </h3>
                  <p className="font-segoe text-xl uppercase italic text-black/50">
                    {testimonial.title}
                  </p>
                </header>
                <blockquote className="font-segoe text-xl text-black/60">
                  {testimonial.text}
                </blockquote>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
