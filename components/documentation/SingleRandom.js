import React from 'react'
import UrlBlock from '@/components/UrlBlock'
import ExampleRefresh from '@/components/documentation/ExampleRefresh'
import { IoMdRefresh } from 'react-icons/io'

export default function SingleRandom() {
  return (
    <section id='single-random'>
        <h1>Single Random Avatar</h1>
        <p>
            You can use the following endpoint to get a single random avatar.
            By default, a png image will be returned. You can choose to return json by passing it as the <code>format</code> query string parameters. 
        </p>
        <UrlBlock urlArr={['/api', '/random']} urlHighlight={[0, 1]}/>
        <div className='query-list'>
            <h2>Query String Parameter(s):</h2>
            <ul>
                <li><code>format</code> (optional) - Format of the response, <code>png</code> (default) or <code>json</code> </li>
            </ul>
        </div>
        <div className='examples'>
            <h2>Example(s):</h2>
            <p>
                Try to click on the <span className='px-1 inline-block align-text-bottom'>
                    <IoMdRefresh size={25}/></span> button 
                in the following examples to fetch a new avatar!
            </p>
            <ExampleRefresh url="/api/random" format="png"/>
            <ExampleRefresh url="/api/random?format=json" format="json"/>
        </div>
    </section>
  )
}
