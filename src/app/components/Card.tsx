import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import Link from "next/link";

type CardProps = {
  href: string;
  className?: string;
} & (
  | {
      Icon: IconType;
      title: string;
      description: string;
      children?: never;
    }
  | {
      children: ReactNode;
      Icon?: never;
      title?: never;
      description?: never;
    }
);
  
function Card({
  Icon,
  href,
  title,
  description,
  className,
  children,
}: CardProps) {
  return (
    <Link
      className={
        "relative text-xl rounded-xl duration-300 hover:shadow-secondary-color bg-black/20 dark:bg-white/20 backdrop-blur-[1px] shadow-secondary-color shadow-md hover:shadow-sm text-primary-color py-4 px-2 md:px-4 flex flex-col justify-around " +
        className
      }
      href={href}
    >
      {Icon ? (
        <>
          <div className="flex items-center gap-4 lg:px-5">
            <Icon style={{ minHeight: "3rem", minWidth: "3rem" }}></Icon>
            <h1 className="font-bold">{title}</h1>
          </div>
          <p className="text-lg self-start">{description}</p>
        </>
      ) : (
        <>{children}</>
      )}
    </Link>
  );
}

export default Card;
