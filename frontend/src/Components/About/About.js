import React from 'react'
import './About.css'
import profilePic from '../../images/grayBackground.jpg'

export default function About() {
    return (
        <div className='about' id='about'>
            <div className='about_profilePic'>
                <img className='profile-pic' src={profilePic} alt='Luciano Galindez'></img>
            </div>
            <div className='about__info'>
                <div className='about__info-about'>
                    <h2>About me</h2>
                    <p>
                        My name is Luciano Galindez. I have a degree in Industrial Engineering from the National University of Tucuman. I am currently perfecting myself as a JavasScript Full Stack developer
                    </p>
                </div>
                <div className='about__info-contact'>
                    <h2>
                        Contact Details
                    </h2>
                    <ul>
                        <li>Luciano Galindez</li>
                        <li>San Martin 677</li>
                        <li>Tucuman, Argentina, 4000</li>
                        <li>+54 3813023087</li>
                        <li>lucianogalindez222@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
