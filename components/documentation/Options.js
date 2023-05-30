import React from 'react'
import UrlBlock from '@/components/UrlBlock'
import Example from './Example'

export default function Options() {
  return (
    <section id='options'>
        <h1>Options List</h1>
        <p>
            To get the list of all avaliable options, you can fetch the following endpoint. <strong>Json data</strong> would be responded.
            YOu may also check out the <a href='#demo'>Demo</a> below to know more about the <strong>data structure</strong> for options list.
        </p>
        <UrlBlock urlArr={['/api', '/options']} urlHighlight={[0, 1]}/>
        <div id='demo' className='examples'>
            <h2>Demo:</h2>
            <Example url="/api/options" format="json"/>
        </div>
    </section>
  )
}
