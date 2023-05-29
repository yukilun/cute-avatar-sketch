"use client"

import React from 'react'
import { MdVerticalAlignTop } from 'react-icons/md'

export default function TopButton() {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
    <button className='fixed bottom-8 right-0 p-2 rounded-l-md text-cyan-500 bg-white/70 hover:bg-white/100' onClick={()=>scrollToTop()}>
        <div className='flex items-center gap-2'>
            <MdVerticalAlignTop size={25} />
        </div>
    </button>
  )
}
