import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown, Dot, Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { StatisticCard } from "@/components/StatisticCard";

import {
  partners,
  navbar,
  statistics,
  benefitsLeft,
  benefitsRight,
  testimonials,
  goals,
  book,
} from "./infos";

export default function Home() {
  return (
    <>
      <section
        className="flex h-screen w-screen flex-col items-center justify-center bg-[#172329] px-4"
        style={{ backgroundImage: "url('/assets/bg.webp')" }}
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
              <Menu color="white" className="md:hidden" />
            </div>
            <div className="hidden gap-[2.8rem] md:flex">
              {navbar.map((option, index) => (
                <p
                  key={index}
                  className="flex cursor-pointer items-center gap-[6px] font-['Segoe_UI'] text-white"
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
                        key={index}
                        alt="star"
                        width={17}
                        height={16}
                        src="/assets/icons/star.svg"
                      />
                    ))}
                </div>
                <p className="font-['Segoe_UI'] font-[18px]">SCREENINGDIENST</p>
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
            <p className="font-['Segoe_UI'] text-[#002533]/25">OVERVIEW</p>
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
            <Image
              src="/assets/images/mario_alt.webp"
              width={617}
              height={641}
              alt="Mario"
              className=""
            />

            <div className="flex h-full flex-col gap-[32px]">
              <div className="-mb-2 w-fit rounded-full bg-[#537589] px-7 py-3">
                <p className="font-['Segoe UI'] bg-gradient-to-b from-white to-[#BFE7FF] bg-clip-text text-xl text-transparent">
                  Börsen- und Vermögensexperte
                </p>
              </div>

              <h2 className="font-['Gestura_Display'] text-6xl leading-none text-[#303F48]">
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

          <div className="mt-12 h-screen gap-[60px]">
            <div className="my-28 flex flex-col justify-between md:flex-row">
              {statistics.map((stat, index) => (
                <StatisticCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 gap-[60px] md:grid-cols-2">
              <div className="flex h-full flex-col items-center justify-center gap-[32px]">
                <h2 className="font-['Gestura_Display'] text-6xl leading-none text-[#303F48]">
                  Mario Lüddemanns Screeningdienst
                </h2>

                <span>
                  <p className="font-['Segoe_UI'] text-xl text-[#071629]/70">
                    Nutze die Chance und profitiere von Marios Wissen. Sein Team
                    stellt jede Woche eine umfassende Analyse zusammen, die Dir
                    den Einstieg in die richtigen und gewinnbringenden Trades
                    ermöglicht. So siehst Du einfach und schnell, wann es sich
                    lohnt zu handeln. Tausche Unsicherheit gegen Sicherheit. Mit
                    Mario Lüddemanns Screeningdienst nutzt Du professionelle
                    Analysen, ohne dafür Zeit investieren zu müssen.
                  </p>

                  <p className="mt-8 font-bold">DAS IST DEINE LÖSUNG!</p>
                </span>
              </div>

              <div className="">
                <Image
                  src="/assets/images/team_alt.webp"
                  width={617}
                  height={641}
                  alt="Team"
                  className=""
                />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-16 pb-24">
            <h2 className="font-['Gestura_Display'] text-6xl leading-none text-[#303F48]">
              Das sind Deine Vorteile:
            </h2>

            <div className="grid grid-cols-2">
              <div className="flex-1 space-y-4">
                {benefitsLeft.map((benefit, index) => (
                  <>
                    <span
                      key={`left-${index}`}
                      className="flex items-center font-['Segoe_UI'] text-xl text-black/70"
                    >
                      <Dot color="#9D968C" />
                      <p>{benefit}</p>
                    </span>
                    {index !== benefitsLeft.length - 1 && (
                      <Separator className="max-w-md" key={index} />
                    )}
                  </>
                ))}
              </div>
              <div className="flex-1 space-y-4">
                {benefitsRight.map((benefit, index) => (
                  <>
                    <span
                      key={`right-${index}`}
                      className="flex items-center font-['Segoe_UI'] text-xl text-black/70"
                    >
                      <Dot color="#9D968C" />
                      <p>{benefit}</p>
                    </span>

                    {index !== benefitsLeft.length - 1 && (
                      <Separator className="max-w-md" key={index} />
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid w-full grid-cols-2 gap-32 pb-24">
            <div>
              <Image
                src="/assets/images/smiling-team.webp"
                width={602}
                height={649}
                alt="Mario"
                className=""
              />
            </div>

            <div className="flex h-full flex-col justify-center gap-5">
              <span className="flex flex-col gap-2">
                <h1 className="font-['Gestura_Display'] text-6xl text-[#D6B271]">
                  BONUS
                </h1>
                <h3 className="font-['Gestura_Display'] text-3xl text-black">
                  Crashkurs Markttechnik
                </h3>
              </span>

              <p className="font-['Segoe_UI'] text-xl text-black/70">
                1996 startete Mario Lüddemann als privater Börsenhändler im
                deutschen Aktienmarkt mit 5.000 DM Startkapital und erreichte
                bereits 2001 eine Million Gewinn als Daytrader an den deutschen
                Finanzmärkten. Seit 1996 setzte der Börsen-Profi über 65.672
                Trades mit einem Handelsvolumen von mehr als einer Milliarde
                Euro um. Heute ist Mario Lüddemann finanziell unabhängig und
                selbstständig tätig als Portfoliomanager, Finanzanalyst sowie
                Buchautor und hochschulzertifizierter Managementtrainer. Er ist
                einer der bekanntesten Trading- und Investment-Experten in
                Deutschland.{" "}
              </p>

              <div className="mt-2 flex items-center gap-4">
                <Button variant={"trading"}>
                  <Image
                    src="/assets/icons/trading.svg"
                    width={24}
                    height={24}
                    alt="Arrow right"
                  />
                  <p className="bg-gradient-to-b from-white to-[#BFE7FF] bg-clip-text font-['Segoe_UI'] text-md font-semibold text-transparent">
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
          </div>

          <div className="grid min-h-[3rem] w-full grid-cols-3 gap-14">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-6 text-center"
              >
                <Image
                  width={300}
                  height={300}
                  src={testimonial.photo}
                  alt={testimonial.author}
                />
                <span className="flex flex-col gap-1">
                  <h6 className="font-['Gestura_Display'] text-3xl">
                    {testimonial.author}
                  </h6>
                  <p className="font-['Segoe_UI'] text-xl uppercase italic text-black/50">
                    {testimonial.title}
                  </p>
                </span>
                <p className="font-['Segoe_UI'] text-xl text-black/60">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-44 grid w-full grid-cols-2 gap-28">
            <div>
              <h2 className="font-['Gestura_Display'] text-6xl text-[#071629]">
                Deine Ziele & <br /> Vorteile
              </h2>
            </div>

            <div className="flex flex-col">
              {goals.map((goal, index) => (
                <>
                  <span
                    key={`${goal}-${index}`}
                    className="flex items-start gap-6"
                  >
                    <Image
                      src={goal.icon}
                      width={64}
                      height={64}
                      alt={goal.title}
                    />
                    <div className="-mt-1 flex flex-col gap-4">
                      <h4 className="font-['Gestura_Display'] text-3xl text-[#0F2736]">
                        {goal.title}
                      </h4>
                      <p className="font-['Segoe_UI'] text-xl text-[#071629]/60">
                        {goal.description}
                      </p>
                    </div>
                  </span>
                  {index !== goals.length - 1 && (
                    <Separator className="my-12" key={index} />
                  )}
                </>
              ))}
            </div>
          </div>

          <div className="grid min-h-[3rem] w-full grid-cols-2 items-center gap-28">
            <div>
              <Image
                src="/assets/images/guy-smiling.webp"
                width={666}
                height={660}
                alt="Logo"
              />
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="font-['Gestura_Display'] text-6xl">
                Buche jetzt unseren Screeningdienst!
              </h2>

              <p className="font-['Segoe_UI'] text-xl text-[#071629]/60">
                Teste unseren Screeningdienst 30 Tage für nur 1 € und erhalte
                den vollen Zugriff auf alle Inhalte – inklusive Mario Lüddemanns
                Trading-Watchlist der aktuellen Woche.
              </p>

              <span className="flex flex-col gap-5">
                {book.map((item, index) => (
                  <div key={index} className="flex items-center gap-5">
                    <Image
                      src={item.icon}
                      width={64}
                      height={64}
                      alt={item.title}
                    />
                    <p className="font-['Segoe_UI'] text-xl text-[#071629]/60">
                      {item.title}
                    </p>
                  </div>
                ))}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-28">
            <div className="flex flex-col gap-6">
              <Image
                src="/assets/icons/quality-seal.webp"
                width={114}
                height={80}
                alt="logo"
              />
              <p className="text-xl text-black/70">
                778 Bewertungen auf ProvenExpert.com
              </p>
              <h2 className="font-['Gestura_Display'] text-6xl">
                Coaching,
                <br /> Mentoring für Börsenhandel <br /> und synthetische
                Anlagestrategien
              </h2>
            </div>

            <div>
              <Image
                src="/assets/images/coaching.webp"
                width={671}
                height={690}
                alt="Logo"
              />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
