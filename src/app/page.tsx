import Image from "next/image";
import { Dot } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { StatisticCard } from "@/components/StatisticCard";

import {
  statistics,
  benefitsLeft,
  benefitsRight,
  testimonials,
  goals,
  book,
  footer,
} from "./infos";
import Buttons from "@/components/buttons";
import Hero from "./section/Hero";
import Footer from "./section/Footer";
import Testimonials from "./section/Testimonails";
import { CarouselDemo } from "@/components/carousel";

export default function Home() {
  return (
    <main>
      <Hero />
      <section
        className="full flex min-h-screen items-center justify-center bg-custom-cream px-4 pb-24 pt-24"
        aria-label="Main content"
      >
        <div className="w-full max-w-7xl">
          <header className="gap-md flex h-[2.8rem] items-center">
            <Image
              src="/assets/logos/company/icon.svg"
              width={27}
              height={27}
              alt="Logo"
            />
            <Separator orientation="vertical" />
            <p className="font-segoe text-custom-navy/25">OVERVIEW</p>
          </header>

          <article className="mb-24 mt-8 flex flex-col gap-[40px] md:mb-44">
            <h2 className="font-gestura text-4xl leading-none text-custom-slate md:text-8xl">
              Richtige Aktie,
              <br /> richtige Zeit
            </h2>
            <p className="font-['Segoe UI'] max-w-4xl text-xl text-custom-navy-light/70">
              Trader müssen schnell reagieren und entscheiden können. Dabei ist
              es von enormer Wichtigkeit genau die Märkte zu identifizieren, die
              am erfolgversprechendsten sind! Welche sind die stärksten Indizes
              und welche Aktien die zukünftigen Highflyer? Oft steht man vor
              einem Chart und denkt „Wäre ich mal genau an dieser Stelle
              eingestiegen".
            </p>
          </article>

          <article className="mt-12 grid h-fit grid-cols-1 gap-[60px] pb-24 md:grid-cols-2">
            <Image
              src="/assets/images/mario_alt.webp"
              width={617}
              height={641}
              alt="Mario"
            />

            <div className="flex h-full flex-col gap-[32px]">
              <div className="-mb-2 w-fit rounded-full bg-custom-blue px-7 py-3">
                <p className="font-['Segoe UI'] bg-gradient-to-b from-white to-custom-blue-light bg-clip-text text-xl text-transparent">
                  Börsen- und Vermögensexperte
                </p>
              </div>

              <h2 className="font-gestura text-6xl leading-none text-custom-slate">
                Mario <br />
                Lüddemann
              </h2>

              <div>
                <p className="text-xl text-custom-navy-light/70">
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
              </div>
            </div>
          </article>

          <section
            className="h-fit gap-16 md:mt-12 md:h-screen"
            aria-label="Statistics"
          >
            <div className="flex flex-col justify-between space-y-8 md:my-28 md:flex-row">
              {statistics.map((stat, index) => (
                <StatisticCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>

            <article className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2">
              <div className="flex h-full w-full flex-col items-center justify-center gap-8">
                <h2 className="font-gestura text-4xl leading-none text-custom-slate md:text-6xl">
                  Mario Lüddemanns Screeningdienst
                </h2>

                <div>
                  <p className="font-segoe text-xl text-custom-navy-light/70">
                    Nutze die Chance und profitiere von Marios Wissen. Sein Team
                    stellt jede Woche eine umfassende Analyse zusammen, die Dir
                    den Einstieg in die richtigen und gewinnbringenden Trades
                    ermöglicht. So siehst Du einfach und schnell, wann es sich
                    lohnt zu handeln. Tausche Unsicherheit gegen Sicherheit. Mit
                    Mario Lüddemanns Screeningdienst nutzt Du professionelle
                    Analysen, ohne dafür Zeit investieren zu müssen.
                  </p>

                  <p className="mt-8 font-bold">DAS IST DEINE LÖSUNG!</p>
                </div>
              </div>

              <div>
                <Image
                  src="/assets/images/team_alt.webp"
                  width={617}
                  height={641}
                  alt="Team"
                  loading="lazy"
                />
              </div>
            </article>
          </section>

          <section
            className="mt-12 flex w-full flex-col gap-16 pb-24"
            aria-label="Benefits"
          >
            <h2 className="font-gestura text-4xl leading-none text-custom-slate md:text-6xl">
              Das sind Deine Vorteile:
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <ul className="flex-1 space-y-4">
                {benefitsLeft.map((benefit, index) => (
                  <li key={`left-${index}`}>
                    <span className="flex items-center font-segoe text-xl text-black/70">
                      <Dot color="#9D968C" />
                      <p>{benefit}</p>
                    </span>
                    {index !== benefitsLeft.length - 1 && (
                      <Separator className="my-2 max-w-md" />
                    )}
                  </li>
                ))}
              </ul>
              <ul className="flex-1 space-y-4">
                {benefitsRight.map((benefit, index) => (
                  <li key={`right-${index}`}>
                    <span className="flex items-center font-segoe text-xl text-black/70">
                      <Dot color="#9D968C" />
                      <p>{benefit}</p>
                    </span>
                    {index !== benefitsLeft.length - 1 && (
                      <Separator className="my-2 max-w-md" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className="mt-12 grid w-full grid-cols-1 gap-20 pb-24 md:grid-cols-2 md:gap-32"
            aria-label="Bonus section"
          >
            <div>
              <Image
                src="/assets/images/smiling-team.webp"
                width={602}
                height={649}
                alt="Mario"
                loading="lazy"
              />
            </div>

            <article className="flex h-full flex-col justify-center gap-5">
              <header className="flex flex-col gap-2">
                <h2 className="font-gestura text-6xl text-custom-gold">
                  BONUS
                </h2>
                <h3 className="font-gestura text-3xl text-black">
                  Crashkurs Markttechnik
                </h3>
              </header>

              <p className="font-segoe text-xl text-black/70">
                1996 startete Mario Lüddemann als privater Börsenhändler im
                deutschen Aktienmarkt mit 5.000 DM Startkapital und erreichte
                bereits 2001 eine Million Gewinn als Daytrader an den deutschen
                Finanzmärkten. Seit 1996 setzte der Börsen-Profi über 65.672
                Trades mit einem Handelsvolumen von mehr als einer Milliarde
                Euro um. Heute ist Mario Lüddemann finanziell unabhängig und
                selbstständig tätig als Portfoliomanager, Finanzanalyst sowie
                Buchautor und hochschulzertifizierter Managementtrainer. Er ist
                einer der bekanntesten Trading- und Investment-Experten in
                Deutschland.
              </p>

              <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-center">
                <Buttons />
              </div>
            </article>
          </section>

          <div className="hidden md:block">
            <Testimonials />
          </div>

          <div className="md:hidden">
            <CarouselDemo />
          </div>

          <section
            className="mt-44 grid w-full grid-cols-1 gap-16 md:grid-cols-2 md:gap-28"
            aria-label="Goals and advantages"
          >
            <header>
              <h2 className="font-gestura text-4xl text-custom-navy-light md:text-6xl">
                Deine Ziele & <br /> Vorteile
              </h2>
            </header>

            <div className="flex flex-col">
              {goals.map((goal, index) => (
                <article key={`${goal}-${index}`}>
                  <div className="flex flex-col items-start gap-8 md:flex-row md:gap-16">
                    <Image
                      src={goal.icon}
                      width={64}
                      height={64}
                      alt={goal.title}
                      loading="lazy"
                    />
                    <div className="-mt-1 flex flex-col gap-4">
                      <h4 className="font-gestura text-3xl text-custom-navy-dark">
                        {goal.title}
                      </h4>
                      <p className="font-segoe text-xl text-custom-navy-light/60">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                  {index !== goals.length - 1 && (
                    <Separator className="my-12" />
                  )}
                </article>
              ))}
            </div>
          </section>

          <section
            className="mt-12 grid min-h-[3rem] w-full grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-28"
            aria-label="Booking section"
          >
            <div>
              <Image
                src="/assets/images/guy-smiling.webp"
                width={666}
                height={660}
                alt="Smiling person"
                loading="lazy"
              />
            </div>
            <article className="flex flex-col gap-8">
              <h2 className="font-gestura text-4xl md:text-6xl">
                Buche jetzt unseren Screeningdienst!
              </h2>

              <p className="font-segoe text-xl text-custom-navy-light/60">
                Teste unseren Screeningdienst 30 Tage für nur 1 € und erhalte
                den vollen Zugriff auf alle Inhalte – inklusive Mario Lüddemanns
                Trading-Watchlist der aktuellen Woche.
              </p>

              <ul className="flex flex-col gap-5">
                {book.map((item, index) => (
                  <li key={index} className="flex items-center gap-5">
                    <Image
                      src={item.icon}
                      width={64}
                      height={64}
                      alt={item.title}
                      loading="lazy"
                    />
                    <p className="font-segoe text-xl text-custom-navy-light/60">
                      {item.title}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section
            className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-28"
            aria-label="Quality section"
          >
            <Image
              src="/assets/images/coaching.webp"
              width={671}
              height={690}
              alt="Coaching illustration"
              loading="lazy"
              className="order-first w-full md:order-last"
            />

            <article className="order-last flex flex-col gap-8 md:order-first md:gap-16">
              <Image
                src="/assets/icons/quality-seal.png"
                width={114}
                height={80}
                alt="Quality seal"
                loading="lazy"
              />
              <p className="text-lg text-black/70 md:text-xl">
                778 Bewertungen auf ProvenExpert.com
              </p>
              <h2 className="font-gestura text-4xl md:text-6xl lg:text-6xl">
                Coaching,
                <br /> Mentoring für Börsenhandel <br /> und synthetische
                Anlagestrategien
              </h2>
            </article>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
