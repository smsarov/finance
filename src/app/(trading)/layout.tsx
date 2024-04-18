import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
import Logo from "@/components/Logo";

import { createClient } from "utils/supabase/server";
import { redirect } from "next/navigation";

import type {link} from './LeftPadMenu'
import { LeftPadMenu } from "./LeftPadMenu";

const inter = Inter({ subsets: ["latin"] });

const links: link[] = [
  { href: "/trading/futures", title: "futures" },
  { href: "/trading/options", title: "options" },
];

const pairs: link[] = [
  { href: "/trading/1", title: "btc / usd" },
  { href: "/trading/2", title: "eth / usd" },
  { href: "/trading/3", title: "usd / rub" },
];

const navigation: link[] = [
  { href: "/", title: "home" },
  { href: "/profile", title: "profile" },
];

async function layout({ children }: { children: React.ReactNode }) {

  const supabase = createClient();
  const {data, error} = await supabase.auth.getUser();

  if(error || !data.user){
    redirect('/auth');
  }

  return (
    <main className={inter.className}>
      <div className="flex flex-col w-screen md:flex-row md:h-screen md:py-8">
        <aside className="relative max-w-screen w-screen flex flex-row items-center gap-4 md:py-0 md:h-full md:w-auto md:flex-col px-4">
          <Link href={"/"} className="flex md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-[0.75rem]">
            <Logo className="md:text-4xl"></Logo>
          </Link>
          <nav
            className="flex flex-grow whitespace-nowrap overflow-scroll md:py-0 md:flex-col md:justify-center md:px-2"
          >
            <LeftPadMenu options={pairs} title="Pairs"></LeftPadMenu>
            <LeftPadMenu options={links} title="Instruments"></LeftPadMenu>
            <LeftPadMenu options={navigation} title="Navigation"></LeftPadMenu>
          </nav>
        </aside>

        <div className="flex grow px-4">{children}</div>
      </div>
    </main>
  );
}

export default layout;
