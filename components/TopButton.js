"use client"

import React from 'react'
import { MdVerticalAlignTop } from 'react-icons/md'

export default function TopButton() {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
    <button className='fixed z-50 bottom-8 right-4 p-2 rounded-md shadow-md dark:shadow-gray-400 text-cyan-500 bg-white opacity-70 hover:opacity-100' onClick={()=>scrollToTop()}>
        <div className='flex items-center gap-2'>
            <MdVerticalAlignTop size={25} />
        </div>
    </button>
  )
}
