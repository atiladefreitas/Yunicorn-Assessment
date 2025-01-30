import Image from "next/image";
import { Dot } from "lucide-react";

import { footer } from "../infos";

function Footer() {
  return (
    <footer className="flex h-fit w-full flex-col gap-12 bg-[#FDFBF4] pt-12">
      <div className="grid h-full grid-cols-1 gap-8 px-4 md:grid-cols-5 md:px-12">
        <div className="flex flex-col gap-5 md:col-span-2">
          <Image
            src="/assets/logos/company/logo_alt.webp"
            width={180}
            height={34}
            alt="Logo"
          />

          <p className="text-black/60">
            Chromstr. 86-88, 33415 Verl <br />
             +49 (0)5246 936 664 6 
            <br /> info@mariolueddemann.com
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="font-gestura text-2xl">Aktuelles</h2>
          <span className="flex flex-col gap-5">
            {footer.Aktuelles.map((item, index) => (
              <p key={index} className="font-segoe text-md">
                {item}
              </p>
            ))}
          </span>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="font-gestura text-2xl">Ausbildungen</h2>
          <span className="flex flex-col gap-5">
            {footer.Ausbildungen.map((item, index) => (
              <p key={index} className="font-segoe text-md">
                {item}
              </p>
            ))}
          </span>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="font-gestura text-2xl">Lüddemann Investments</h2>
          <span className="flex flex-col gap-5">
            {footer["Lüddemann Investments"].map((item, index) => (
              <p key={index} className="font-segoe text-md">
                {item}
              </p>
            ))}
          </span>
        </div>
      </div>
      <div className="border-t border-t-black/15 py-8 md:h-[8rem] md:grid-cols-3 md:py-0">
        <span className="grid grid-cols-1 items-center justify-center gap-4 px-4 md:h-[8rem] md:grid-cols-3 md:px-12">
          <div className="flex justify-center md:justify-start">
            <p className="font-segoe text-md">
              Copyright © 2025 Lüddemann Investments
            </p>
          </div>

          <div className="flex items-center justify-center">
            <p className="font-segoe text-md">Impressum</p>
            <Dot className="h-8 w-8" />
            <p className="font-segoe text-md">Datenschutz</p>
          </div>

          <div className="flex justify-center md:justify-end">
            <p className="font-segoe text-md">Design by Yunicorn</p>
          </div>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
