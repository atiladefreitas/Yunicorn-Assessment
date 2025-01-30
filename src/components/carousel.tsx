import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

export function CarouselDemo() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    <div className="hidden h-[20rem] w-full max-w-6xl rounded-md md:flex">
      <Carousel
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ loop: false }}
      >
        <CarouselContent className="h-[20rem]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="overflow-hidden">
              <div className="h-full overflow-hidden p-1">aaaa</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
