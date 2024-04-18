import { AiOutlineLogin } from "react-icons/ai";
import { IoIosTrendingUp } from "react-icons/io";
import { IoListCircleOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";

import Card from "./components/Card";
import Logo from "./components/Logo";

export default async function Home() {

  return (
    <main className="w-full min-h-screen text-center flex flex-col justify-center items-center gap-4">
      <Logo className="text-8xl leading-[8rem]"></Logo>
      <nav
        className="mt-[20px] w-11/12 grid md:grid-rows-2 md:grid-cols-3 md:w-7/12 md:aspect-[7/3]
         grid-rows-3 grid-cols-2 gap-6 origin-center duration-300 relative"
      >
        <Card
          href="/futures"
          Icon={IoIosTrendingUp}
          title="trading"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae minima sit"
          className="text-4xl col-start-1 col-end-3 items-center bg-gradient-to-tr from-pink-600/30 via-30% via-purple-500/50 to-transparent"
        ></Card>
        <Card
          href="/auth"
          Icon={AiOutlineLogin}
          title="login"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae minima sit"
        ></Card>
        <Card
          href="/"
          Icon={IoPersonCircleOutline}
          title="profile"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae minima sit"
        ></Card>
        <Card
          href="/"
          Icon={IoListCircleOutline}
          title="history"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae minima sit"
        ></Card>
        <Card
          href="/"
          Icon={IoShareSocial}
          title="author"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae minima sit"
        ></Card>
      </nav>
    </main>
  );
}
