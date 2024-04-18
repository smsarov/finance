import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { CurrencyInputWithMultipliers, ValuePicker } from "./FormFields";

import { sendForm } from "./actions";

function Form() {
  return (
    <form
      action={sendForm}
      className="flex flex-col items-center justify-between h-full w-full text-center py-8 md:py-3 gap-10 md:gap-px"
    >
      <CurrencyInputWithMultipliers
        name="amount"
        multipliers={[0.25, 0.5, 2, 5]}
      ></CurrencyInputWithMultipliers>
      <ValuePicker
        name="time"
        values={["5s", "10s", "30s", "1min", "2min", "5min", "10min"]}
      ></ValuePicker>
      <div className="flex flex-col gap-3">
        <p className="text-sm text-secondary-color font-semibold">
          Which one would you choose?
        </p>
        <div className="flex justify-around">
          <button
            name="guess"
            value="up"
            className="shadow-md active:shadow-sm active:shadow-primary-color shadow-green-800 text-primary-color rounded-lg py-1 px-2 duration-150"
          >
            <IoIosArrowRoundUp size={30} />
          </button>
          <button
            name="guess"
            value="down"
            className="shadow-md active:shadow-sm active:shadow-primary-color shadow-red-800 text-primary-color rounded-lg py-1 px-2 duration-150"
          >
            <IoIosArrowRoundDown size={30} />
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
