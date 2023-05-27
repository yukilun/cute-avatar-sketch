'use client'
import React, { useState } from 'react'
import { BsClipboard , BsClipboardCheck } from 'react-icons/bs'
// import { Tooltip } from 'react-tooltip'
import Prism from "prismjs";
import "./prism.css";

export default function CodeBlock({code}) {

    const [isCopied, setCopied] = useState(false); 

  return (
    <div className='max-w-full p-1 text-sm lg:text-base rounded-md bg-[#2d2d2d] text-gray-400 flex items-center justify-between gap-3'>
        <div className='min-w-0 overflow-auto'>
            <pre>
                <code className="language-js">
                    {code}
                </code>
            </pre>
        </div>
        <div className='h-full'>
            <button 
                className={'pr-4 flex-grow-0 flex-shrink-0 flex items-center justify-end relative hover:text-white ' + (isCopied ? 'copied' : 'copy')}
                onClick={()=>{
                    setCopied(false);
                    navigator.clipboard.writeText(code)
                    .then(()=> {
                        console.log('copied!');
                        setCopied(true);
                        setTimeout(()=> setCopied(false), 2000);
                    })
                    .catch(()=> console.log('cannot copy'))
                    }}
            >
                {!isCopied ? (<BsClipboard size={20}/>): (<BsClipboardCheck size={20} className='text-cyan-400'/>)}
            </button>
        </div>
    </div>

  )
}
