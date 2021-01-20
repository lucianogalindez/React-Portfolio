import React from 'react'
import './Resume.css'

export default function Resume() {

    const skills = [
        {
            name: 'JavaScript',
            level: '70%'
        },
        {
            name: 'ReactJS',
            level: '80%'
        },
        {
            name: 'MongoDB',
            level: '60%'
        },
        {
            name: 'NodeJS',
            level: '60%'
        }
    ]

    return (
        <div id='resume'>
            <div className='resume'>

                <div className='resume__education'>
                    <div className='resume__title'>
                        <h2>Education</h2>
                    </div>
                    <div className='resume__content'>
                        <h3>National University of Tucuman</h3>
                        <h4>Industrial Engineering • November 2019</h4>
                    </div>
                </div>

                <div className='resume__work'>
                    <div className='resume__title'>
                        <h2>Works</h2>
                    </div>
                    <div className='resume__content'>
                        <h3>Link Inversiones</h3>
                        <h4>budget analyst • April 2019 - Present</h4>
                        <p>Budget management and control. AppWeb development for global information control</p>
                    </div>
                </div>

                <div className='resume__skills'>
                    <div className='resume__title'>
                        <h2>Skills</h2>
                    </div>
                    <div className='resume__content'>
                        <h4>Experience in the management and control of budgets, advanced management of Office packages and good knowledge in programming</h4>
                        <ul className='resume__listSkills'>

                            {skills.map((skill) => (
                                <li key={skill.name}>
                                    <span class='resume__listSkills-active' style={{width: skill.level}}></span>
                                    <span className='resume__listSkills-title'>{skill.name}</span>
                                </li>
                            ))}

                            {/*
                            <li>
                                <span class='resume__listSkills-active' style={{width: skills.javascript.level}}></span>
                                <span className='resume__listSkills-title'>{skills.javascript.name}</span>
                            </li>
                            <li>
                                <span class='resume__listSkills-active'></span>
                                <span className='resume__listSkills-title'>ReactJS</span>
                            </li>
                            <li>
                                <span class='resume__listSkills-active'></span>
                                <span className='resume__listSkills-title'>MongoDB</span>
                            </li>
                            <li>
                                <span class='resume__listSkills-active'></span>
                                <span className='resume__listSkills-title'>NodeJS</span>
                            </li>*/}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
