import React from 'react'
import TemplateFixedNavbar from '@/components/TemplateFixedNavbar'
import Intro from '@/components/documentation/Intro'
import SingleSpecific from '@/components/documentation/SingleSpecific'
import SingleRandom from '@/components/documentation/SingleRandom'
import MultiRandom from '@/components/documentation/MultiRandom'
import Options from '@/components/documentation/Options'
import Menu from '@/components/documentation/Menu'

export default function Documentation() {
  return (
    <TemplateFixedNavbar>
      <div className="documentation-container w-[90%] max-w-[1000px] mx-auto flex-grow flex justify-stretch gap-4 font-sans" >
        <div className='menu w-[180px] flex-shrink-0 hidden md:block relative'>
           <Menu />
        </div>
        <div className='seperator hidden md:block w-0.5 bg-gray-400/20 mr-10'>&nbsp;</div>
        <div className='documentation flex-grow overflow-auto text-xl leading-relaxed max-h-full'>
            {/** Documentation content styling is provided in gloals.css */}
            <Intro />
            <hr/>
            <SingleSpecific />
            <hr/>
            <SingleRandom />
            <hr/>
            <MultiRandom />
            <hr/>
            <Options />
        </div>
      </div> 
    </TemplateFixedNavbar>
  )
}
