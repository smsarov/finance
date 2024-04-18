"use client";

import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { socket } from "../api/socket";
import ChartSVG from "./ChartSVG";
import { Flag } from "utils/ChartUtils";

export default function Chart() {

  //TODO: skeleton when not conntected

  const [isConnected, setIsConnected] = useState(false);

  const [timeSpan, setTimeSpan] = useState(1e5);
  const [offsetFromNow, setOffsetFromNow] = useState(0);

  const [data, setData] = useState<Flag[]>([]);

  useEffect(() => {
    if (socket.connected) {
      setIsConnected(true);
    }

    socket.on("connect", () => setIsConnected(true));
    socket.on("disconnect", () => setIsConnected(false));

    socket.on("update-data", (data) => {
      setData(data);
    });

    return () => {
      socket.off("connect", () => setIsConnected(true));
      socket.off("disconnect", () => setIsConnected(false));
    };
  }, []);

  const handleFormChange = () => {
    socket.emit("change-boundaries", {
      newTimeSpan: timeSpan,
      newOffsetFromNow: offsetFromNow,
    });
  };

  const timeSpanSlider = useMemo(
    () => (
      <label>
        timeSpan
        <input
          className=" bg-fuchsia-400"
          name="timeSpan"
          type="range"
          min={1e4}
          max={1e5}
          value={timeSpan}
          onChange={(e) => setTimeSpan(parseInt(e.target.value))}
        ></input>
      </label>
    ), [timeSpan]);
  const offsetFromNowSlider = useMemo(() => (
    <label>
      offsetFromNow
      <input
        name="offsetFromNow"
        type="range"
        min={0}
        max={1e5}
        value={offsetFromNow}
        onChange={(e) => setOffsetFromNow(parseInt(e.target.value))}
      ></input>
    </label>
  ), [offsetFromNow]);

  return (
    <div className="w-full h-full text-pretty flex justify-center items-center relative overflow-scroll">
      <form
        action=""
        className="absolute flex flex-col top-2 right-2 p-4 rounded-xl"
        onChange={() => handleFormChange()}
      >
        {timeSpanSlider}
        {offsetFromNowSlider}
      </form>
      <div className="h-[70%] w-full">
        <ChartSVG flags={data}></ChartSVG>
      </div>
    </div>
  );
}

export { Chart };
