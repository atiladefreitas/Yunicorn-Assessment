import React from "react";
import Star from "./star";

interface StatisticCardProps {
  value: string;
  label: string;
}

export function StatisticCard({ value, label }: StatisticCardProps) {
  return (
    <div
      className={`flex w-full md:items-center md:justify-center ${
        value === "9.000" && "md:border-l md:border-r md:border-[#b0b0b0]"
      }`}
    >
      <span>
        <p className="font-['Gestura_Display'] text-7xl text-[#9D968C] md:text-[90px]">
          {value}
        </p>
        <div className="flex items-center gap-[9px]">
          <Star color="#9D968C" width={21} height={22} />
          <p className="text-[18px] text-[#071629]/80">{label}</p>
        </div>
      </span>
    </div>
  );
}
