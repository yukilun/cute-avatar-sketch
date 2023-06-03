import React from 'react'
import Image from 'next/image'

export default function OptionCard({optionIndex, description, selectedCategory, selectedOptions, setSelectedOptions, setImgLoaded}) {

    const isSelected = selectedOptions[selectedCategory] === optionIndex ;

  return (
    <button 
        className={'m-2 rounded-lg hover:scale-105 ' + (isSelected && 'shadow-lg bg-white/50 dark:bg-white/30 dark:shadow-white/50')}
        onClick={()=> {
          if(isSelected) return;
          setImgLoaded(false);
          setSelectedOptions({...selectedOptions,  [selectedCategory]: optionIndex});
        }}
    > 
        <Image src={`/option/avatar-${selectedCategory}-${optionIndex}.png`} width={512} height={512} alt={description} priority/>
        <div>{optionIndex + ' : ' + description}</div>   
    </button>
  )
}
