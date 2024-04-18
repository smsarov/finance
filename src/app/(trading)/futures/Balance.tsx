"use client";

import React from "react";

function Balance({
  available,
  inMarket,
}: {
  available: number;
  inMarket: number;
}) {
  return (
    <div className="w-full h-full flex flex-col text-center justify-around gap-2 py-2">
      <p className="text-2xl font-semibold">Total: {available + inMarket}$</p>
      <div className="flex flex-row justify-around items-center text-lg">
        <p>
          Available:<br></br> {available}$
        </p>
        <hr className="w-[1px] h-12 bg-primary-color"/>
        <p>
          In market:<br></br> {inMarket}$
        </p>
      </div>
    </div>
  );
}

export default Balance;
