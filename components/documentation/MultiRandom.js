import React from 'react'
import UrlBlock from '@/components/UrlBlock'
import ExampleRefresh from '@/components/documentation/ExampleRefresh'
import { IoMdRefresh } from 'react-icons/io'

export default function MultiRandom() {
  return (
    <section id='multi-random'>
        <h1>Multiple Random Avatars</h1>
        <p>
            The following endpoint allows you to get a list of random avatars.
            You must pass the <strong>number of random avatars</strong> (max. 50) you want as the <code>count</code> query string parameter.
        </p>
        <p>
            All the responses from this endpoint are in <strong>json format</strong>.
            By default, only <code>options-id</code> and <code>image-url</code> for each random avatar would be returned.
            If you want to have the <strong>options detail</strong> for each avatar, you can pass <strong>true</strong> to the <code>detail</code> query string parameter.
        </p>
        <UrlBlock urlArr={['/api', '/random', '/list']} urlHighlight={[0, 1, 1]}/>
        <div className='query-list'>
            <h2>Query String Parameter(s):</h2>
            <ul>
                <li><code>count</code> <em>(required)</em> - Number of random avatar, between <code>1</code> and <code>50</code></li>
                <li><code>detail</code> (optional) - , Boolean for including options detail or not, <code>true</code> or <code>false</code> (default)</li>
            </ul>
        </div>
        <div className='examples'>
            <h2>Example(s):</h2>
            <p>
                Try to click on the <span className='px-1 inline-block align-text-bottom'>
                    <IoMdRefresh size={25}/></span> button 
                in the following examples to fetch a new avatar!
            </p>
            <ExampleRefresh url="/api/random/list?count=3" format="json"/>
            <ExampleRefresh url="/api/random/list?count=2&detail=true" format="json"/>
        </div>
    </section>
  )
}
