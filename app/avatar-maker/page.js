"use client"
// this avatar-maker is mostly responsive (client-side rendering)

import React, { useState } from 'react'
import Template from '@/components/Template'
import Image from 'next/image'
import options from '@/public/options.json'
import UrlBlock from '@/components/UrlBlock'
import { IoIosOptions, IoMdClose } from 'react-icons/io'
import { IoDiceOutline, IoDownloadOutline } from 'react-icons/io5'
import OptionCategory from '@/components/OptionCategory'
import OptionCard from '@/components/OptionCard'
import { getRandomId } from '@/functions/helper'

export default function AvatarMaker() {

    const [isOpenOptions, setOpenOptions] = useState(false);

    const categories = ['facial-expression', 'hairstyle', 'facial-feature', 'accessory'];
    const [selectedCategory, setSelectedCategory] = useState('facial-expression');
    const [selectedOptions, setSelectedOptions] = useState({
        'facial-expression': 0, 'hairstyle': 0, 'facial-feature': 0, 'accessory': 0
    })
    const id = '' + selectedOptions['facial-expression'] + selectedOptions['hairstyle'] + selectedOptions['facial-feature'] + selectedOptions['accessory']

  return (
    <Template>
      <div className="avatar-maker w-[90%] max-w-[1250px] min-h-[250px] md:max-h-[70vh] mx-auto flex flex-col md:flex-row md:items-stretch bg-[#f2eecb] shadow-2xl dark:bg-[#2e3239] dark:shadow-gray-700 " >
        
        <div className='w-full text-end md:hidden' >
            <button className='p-4' onClick={()=> setOpenOptions(!isOpenOptions)}>
                {isOpenOptions ? <IoMdClose size={20}/> : <IoIosOptions size={20}/>}
            </button>
        </div>

        <div className={'w-full max-h-full md:w-1/2 p-3 pb-6 flex flex-col justify-center items-center ' + (isOpenOptions && 'hidden md:h-auto md:opacity-100') }>
            <div className='font-bold uppercase text-3xl pt-3 text-center'>Avatar Maker</div>
            <div className='relative text-center flex-grow min-h-0' >
                <Image src={`/avatar/avatar_${id}.png`} width={450} height={450} className='w-full h-full md:max-w-[450px] object-contain'/>
            </div>
            <div className='text-center'>
                <span>Your Avatar URL:</span>
                <UrlBlock urlArr={['/api', '/avatar',`/${id}`]} urlHighlight={[0, 1, 1]}/>
                <div className='flex flex-wrap w-full justify-center pt-4 gap-3 text-white'>
                    <button className='flex items-center p-2 rounded-md bg-yellow-600 opacity-60 hover:opacity-100 '
                        onClick={()=> {
                            const randomId = getRandomId();
                            setSelectedOptions({
                                'facial-expression': parseInt(randomId[0]), 'hairstyle': parseInt(randomId[1]), 'facial-feature': parseInt(randomId[2]), 'accessory': parseInt(randomId[3])
                            })
                            console.log(selectedOptions);
                        }}  
                    >
                        <IoDiceOutline size={20}/>&nbsp;Random Avatar
                    </button>
                    <a href={`/avatar/avatar_${id}.png`} download={`avatar_${id}.png`} className='flex items-center p-2 rounded-md bg-purple-700 opacity-60 hover:opacity-100 '>
                        <IoDownloadOutline size={20}/>&nbsp;Download PNG
                    </a>
                </div>
            </div>

        </div>

        <div className={'w-full max-h-full md:w-1/2 md:py-5 flex flex-col text-xs sm:text-sm transition-all duration-1000 '+ (!isOpenOptions && 'h-0 opacity-0 md:h-auto md:opacity-100') }>
            <div className='w-full grid grid-cols-2 gap-1 lg:grid-cols-4 px-3'> {/*grid grid-cols-2 gap-1 sm:grid-cols-4*/}
                {
                    categories.map((category, index) => {
                        return (
                            <OptionCategory key={index} category={category} selectedCategory={selectedCategory}  setSelectedCategory={setSelectedCategory}/>
                        );
                    })
                }
            </div>
            <div className='w-full max-h-full flex-grow grid grid-cols-2 gap-2 overflow-auto'>
                {
                    options[selectedCategory].map((description, index) => {
                        return (
                            <OptionCard key={index} optionIndex={index} description={description} 
                                selectedCategory={selectedCategory} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}
                            />
                        );
                    })
                }
            </div>
        </div>

      </div> 
    </Template>
  )
}