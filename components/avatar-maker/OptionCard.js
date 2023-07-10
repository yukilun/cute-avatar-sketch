"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ClipLoader from "react-spinners/ClipLoader";

export default function OptionCard({optionIndex, description, selectedCategory, selectedOptions, setSelectedOptions, setImgLoaded}) {

    const isSelected = selectedOptions[selectedCategory] === optionIndex ;
    const [isOptionReady, setIsOptionReady] = useState(true);

    const onOptionLoaded = () => {
      setIsOptionReady(true);
    }

    useEffect(()=> {
      setIsOptionReady(false);
    }, [selectedCategory]);

  return (
    <button 
        className={'m-2 rounded-lg hover:scale-105 ' + (isSelected && 'shadow-lg bg-white/50 dark:bg-white/30 dark:shadow-white/50')}
        onClick={()=> {
          if(isSelected) return;
          setImgLoaded(false);
          setSelectedOptions({...selectedOptions,  [selectedCategory]: optionIndex});
        }}
    > 
        {
          !isOptionReady && (
            <div className='w-full aspect-square flex flex-col justify-center items-center'>
              <ClipLoader color='#22d3ee' loading={!isOptionReady}/>
            </div>
          )
        }
        <Image className={!isOptionReady && 'h-0'} src={`/option/avatar-${selectedCategory}-${optionIndex}.png`} width={512} height={512} alt={description} priority onLoad={onOptionLoaded}/>
        <div>{optionIndex + ' : ' + description}</div>   
    </button>
  )
}
