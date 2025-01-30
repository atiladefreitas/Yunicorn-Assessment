import Image from "next/image";
import { Button } from "./ui/button";

function Buttons() {
  return (
    <>
      <Button
        variant={"trading"}
        className="relative before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-white before:to-[#BFE7FF] before:p-[1px]"
      >
        <div className="flex h-full w-full items-center justify-center gap-2 rounded-lg bg-[#0B0F1C] bg-[radial-gradient(ellipse_at_center,_#537589_0%,_#295A77_100%)]">
          <Image
            src="/assets/icons/trading.svg"
            width={24}
            height={24}
            alt="Arrow right"
          />
          <p className="bg-gradient-to-b from-white to-[#BFE7FF] bg-clip-text font-segoe text-md font-semibold text-transparent">
            Trading
          </p>
        </div>
      </Button>
      <Button variant={"investment"}>
        <Image
          src="/assets/icons/investment.svg"
          width={24}
          height={24}
          alt="Arrow right"
        />
        <p className="bg-gradient-to-b from-[#A5906C] to-[#99763A] bg-clip-text font-segoe text-md font-semibold text-transparent">
          Investment
        </p>
      </Button>
    </>
  );
}

export default Buttons;
