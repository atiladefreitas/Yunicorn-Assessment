import Image from "next/image";

import { testimonials } from "../infos";

function Testimonials() {
  return (
    <section
      className="grid min-h-[3rem] w-full grid-cols-3 gap-14"
      aria-label="Testimonials"
    >
      {testimonials.map((testimonial, index) => (
        <article
          key={index}
          className="flex flex-col items-center gap-16 text-center"
        >
          <Image
            width={250}
            height={250}
            src={testimonial.photo}
            alt={testimonial.author}
            loading="lazy"
          />
          <header className="flex flex-col gap-1">
            <h3 className="font-gestura text-3xl">{testimonial.author}</h3>
            <p className="font-segoe text-xl uppercase italic text-black/50">
              {testimonial.title}
            </p>
          </header>
          <blockquote className="font-segoe text-xl text-black/60">
            {testimonial.text}
          </blockquote>
        </article>
      ))}
    </section>
  );
}

export default Testimonials;
