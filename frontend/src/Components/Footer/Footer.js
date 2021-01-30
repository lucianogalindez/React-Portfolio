import React from 'react'
import './Footer.css'

//Material UI
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer__creator'>
                <p>Pagina confeccionada por Luciano Galindez</p>
            </div>
            <div className='footer__social'>
                <a href="https://www.facebook.com/luxx.sc" className='facebook'><FacebookIcon /></a>
                <a href="https://www.linkedin.com/in/luciano-galindez-007b59142/" className='linkedin'><LinkedInIcon /></a>
            </div>
            <div class='footer__up'>
                <a href='#home'><ArrowUpwardIcon /></a>
            </div>
            
        </div>
    )
}
