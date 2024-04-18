"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useWindowResize } from "hooks/useWindowResize";

interface IOptionPickerProps {
  options: string[] | number[];
  handleClick: (index: number) => any | (() => any);
  containerStyle?: string;
  buttonStyle?: string;
}

const OptionPicker = ({
  options,
  handleClick,
  containerStyle,
  buttonStyle,
}: IOptionPickerProps) => {

  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, windowHeight] = useWindowResize(() => {});

  const borderRef = useRef<HTMLDivElement>(null);
  const currentOptionRef = useRef<HTMLButtonElement>(null);

  const finalButtonTailwindStyle =
    "rounded-md text-center px-2 py-1 " + buttonStyle;
  const finalContainerTailwindStyle =
    "flex flex-wrap items-center justify-around " + containerStyle;

  const moveTo = (target: HTMLElement) => {
    if (!borderRef.current) return;
    borderRef.current.style.left = target.offsetLeft + "px";
    borderRef.current.style.top = target.offsetTop + "px";
    borderRef.current.style.width = target.clientWidth + "px";
    borderRef.current!.style.height = target.clientHeight + "px";
  };

  const handleButtonCLick = (target: HTMLElement, index: number) => {
    moveTo(target);
    setCurrentIndex(index);
    handleClick(index);
  };

  useLayoutEffect(() => {
    moveTo(currentOptionRef.current as HTMLElement);
    currentOptionRef.current!.classList.remove(
      "shadow-md",
      "shadow-primary-color"
    );
    setMounted(true);
    borderRef.current!.classList.remove("hidden");
  }, [windowWidth, windowHeight]);

  return (
    <div className="relative w-full">
      <div
        ref={borderRef}
        className="absolute hidden left-0 top-0 rounded-md ease-in-out shadow-secondary-color shadow-md duration-200"
      ></div>
      <ul className={finalContainerTailwindStyle}>
        {options.map((option, index) => {
          return (
            <button
              key={option}
              ref={index === currentIndex ? currentOptionRef : null}
              onClick={(e) => handleButtonCLick(e.currentTarget, index)}
              className={
                finalButtonTailwindStyle +
                (!mounted && index === 0
                  ? " shadow-md shadow-secondary-color"
                  : "")
              }
            >
              {option}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default OptionPicker;
export type { IOptionPickerProps };
