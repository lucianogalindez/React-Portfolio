import React from 'react'
import './Banner.css'

export default function Banner() {
    return (
        <div id='home' className='home'>
            <div className='banner__bgImage'>
                <div className='banner__title'>
                    <h1>I'm Luciano Galindez</h1>
                    <h2>I'm a Argentinian based <span>Industrial Engineer</span>. passionate about data analysis, programming and development</h2>
                </div>
                <div className='banner--fedeBotton' />
            </div>
        </div>
    )
}
