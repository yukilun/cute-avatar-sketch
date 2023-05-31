"use client"
import React, { useEffect, useState } from 'react'

export default function Menu() {

    const [currentSection, setCurrentSection] = useState('intro');

    useEffect(()=> {
        const handleScroll = () => {
            const y = window.scrollY + 50;
            const singleSpecificY = document.getElementById('single-specific').offsetTop;
            const singleRandomY = document.getElementById('single-random').offsetTop;
            const multiRandomY = document.getElementById('multi-random').offsetTop;
            const optionsY = document.getElementById('options').offsetTop;

            if(y < singleSpecificY) 
                setCurrentSection('intro');
            else if(y < singleRandomY) 
                setCurrentSection('single-specific');
            else if(y < multiRandomY) 
                setCurrentSection('single-random');
            else if(y < optionsY && window.innerHeight + window.scrollY < document.body.scrollHeight )
                setCurrentSection('multi-random');
            else 
                setCurrentSection('options');
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    
  return (
    <div className='w-full md:flex flex-col justify-start items-start gap-4 text-sm font-semibold sticky top-10'>
        <a href='#intro'className={'border-cyan-400 pl-2 opacity-60 hover:opacity-100 ' + (currentSection === 'intro' && 'border-l-2 !opacity-100')}>Introduction</a>
        <a href='#single-specific'className={'border-cyan-400 pl-2 opacity-60 hover:opacity-100 ' + (currentSection === 'single-specific' && 'border-l-2 !opacity-100')}>Single Specific Avatar</a>
        <a href='#single-random' className={'border-cyan-400 pl-2 opacity-60 hover:opacity-100 ' + (currentSection === 'single-random' && 'border-l-2 !opacity-100')}>Single Random Avatar</a>
        <a href='#multi-random' className={'border-cyan-400 pl-2 opacity-60 hover:opacity-100 ' + (currentSection === 'multi-random' && 'border-l-2 !opacity-100')}>Multiple Random Avatars</a>
        <a href='#options' className={'border-cyan-400 pl-2 opacity-60 hover:opacity-100 ' + (currentSection === 'options' && 'border-l-2 !opacity-100')}>Options List</a>
    </div>
  )
}
