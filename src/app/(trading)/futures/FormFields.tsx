"use client";

import React from "react";
import {useState} from "react";
import CurrencyInput from "react-currency-input-field";
import OptionPicker from "@/ui/OptionPicker";

const CurrencyInputWithMultipliers = ({
  name,
  multipliers,
}: {
  name: string;
  multipliers: number[];
}) => {
  const [value, setValue] = useState("100.00");

  const handleShortcutButtonsClick = (multiplier: number) => {
    setValue((value) => (+value * multiplier).toFixed(2));
  };

  return (
    <label className="flex flex-col items-center text-center gap-2">
      <p className="text-sm text-secondary-color">
        How much do you want to trade?
      </p>

      <CurrencyInput
        required
        value={value}
        allowNegativeValue={false}
        disableGroupSeparators
        decimalSeparator="."
        name={name}
        onValueChange={(value) => setValue(value || "0")}
        className="w-4/5 outline-none text-center rounded-md bg-transparent backdrop-blur-[1px] text-xl shadow-secondary-color shadow-md py-1"
      ></CurrencyInput>
      <div className="w-full flex flex-row justify-around px-3">
        {multipliers.map((multiplier) => {
          return (
            <button
              key={multiplier}
              type="button"
              onClick={() => handleShortcutButtonsClick(multiplier)}
              className="shadow-md active:shadow-sm active:shadow-secondary-color shadow-secondary-color rounded-lg py-1 px-2 duration-150"
            >
              {multiplier * 100}%
            </button>
          );
        })}
      </div>
    </label>
  );
};

const ValuePicker = ({ name, values }: { name: string; values: string[] }) => {
  const [value, setValue] = useState(values[0]);

  return (
    <label
      className="flex flex-col items-center text-center gap-2 w-4/5"
      onClick={(e) => e.preventDefault()}
    >
      <p className="text-sm text-secondary-color">
        {" "}
        Postion will be closed in:
      </p>
      <OptionPicker
        options={values}
        containerStyle="w-full"
        handleClick={(index) => setValue(values[index])}
      ></OptionPicker>
      <input type="hidden" name={name} value={value} />
    </label>
  );
};

export { CurrencyInputWithMultipliers, ValuePicker };
