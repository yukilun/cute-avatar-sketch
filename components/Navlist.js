'use client'
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineMenu, MdClose } from 'react-icons/md'
import { useRouter } from "next/navigation";

export default function Navlist() {

  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="gap-2 text-gray-800 hidden lg:flex">
        <Link href="" className="p-2 text-xl bg-yellow-200 rotate-6 scale-90 shadow-md dark:shadow-white transition-all duration-50 hover:rotate-0 hover:scale-100">
          Avatar Creator
        </Link>
        <Link href="" className="p-2 text-xl bg-violet-200 -rotate-3 scale-90 shadow-md dark:shadow-white transition-all duration-50 hover:rotate-0 hover:scale-100">
          Documentation
        </Link>
      </div>

      <div className="flex flex-col lg:hidden">
        <button 
          className="w-[50px] h-[50px] flex items-center justify-center rounded-lg border-2 border-transparent shadow-white transition-all duration-500 hover:border-cyan-500 hover:text-cyan-500 hover:shadow-xl"
          onClick={()=>setOpen(!isOpen)}
        >
          {isOpen ? (<MdClose size={25}/>) : (<MdOutlineMenu size={25}/>)}
        </button>
        <div className={"fixed translate-y-[100px] right-5 z-50 text-gray-800 text-2xl flex flex-col justify-end gap-5 transition-all duration-500 " + (!isOpen && "opacity-0 translate-x-[150%]")}>
          <Link href="" className={"p-3 bg-yellow-200 rotate-2 scale-90 shadow-md dark:shadow-white transition-all duration-50 hover:rotate-0 hover:scale-100 hover:-translate-x-6 " + (router.pathname === "/avatar-creation" && "rotate-0 scale-100 shadow-lg")}>
            Avatar Creator
          </Link>
          <Link href="" className={"p-3 bg-violet-200 -rotate-2 scale-90 shadow-md dark:shadow-white transition-all duration-50 hover:rotate-0 hover:scale-100 hover:-translate-x-6 " + (router.pathname === "/documentation" && "rotate-0 scale-100 shadow-lg")}>
            Documentation
          </Link>
        </div>
      </div>
    </>
  );
}

//rounded-lg border-2 border-transparent p-2 transition-all duration-500 hover:border-yellow-600 hover:text-yellow-600