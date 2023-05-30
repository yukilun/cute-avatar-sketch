import React from 'react'
import UrlBlock from '@/components/UrlBlock'
import Link from 'next/link'
import Example from '@/components/documentation/Example'

export default function SingleSpecific() {
  return (
    <section id='single-specific'>
        <h1>Single Specific Avatar</h1>
        <h2># Endpoint 1 - Providing Option Names</h2>
        <p>
            You can use the following endpoint to get a single specific avatar. Note that you <strong>must provide</strong> all the <strong>required options</strong> as <strong>query string parameters</strong>.
            You can learn how to get the full list of options <a href='#options' >here</a> or try out our <Link href='/avatar-maker'>avatar maker</Link>.
            By default, a png image will be returned. You can choose to return <strong>json</strong> by passing it as the <code>format</code> query string parameter. 
        </p>
        <UrlBlock urlArr={['/api', '/avatar']} urlHighlight={[0, 1]}/>
        <div className='query-list'>
            <h2>Query String Parameter(s):</h2>
            <ul>
                <li><code>facial-expression</code> <em>(required)</em> - Name of the facial expression option, e.g. <code>happy</code></li>
                <li><code>hairstyle</code> <em>(required)</em> - Name of the hairstyle option, e.g. <code>generic-short-hair</code></li>
                <li><code>facial-feature</code> <em>(required)</em> - Name of the facial feature option, e.g. <code>mole-on-left-chin</code></li>
                <li><code>accessory</code> <em>(required)</em> - Name of the accessory option, e.g. <code>crown</code></li>
                <li><code>format</code> (optional) - Format of the response, <code>png</code> (default) or <code>json</code> </li>
            </ul>
        </div>
        <div className='examples'>
            <h2>Example(s):</h2>
            <Example url="/api/avatar/?facial-expression=happy&hairstyle=generic-short-hair&facial-feature=mole-on-left-chin&accessory=crown" format="png"/>
            <Example url="/api/avatar/?format=json&facial-expression=wink&hairstyle=bald&facial-feature=none&accessory=beanie" format="json"/>
        </div>

        <br/>

        <h2># Endpoint 2 - Providing Options ID</h2>
        <p>
            You can also use the following endpoint to get a single specific avatar by providing <code>{`<options-id>`}</code> as the path parameter. 
            The <code>{`<options-id>`}</code> is simply the <strong>concatenation</strong> of facial expression option index, hairstyle option index, 
            facial feature option index and accessory option index. Similar to the previous endpoint, you can choose to return json by specifying it in the query string.
        </p>
        <UrlBlock urlArr={['/api', '/avatar', '/<options-id>']} urlHighlight={[0, 1, 1]}/>
        <div className='query-list'>
            <h2>Query String Parameter(s):</h2>
            <ul>
                <li><code>format</code> (optional) - Format of the response, <code>png</code> (default) or <code>json</code> </li>
            </ul>
        </div>
        <div className='examples'>
            <h2>Example(s):</h2>
            <Example url="/api/avatar/0483" format="png"/>
            <Example url="/api/avatar/2753?format=json" format="json"/>
        </div>

    </section>
  )
}
