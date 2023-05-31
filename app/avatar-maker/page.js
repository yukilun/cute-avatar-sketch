"use client"
// this avatar-maker is mostly responsive (client-side rendering)

import React, { useEffect, useState } from 'react'
import Template from '@/components/Template'
import options from '@/public/options.json'
import UrlBlock from '@/components/UrlBlock'
import { IoIosOptions, IoMdClose } from 'react-icons/io'
import { IoDiceOutline, IoDownloadOutline } from 'react-icons/io5'
import OptionCategory from '@/components/avatar-maker/OptionCategory'
import OptionCard from '@/components/avatar-maker/OptionCard'
import { getRandomId } from '@/functions/helper'
import { ClipLoader } from 'react-spinners'
import Image from 'next/image'

export default function AvatarMaker() {

    const [isOpenOptions, setOpenOptions] = useState(false);
    const [isImgLoaded, setImgLoaded] = useState(true);

    const categories = ['facial-expression', 'hairstyle', 'facial-feature', 'accessory'];
    const [selectedCategory, setSelectedCategory] = useState('facial-expression');
    const [selectedOptions, setSelectedOptions] = useState({
        'facial-expression': 0, 'hairstyle': 0, 'facial-feature': 0, 'accessory': 0
    })
    const id = '' + selectedOptions['facial-expression'] + selectedOptions['hairstyle'] + selectedOptions['facial-feature'] + selectedOptions['accessory']

    useEffect(()=> {
        console.log('isImgLoaded: ' + isImgLoaded);
    },[isImgLoaded])

  return (
    <Template>
      <div className="avatar-maker w-[90%] max-w-[1250px] min-h-[250px] md:max-h-[70vh] mx-auto flex flex-col md:flex-row md:items-stretch bg-[#f2eecb] shadow-2xl dark:bg-[#2e3239] dark:shadow-gray-700 " >
        
        <div className='w-full text-end md:hidden' >
            <button className='p-4' onClick={()=> setOpenOptions(!isOpenOptions)}>
                {isOpenOptions ? <IoMdClose size={25}/> : <IoIosOptions size={25}/>}
            </button>
        </div>

        <div className={'w-full max-h-full md:w-1/2 p-3 pb-6 flex flex-col justify-center items-center ' + (isOpenOptions && 'hidden md:flex md:h-auto md:opacity-100') }>
            <div className='font-bold uppercase text-3xl pt-3 text-center'>Avatar Maker</div>
            
            <div className='relative text-center flex-grow min-h-0 w-full' >
                {/* <div className={'w-[450px] h-[450px] max-w-full max-h-full aspect-square relative mx-auto flex items-center justify-center'} >
                    <img key={ `${id}_${new Date().getTime()}`} src={`/avatar/avatar_${id}.png`} alt={`avatar_${id}`} 
                            className={'w-full h-full object-contain ' + (!isImgLoaded && 'hidden')} 
                            onLoad={()=> setImgLoaded(true)}
                    />
                    <div className={(isImgLoaded && 'hidden')}>
                        <ClipLoader color='#22d3ee' loading={!isImgLoaded}/>
                    </div>
                </div> */}
                    <div className='w-full h-full max-w-[300px] max-h-[300px] mx-auto my-auto md:max-w-[450px] md:max-h-full'>
                        <Image src={`/avatar/avatar_${id}.png`} alt={`avatar_${id}`} width={450} height={450}
                                className={'w-full h-full object-contain ' + (!isImgLoaded && 'opacity-0')} 
                                onLoad={()=> setImgLoaded(true)}
                        />
                        <div className={'absolute top-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 ' + (isImgLoaded && 'opacity-0')}>
                            <ClipLoader color='#22d3ee' loading={!isImgLoaded}/>
                        </div>
                    </div>

            </div>

            <div className='text-center z-40'>
                <span>Your Avatar URL:</span>
                <UrlBlock urlArr={['/api', '/avatar',`/${id}`]} urlHighlight={[0, 1, 1]}/>
                <div className='flex flex-wrap w-full justify-center pt-4 gap-3 text-white'>
                    <button className='flex items-center p-2 rounded-md bg-yellow-600 opacity-60 hover:opacity-100 '
                        onClick={()=> {
                            const randomId = getRandomId();
                            if(randomId === id) return;
                            setImgLoaded(false);
                            setSelectedOptions({
                                'facial-expression': parseInt(randomId[0]), 'hairstyle': parseInt(randomId[1]), 'facial-feature': parseInt(randomId[2]), 'accessory': parseInt(randomId[3])
                            })
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
                                setImgLoaded={setImgLoaded}
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