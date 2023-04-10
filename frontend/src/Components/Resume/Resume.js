import React from 'react'
import './Resume.css'

export default function Resume(props) {

    const skills = props.data.skills

    /* Hacerlo asi al principio
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
    ]*/

    return (
        <div id='resume'>
            <div className='resume'>

                <div className='resume__education'>
                    <div className='resume__title'>
                        <h2>Education</h2>
                    </div>
                    <div className='resume__content__container'>
                        <div className='resume__content'>
                            <h3>National University of Tucuman</h3>
                            <h4>Industrial Engineering • November 2019</h4>
                        </div>
                    </div>
                </div>

                <div className='resume__work'>
                    <div className='resume__title'>
                        <h2>Works</h2>
                    </div>
                    <div className='resume__content__container'>
                        <div className='resume__content'>
                            <h3>Paramo Technologies</h3>
                            <h4>Business Analyst • January 2023 - Present</h4>
                            <p>
                                • Refinement of cases from clients, support and product owner <br/> 
                                • Elaboration of user stories and presentation of them to the development team <br/> 
                                • Organization and prioritization of cases during sprints 
                            </p>
                        </div>
                        <div className='resume__content'>
                            <h3>Sovos</h3>
                            <h4>Business Analyst II • November 2021 - Present</h4>
                            <p>
                                • Refinement of cases from clients, support and product owner <br/> 
                                • Elaboration of user stories and presentation of them to the development team <br/> 
                                • Management of databases (SQL server) for the generation of more detailed user stories <br/> 
                                • Data visualization with Power BI <br/> 
                                • Constant interaction with the technical team throughout the development of tickets 
                            </p>
                        </div>
                        <div className='resume__content'>
                            <h3>CoderHouse</h3>
                            <h4>ReactJs Tutor • May 2021 - May 2022</h4>
                            <p>
                                • Orientation and clarification of the concepts seen in the classes <br/> 
                                • Constant interaction with students and other Coderhouse staff members
                            </p>
                        </div>
                        <div className='resume__content'>
                            <h3>Link Inversiones</h3>
                            <h4>Budget Analyst • April 2019 - November 2021</h4>
                            <p>
                                • Budget management and control <br/>
                                • Management of groups of people <br/> 
                                • AppWeb development for global information control <br/>
                            </p>
                        </div>
                    </div>
                    
                </div>

                <div className='resume__skills'>
                    <div className='resume__title'>
                        <h2>Skills</h2>
                    </div>
                    <div className='resume__content__container'>
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
        </div>
    )
}
