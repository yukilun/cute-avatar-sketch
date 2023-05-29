import React from 'react'

export default function OptionCategory({category, selectedCategory, setSelectedCategory}) {

    const categoryName = category.replace('-', '\n');

  return (
    <button className={'p-1 m-1 opacity-70 odd:border-cyan-400 even:border-pink-400 rounded-l-md capitalize whitespace-pre-line hover:opacity-100 hover:scale-105 ' 
                + (selectedCategory === category && 'bg-white !opacity-100 border-l-8 text-gray-800 -rotate-1')}
        onClick={()=> {setSelectedCategory(category)}}            
    >
        {categoryName}
    </button>
  )
}