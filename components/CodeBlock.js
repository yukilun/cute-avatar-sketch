'use client'
import React, { useState } from 'react'
import {MdContentCopy} from 'react-icons/md'
// import { Tooltip } from 'react-tooltip'

export default function CodeBlock({code}) {

    const [isCopied, setCopied] = useState(false);

  return (
    <div className='max-w-full px-6 py-4 text-base rounded-md bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-between gap-4'>
        <div className='min-w-0 overflow-auto'><pre>{code}</pre></div>
        <div className='h-full'>
            {!isCopied ? (
            <button 
                className='w-[50px] flex-grow-0 flex-shrink-0 flex items-center justify-end hover:text-cyan-400' 
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
                <MdContentCopy/>
            </button>) : (
                <pre className='w-[50px] flex-grow-0 flex-shrink-0 text-cyan-400'>Copied!</pre>
            )}
        </div>
    </div>

  )
}
