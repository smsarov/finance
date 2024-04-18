import React from "react";
import { Flag, BoundariesOfFlagArray } from "../utils/ChartUtils";

function ChartSVG({ flags }: { flags: Flag[] }) {
  if (!flags.length) return <svg className="w-full h-full"></svg>;

  const { minValue, maxValue, minTime, maxTime } = BoundariesOfFlagArray(flags);

  return (
    <svg className="w-full h-full">
      {flags.map((flag, index) => {
        const y = -((flag.maxValue - maxValue) / (maxValue - minValue)) * 100;
        const x = ((flag.timeStart - minTime) / (maxTime - minTime)) * 100;
        const width =
          ((flag.timeFinish - flag.timeStart) / (maxTime - minTime)) * 100;
        const height =
          ((flag.maxValue - flag.minValue) / (maxValue - minValue)) * 100;
        const color = flag.closeValue > flag.openValue ? "green" : "red";
        return (
          <rect
            key={index}
            x={x + "%"}
            y={y + "%"}
            width={width + "%"}
            height={height + "%"}
            fill={color}
            opacity={0.8}
          ></rect>
        );
      })}
    </svg>
  );
}

export default ChartSVG;
