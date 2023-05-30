import Link from 'next/link';
import React from 'react'

export default async function Example({url, format}) {

    const fetchData = async() => {
        if(format === 'png') 
            return process.env.NEXT_PUBLIC_URL + url;

        const res = await fetch(process.env.NEXT_PUBLIC_URL + url, { next: { revalidate: 10 } });

        if (!res.ok) {
            return null;
        }
     
        return res.json();
    }

    const data = await fetchData();

  return (
    <div className='example w-full h-[250px] bg-neutral-200 dark:bg-neutral-600 rounded-lg flex flex-col gap-3 p-3'>
        <div className='top-bar w-full flex items-center gap-4'>
            <div className='buttons flex gap-1.5'>
                <div className='h-3.5 w-3.5 rounded-full bg-red-400'>&nbsp;</div>
                <div className='h-3.5 w-3.5 rounded-full bg-yellow-400'>&nbsp;</div>
                <div className='h-3.5 w-3.5 rounded-full bg-green-400'>&nbsp;</div>
            </div>
            <div className='url bg-white dark:bg-neutral-800 w-0 flex-grow overflow-auto whitespace-nowrap font-mono text-xs p-2 rounded-lg text-cyan-600'>
                <Link href={`${process.env.NEXT_PUBLIC_URL}${url}`}>{`${process.env.NEXT_PUBLIC_URL}${url}`}</Link>
            </div>
        </div>
        <div className='content w-full h-0 flex-grow overflow-auto bg-white dark:bg-neutral-800 rounded-lg text-xs p-2'>
            {
                format === 'png' ? (
                    <img src={data} alt="" className='max-h-full object-contain' />
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
