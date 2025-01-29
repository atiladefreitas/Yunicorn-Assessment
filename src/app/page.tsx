import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import Star from "@/components/star";

const partners = [
  {
    src: "/assets/logos/partners/forbes.png",
    width: 104,
    height: 26,
    alt: "Forbes logo",
  },
  {
    src: "/assets/logos/partners/hamburg.png",
    width: 137,
    height: 26,
    alt: "Hamburg logo",
  },
  {
    src: "/assets/logos/partners/borse.png",
    width: 88,
    height: 41,
    alt: "Börse logo",
  },
  {
    src: "/assets/logos/partners/focus.png",
    width: 108,
    height: 40,
    alt: "Focus logo",
  },
];

const NavOptions = [
  { title: "Home", popover: false },
  { title: "For beginners", popover: false },
  { title: "About us", popover: true },
  { title: "Training", popover: true },
  { title: "News", popover: true },
  { title: "success stories", popover: true },
];

export default function Home() {
  return (
    <>
      <section
        className="flex h-screen w-screen flex-col items-center justify-center bg-[#172329] px-4"
        style={{ backgroundImage: "url('/assets/bg.png')" }}
      >
        <main className="flex h-full w-full max-w-7xl flex-col justify-between pb-20 pt-12">
          <nav className="flex justify-between">
            <Image
              src="/assets/logos/company/luddemann.png"
              width={178}
              height={34}
              alt="Logo"
            />
            <div>
              <Menu color="white" />
            </div>
            <div className="hidden gap-[2.8rem] md:flex">
              {NavOptions.map((option) => (
                <p
                  key={`${option}`}
                  className="flex cursor-pointer items-center gap-[6px] font-segoe-ui text-white"
                >
                  {option.title.toUpperCase()}
                  {option.popover && <ChevronDown className="text-white/60" />}
                </p>
              ))}
            </div>
          </nav>
          <div>
            <div className="flex flex-col items-center justify-center text-[#D6B271]">
              <span className="flex flex-col items-center justify-center gap-3">
                <div className="flex gap-[5px]">
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <Image
                        key={_}
                        alt="star"
                        width={17}
                        height={16}
                        src="/assets/icons/star.svg"
                      />
                    ))}
                </div>
                <p className="font-segoe-ui font-[18px]">SCREENINGDIENST</p>
              </span>
              <h1 className="mb-4 text-center font-['Gestura_Display'] text-4xl text-white md:text-7xl">
                Dein professionelles <br />
                <b className="text-[#D6B271]">Marktscreening</b>
              </h1>
              <p className="text-center text-xl text-white/85">
                Mit dem Screeningdienst erhältst Du immer die stärksten
                Trendaktien,
                <br />
                die Mario Lüddemann für sein Trading im Auge hat!
              </p>
            </div>

            <div className="mt-12 flex items-center justify-center gap-4">
              <Button variant={"trading"}>
                <Image
                  src="/assets/icons/trading.svg"
                  width={24}
                  height={24}
                  alt="Arrow right"
                />
                <p className="bg-gradient-to-b from-white to-[#BFE7FF] bg-clip-text text-transparent">
                  Trading
                </p>
              </Button>
              <Button variant={"investment"}>
                <Image
                  src="/assets/icons/investment.svg"
                  width={24}
                  height={24}
                  alt="Arrow right"
                />
                <p className="bg-gradient-to-b from-[#A5906C] to-[#99763A] bg-clip-text text-transparent">
                  Investment
                </p>
              </Button>
            </div>
          </div>

          <div className="flex h-fit w-full items-center justify-between">
            {partners.map((partner) => (
              <Image
                key={partner.src}
                src={partner.src}
                width={partner.width}
                height={partner.height}
                alt={partner.alt}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            ))}
          </div>
        </main>
      </section>
      <section className="full flex min-h-screen justify-center bg-[#FDFBF4] px-4 pt-24">
        <main className="w-full max-w-7xl">
          <div className="flex h-[2.8rem] items-center gap-[18px]">
            <Image
              src="/assets/logos/company/icon.svg"
              width={27}
              height={27}
              alt="Logo"
            />
            <Separator orientation="vertical" />
            <p className="font-segoe-ui text-[#002533]/25">OVERVIEW</p>
          </div>

          <div className="mb-24 mt-8 flex flex-col gap-[40px] md:mb-44">
            <h1 className="font-['Gestura_Display'] text-5xl leading-none text-[#303F48] md:text-8xl">
              Richtige Aktie,
              <br /> richtige Zeit
            </h1>
            <p className="font-['Segoe UI'] max-w-4xl text-xl text-[#071628]/70">
              Trader müssen schnell reagieren und entscheiden können. Dabei ist
              es von enormer Wichtigkeit genau die Märkte zu identifizieren, die
              am erfolgversprechendsten sind! Welche sind die stärksten Indizes
              und welche Aktien die zukünftigen Highflyer? Oft steht man vor
              einem Chart und denkt „Wäre ich mal genau an dieser Stelle
              eingestiegen“. 
            </p>
          </div>

          <div className="mt-12 grid h-fit grid-cols-1 gap-[60px] pb-24 md:grid-cols-2">
            <div className="relative">
              <Image
                src="/assets/images/mario-luddemann.png"
                width={617}
                height={641}
                alt="Mario"
                className="z-20 md:absolute"
              />

              <Image
                src="/assets/image-frame.svg"
                width={617}
                height={641}
                alt="Mario"
                className="-left-10 -top-8 z-10 hidden md:absolute md:flex"
              />
            </div>

            <div className="flex h-full flex-col gap-[32px]">
              <div className="-mb-[10px] w-fit rounded-full bg-[#537589] px-[26px] py-[11px]">
                <p className="font-['Segoe UI'] text-[18px] text-[#BFE7FF]">
                  Börsen- und Vermögensexperte
                </p>
              </div>
              <h2 className="font-['Gestura_Display'] text-[64px] leading-none text-[#303F48]">
                Mario <br />
                Lüddemann
              </h2>

              <span>
                <p className="text-xl text-[#071629]/70">
                  1996 startete Mario Lüddemann als privater Börsenhändler im
                  deutschen Aktienmarkt mit 5.000 DM Startkapital und erreichte
                  bereits 2001 eine Million Gewinn als Daytrader an den
                  deutschen Finanzmärkten.
                  <br />
                  <br />
                  Seit 1996 setzte der Börsen-Profi über 65.672 Trades mit einem
                  Handelsvolumen von mehr als einer Milliarde Euro um.
                  <br />
                  <br />
                  Heute ist Mario Lüddemann finanziell unabhängig und
                  selbstständig tätig als Portfoliomanager, Finanzanalyst sowie
                  Buchautor und hochschulzertifizierter Managementtrainer. Er
                  ist einer der bekanntesten Trading- und Investment-Experten in
                  Deutschland.
                </p>
              </span>
            </div>
          </div>

          <div className="mb-12 flex justify-between">
            <span>
              <p className="font-['Gestura_Display'] text-[90px] text-[#9D968C]">
                64.800
              </p>
              <div className="flex items-center gap-[9px]">
                <Star color="#9D968C" width={21} height={22} />
                <p className="text-[18px] text-[#071629]/80">
                  Umgesetzte Trades
                </p>
              </div>
            </span>
            <span>
              <p className="font-['Gestura_Display'] text-[90px] text-[#9D968C]">
                9.000
              </p>
              <div className="flex items-center gap-[9px]">
                <Star color="#9D968C" width={21} height={22} />
                <p className="text-[18px] text-[#071629]/80">
                  Zufriedene Kunden
                </p>
              </div>
            </span>
            <span>
              <p className="font-['Gestura_Display'] text-[90px] text-[#9D968C]">
                25 Jahre
              </p>
              <div className="flex items-center gap-[9px]">
                <Star color="#9D968C" width={21} height={22} />
                <p className="text-[18px] text-[#071629]/80">Berufserfahrung</p>
              </div>
            </span>
          </div>
        </main>
      </section>
    </>
  );
}

