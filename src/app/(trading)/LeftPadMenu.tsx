import Link from 'next/link';
import React from 'react';

type link = { href: string; title: string };

const LeftPadMenu = ({
  options,
  title,
}: {
  options: link[];
  title: string;
}) => {
  return (
    <ul className="inline-block font-semibold px-4 py-4 md:flex md:flex-col md:w-auto">
      <p className="text-primary-color inline text-xl">{title}</p>
      {options.map((option) => (
        <li
          className="inline text-secondary-color font-normal text-md pl-4 hover:text-primary-color duration-200"
          key={option.href}
        >
          <Link href={option.href}>{option.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export {LeftPadMenu}
export type {link}