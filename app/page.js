import RandomAvatar from "@/components/RandomAvatar";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";
import Template from "@/components/Template";

import dir from "@/functions/helper.js";

export default function Home() {

  const dir = process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost:3000'

  return (
    <Template isHomePage={true}>
      <div className="container w-[90%] max-w-[1000px] mx-auto flex flex-col items-center justify-between md:flex-row">
        
        <RandomAvatar />

        <div className="flex-grow max-w-full flex flex-col gap-8 items-center text-center"> 

          <div className="text-2xl md:text-4xl">
            API for generating cute avatar sketches
          </div>

          <div className="mb-4 text-lg md:text-2xl text-slate-500 w-full flex flex-col items-center gap-2">
            Quick Random Generation: 
            <CodeBlock code={`http://${dir}/api/random`}/>
          </div>
            
          <div className="flex flex-col gap-6 text-gray-800 text-2xl md:text-4xl">
            <Link href="" className="w-fit p-4 bg-yellow-200 rotate-2 scale-90 shadow-md dark:shadow-white transition-all duration-50 hover:rotate-0 hover:scale-100">
              Avatar Creator
            </Link>
            <Link href="" className="w-fit p-4 bg-violet-200 -rotate-1 scale-90 shadow-md dark:shadow-white transition-all duration-50 hover:rotate-0 hover:scale-100">
              Documentation
            </Link>
          </div>

        </div>

      </div>      
    </Template>
  );
}
