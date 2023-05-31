"use client"
import Link from 'next/link';
import React, { useCallback, useDebugValue, useEffect, useState } from 'react'
import { IoMdRefresh } from 'react-icons/io'
import axios from 'axios';

export default function ExampleRefresh({url, format}) {

    const [data, setData] = useState();
    const [isImgLoaded, setImgLoaded] = useState(false);

    const fetchData = useCallback(async()=> {
        setData('fetching');

        if(format === 'png') {
            setImgLoaded(false);
            // for regenerate purpose, add a useless time query params at the end to distinguish between each fetch
            return setData(process.env.NEXT_PUBLIC_URL + url + '?' + new Date().getTime()); 
        }


        axios.get(process.env.NEXT_PUBLIC_URL + url)
            .then((res) => setData(res.data))
            .catch((err)=> setData(null));

    }, []);

    useEffect(()=> {
        fetchData();
    }, [fetchData]);

    useEffect(()=> {
        console.log(isImgLoaded);
    },[isImgLoaded]);

  return (
    <div className='example w-full h-[250px] bg-neutral-200 dark:bg-neutral-600 rounded-lg flex flex-col gap-3 p-3'>
        <div className='top-bar w-full flex items-center'>
            <div className='buttons flex gap-1.5 pr-4'>
                <div className='h-3.5 w-3.5 rounded-full bg-red-400'>&nbsp;</div>
                <div className='h-3.5 w-3.5 rounded-full bg-yellow-400'>&nbsp;</div>
                <div className='h-3.5 w-3.5 rounded-full bg-green-400'>&nbsp;</div>
            </div>
            <div className='url bg-white dark:bg-neutral-800 w-0 flex-grow overflow-auto whitespace-nowrap font-mono text-xs p-2 rounded-l-lg text-cyan-600'>
                <Link href={`${process.env.NEXT_PUBLIC_URL}${url}`}>{`${process.env.NEXT_PUBLIC_URL}${url}`}</Link>
            </div>
            <div className='group refresh h-full bg-white dark:bg-neutral-800 rounded-r-lg flex items-center px-2'>
                <button className='opacity-70 group-hover:opacity-100' onClick={()=>fetchData()}>
                    <IoMdRefresh />
                </button>
            </div>
        </div>
        <div className='content w-full h-0 flex-grow overflow-auto bg-white dark:bg-neutral-800 rounded-lg text-xs p-2'>
            {
                data === 'fetching' ? (
                    <pre>Fetching...</pre>
                ) : format === 'png' ? (
                    <div className='h-full w-full'>
                        <pre className={(isImgLoaded && 'hidden')}>Fetching...</pre>
                        <img key={data} src={data} alt="" className='max-h-full object-contain ' onLoad={()=> setImgLoaded(true)} />
                    </div>
                ) : data !== null ? (
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                ) : (
                    <pre className='text-red-500'>Error! Unable to fetch data...</pre>
                )
            }
        </div>
    </div>
  )
}
