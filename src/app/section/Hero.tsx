"use client";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";

import { partners, navbar } from "../infos";
import Buttons from "@/components/buttons";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

function Hero() {
  return (
    <header
      className="flex h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-[#172329] px-4"
      style={{
        backgroundImage: "url('/assets/bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex h-full w-full max-w-7xl flex-col justify-between pb-20 pt-12">
        <nav
          className="flex items-center gap-4 md:justify-between"
          aria-label="Main navigation"
        >
          <Sheet>
            <SheetTrigger asChild>
              <Menu
                color="white"
                className="cursor-pointer md:hidden"
                aria-label="Mobile menu"
              />
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#172329] p-6">
              <SheetTitle className="font-gestura text-xl text-white">
                <Image
                  src="/assets/logos/company/logo.svg"
                  width={178}
                  height={34}
                  alt="Logo"
                  priority
                />
              </SheetTitle>
              <div className="flex flex-col gap-6 pt-12">
                {navbar.map((option, index) => (
                  <p
                    key={index}
                    className="flex cursor-pointer items-center gap-[6px] font-segoe text-white"
                  >
                    {option.title.toUpperCase()}
                    {option.popover && <ChevronDown className="text-white" />}
                  </p>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <Image
            src="/assets/logos/company/logo.svg"
            width={178}
            height={34}
            alt="Logo"
            priority
          />
          <div className="hidden max-w-5xl md:grid md:grid-cols-3 lg:grid-cols-6">
            {navbar.map((option, index) => (
              <p
                key={index}
                className="flex w-full cursor-pointer items-center justify-center gap-1 font-segoe text-white"
              >
                {option.title.toUpperCase()}
                {option.popover && <ChevronDown className="text-white/60" />}
              </p>
            ))}
          </div>
        </nav>

        <article className="text-center">
          <div className="flex flex-col items-center justify-center text-[#D6B271]">
            <span className="flex flex-col items-center justify-center gap-3">
              <div className="flex gap-[5px]">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <Image
                      key={index}
                      alt="star"
                      width={17}
                      height={16}
                      src="/assets/icons/star.svg"
                    />
                  ))}
              </div>
              <p className="font-segoe text-xl">SCREENINGDIENST</p>
            </span>
            <h1
              className="mb-4 text-center font-gestura text-4xl text-white md:text-7xl"
              style={{ textRendering: "optimizeLegibility" }}
            >
              Dein professionelles <br />
              <b className="text-[#D6B271]">Marktscreening</b>
            </h1>
            <p
              className="text-center text-xl text-white/85"
              style={{ textRendering: "optimizeSpeed" }}
            >
              Mit dem Screeningdienst erhältst Du immer die stärksten
              Trendaktien,
              <br />
              die Mario Lüddemann für sein Trading im Auge hat!
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <Buttons />
          </div>
        </article>

        <footer className="hidden w-full items-center justify-between md:flex">
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner.src}
              width={partner.width}
              height={partner.height}
              alt={partner.alt}
              className="object-contain"
              style={{ width: "auto", height: "auto" }}
            />
          ))}
        </footer>
        <footer className="grid w-full grid-cols-2 items-center justify-center md:hidden">
          {partners.map((partner, index) => (
            <span key={index} className="flex items-center justify-center py-6">
              <Image
                src={partner.src}
                width={partner.width}
                height={partner.height}
                alt={partner.alt}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </span>
          ))}
        </footer>
      </div>
    </header>
  );
}

export default Hero;
