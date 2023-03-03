import React from 'react'
import './Body.css'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Resume from '../Resume/Resume'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
    
function Body(props) {
    return (
        <div className='body'>
            <Banner />
            <About />
            <Resume data={props.data}/>
            <Portfolio data={props.data}/>
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
            {/* <Contact /> */}
            <Footer />
        </div>
    )
}

export default Body
