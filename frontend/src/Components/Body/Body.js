import React from 'react'
import './Body.css'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Resume from '../Resume/Resume'
import Portfolio from '../Portfolio/Portfolio'
    
function Body() {
    return (
        <div className='body'>
            <Banner />
            <About />
            <Resume />
            <Portfolio />
            {/*<img className='body__bg' src={bg} />
            <div className='body__container'>
               <div className='body__content'>
                    <h1>Impresiones 3D</h1>
                    <h2>Conectamos oferta y demanda</h2>
                    <div className='body__buttons'>
                        <Button>Soy Creador</Button>
                        <Button>Soy Comprador</Button>
                    </div>
               </div>
            </div>*/}
        </div>
    )
}

export default Body
