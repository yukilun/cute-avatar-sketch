'use client'

import { getRandomId } from '@/functions/helper';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

export default function RandomAvatar() {

    const [imgNum, setImgNum] = useState('0000');

    useEffect(()=> {
        
        const timer = setInterval(()=> {
            const newImgNum = getRandomId();
            setImgNum(newImgNum);
        }, 2000);

        return () => clearInterval(timer);
    }, [])

  return (
    <div className='-z-50 animate-bounce flex-grow max-w-[60%]'>
      <Image src={`/avatar/avatar_${imgNum}.png`} alt='random avatar image' width={600} height={600}/>
    </div>
  )
}
