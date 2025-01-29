import React from "react";
import Star from "./star";

interface StatisticCardProps {
  value: string;
  label: string;
}

export function StatisticCard({ value, label }: StatisticCardProps) {
  return (
    <span>
      <p className="font-['Gestura_Display'] text-6xl text-[#9D968C] md:text-[90px]">
        {value}
      </p>
      <div className="flex items-center gap-[9px]">
        <Star color="#9D968C" width={21} height={22} />
        <p className="text-[18px] text-[#071629]/80">{label}</p>
      </div>
    </span>
  );
}
