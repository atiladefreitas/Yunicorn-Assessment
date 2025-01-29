import Image from "next/image";
import { Button } from "./ui/button";

function Buttons() {
  return (
    <>
      <Button variant={"trading"}>
        <Image
          src="/assets/icons/trading.svg"
          width={24}
          height={24}
          alt="Arrow right"
        />
        <p className="bg-gradient-to-b from-white to-[#BFE7FF] bg-clip-text font-segoe text-md font-semibold text-transparent">
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
        <p className="bg-gradient-to-b from-[#A5906C] to-[#99763A] bg-clip-text font-segoe text-md font-semibold text-transparent">
          Investment
        </p>
      </Button>
    </>
  );
}

export default Buttons;
