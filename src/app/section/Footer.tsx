import Image from "next/image";
import { Dot } from "lucide-react";

import { footer } from "../infos";

function Footer() {
  return (
    <footer className="flex h-fit w-full flex-col gap-12 bg-custom-cream pt-12">
      <div className="grid h-full grid-cols-1 gap-8 px-4 md:grid-cols-5 md:px-12">
        <div className="flex flex-col gap-5 md:col-span-2">
          <Image
            src="/assets/logos/company/logo_alt.svg"
            width={180}
            height={34}
            alt="Logo"
          />

          <address className="not-italic text-black/60">
            Chromstr. 86-88, 33415 Verl <br />
            +49 (0)5246 936 664 6 <br />
            info@mariolueddemann.com
          </address>
        </div>

        <nav className="flex flex-col gap-8" aria-label="Aktuelles">
          <h2 className="font-gestura text-2xl">Aktuelles</h2>
          <ul className="flex flex-col gap-5">
            {footer.Aktuelles.map((item, index) => (
              <span className="flex items-center gap-2" key={index}>
                {index === 0 && (
                  <div className="h-2 w-2 rounded-[2px] bg-black/60" />
                )}
                <li
                  key={index}
                  className="cursor-pointer font-segoe text-md text-black/60"
                >
                  {item}
                </li>
              </span>
            ))}
          </ul>
        </nav>

        <nav className="flex flex-col gap-8" aria-label="Ausbildungen">
          <h2 className="font-gestura text-2xl">Ausbildungen</h2>
          <ul className="flex flex-col gap-5">
            {footer.Ausbildungen.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer font-segoe text-md text-black/60"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        <nav className="flex flex-col gap-8" aria-label="Lüddemann Investments">
          <h2 className="font-gestura text-2xl">Lüddemann Investments</h2>
          <ul className="flex flex-col gap-5">
            {footer["Lüddemann Investments"].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer font-segoe text-md text-black/60"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-t-black/15 py-8 md:h-[8rem] md:grid-cols-3 md:py-0">
        <div className="grid grid-cols-1 items-center justify-center gap-4 px-4 md:h-[8rem] md:grid-cols-3 md:px-12">
          <p className="flex justify-center font-segoe text-md md:justify-start">
            Copyright © 2025 Lüddemann Investments
          </p>

          <nav className="flex items-center justify-center" aria-label="Legal">
            <a href="/impressum" className="font-segoe text-md">
              Impressum
            </a>
            <Dot className="h-8 w-8" />
            <a href="/datenschutz" className="font-segoe text-md">
              Datenschutz
            </a>
          </nav>

          <p className="flex justify-center font-segoe text-md md:justify-end">
            Design by Yunicorn
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
