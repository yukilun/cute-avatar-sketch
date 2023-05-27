import RandomAvatar from "@/components/RandomAvatar";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";
import Template from "@/components/Template";

import dir from "@/functions/helper.js";

export default function Home() {

  return (
    <Template isHomePage={true}>
      <div className="container w-[90%] max-w-[1000px] mx-auto flex flex-col items-center justify-between md:flex-row md:gap-5">
        
        <RandomAvatar />

        <div className="flex-grow max-w-full md:max-w-[60%] flex flex-col gap-5 md:gap-8 items-center text-center"> 

          <div className="text-xl md:text-4xl">
            API for generating cute avatar sketches
          </div>

          <div className="mb-4 text-base md:text-2xl text-slate-500 w-full flex flex-col items-center gap-2">
            Quick Random Generation: 
            <CodeBlock code={`${process.env.PUBLIC_URL}/api/random`}/>
          </div>
            
          <div className="flex flex-col gap-4 md:gap-6 text-gray-800 text-xl md:text-4xl">
            <Link href="" className="w-fit p-3 md:p-4 bg-yellow-200 rotate-2 scale-90 shadow-md dark:shadow-white transition-all duration-50 hover:rotate-0 hover:scale-100">
              Avatar Creator
            </Link>
            <Link href="" className="w-fit p-3 md:p-4 bg-violet-200 -rotate-1 scale-90 shadow-md dark:shadow-white transition-all duration-50 hover:rotate-0 hover:scale-100">
              Documentation
            </Link>
          </div>

        </div>

      </div>      
    </Template>
  );
}
