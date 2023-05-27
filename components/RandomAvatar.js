'use client'

import { randomNumber } from '@/functions/helper';
import React, { useEffect, useState } from 'react'

export default function RandomAvatar() {

    const [imgNum, setImgNum] = useState('0000');

    useEffect(()=> {
        
        const timer = setInterval(()=> {
            const newImgNum = randomNumber();
            setImgNum(newImgNum);
        }, 1000);

        return () => clearInterval(timer);
    }, [])

  return (
    <div className='-z-50 animate-bounce flex-grow max-w-[60%]'>
      <img src={`/avatar/avatar_${imgNum}.png`} alt='random avatar image' width={600} height={600}/>
    </div>
  )
}
