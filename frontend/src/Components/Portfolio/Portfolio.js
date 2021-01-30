import React from 'react'
import './Portfolio.css'
//import project1 from '../../images/grayBackground.jpg'
//import project2 from '../../images/paisaje.jpg'
//import project3 from '../../images/space.jpg'

export default function Portfolio(props) {

    return (
        <div className='portfolio' id='works'>
            <div className='portfolio__section'>
                <h2>CHECK OUT SOME OF MY WORKS</h2>
                <div className='portfolio__works'>

                    {props.data.works.map((work) => (
                        <div className='portfolio__item' key={work.key}>
                            <a href={work.url} title={work.name}>
                                <img src={work.image} alt='project 1'></img>
                                <div className='portfolio__itemOverlay'>
                                    <h5>{work.name}</h5>
                                    <p>{work.skillsUsed}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                    
                    {/*<div className='portfolio__item'>
                        <a href='/#' title='Trabajo1'>
                            <img src={project1} alt='project 1'></img>
                            <div className='portfolio__itemOverlay'>
                                <h5>Proyecto 1</h5>
                                <p>Explicacion del proyecto 1</p>
                            </div>
                        </a>
                    </div>

                    <div className='portfolio__item'>
                        <a href='/#' title='Trabajo1'>
                            <img src='images/paisaje.jpg' alt='project 1'></img>
                            <div className='portfolio__itemOverlay'>
                                <h5>Proyecto 1</h5>
                                <p>Explicacion del proyecto 1</p>
                            </div>
                        </a>
                    </div>

                    <div className='portfolio__item'>
                        <a href='/#' title='Trabajo1'>
                            <img src={project3} alt='project 1'></img>
                            <div className='portfolio__itemOverlay'>
                                <h5>Proyecto 1</h5>
                                <p>Explicacion del proyecto 1</p>
                            </div>
                        </a>
                    </div>

                    <div className='portfolio__item'>
                        <a href='/#' title='Trabajo1'>
                            <img src={project1} alt='project 1'></img>
                            <div className='portfolio__itemOverlay'>
                                <h5>Proyecto 1</h5>
                                <p>Explicacion del proyecto 1</p>
                            </div>
                        </a>
                    </div>*/}

                </div>
            </div>
        </div>
    )
}
