import React from "react";
import ToggleThemeButton from "./ToggleThemeButton";
import Image from "next/image";
import Link from "next/link";
import Navlist from "./Navlist";

export default function Navbar({isHomePage = false}) {
  return (
    <div className="flex w-full justify-between gap-3 p-3 lg:px-6">
      
      <Link href="" className="app_logo flex items-center hover:opacity-80">
        <Image src="/avatar/avatar_0406.png" width="100" height="100"className="w-[80px] md:w-[100px]"/>
        <div className="app_name text-center text-lg font-extrabold uppercase md:text-3xl">
          Cute Avatar Sketch!
        </div>
      </Link>

      <div className="flex items-center gap-3 text-lg md:text-xl">
        <ToggleThemeButton />
        {!isHomePage && (<Navlist />)}
      </div>
    </div>
  );
}
