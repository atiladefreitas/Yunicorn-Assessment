import Image from "next/image";

interface StarProps {
  color?: string;
  width?: number;
  height?: number;
}

function Star({ color = "#D6B271", width = 18, height = 17 }: StarProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.64"
        d="M9 0.795898L11.2958 6.63517L17.5 8.7959L11.2958 10.9566L9 16.7959L6.70423 10.9566L0.5 8.7959L6.70423 6.63517L9 0.795898Z"
        fill={color}
      />
    </svg>
  );
}

export default Star;
