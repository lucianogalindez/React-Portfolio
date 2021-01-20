import React, {useState, useEffect} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';

function Header() {

    const [open, setOpen] = useState(false)
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        })
        }
    , [])

    const handleMenu = () => {
        setOpen(!open)
    }

    return (
        <div className={show ? 'header-gray' : 'header'}>
            <div className='header__container'>
                <div className='header__left'>
                    <div className='header__logo'>
                        <a href='#home'>LG</a>
                    </div>
                </div>

                <div className='header__right'>
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#resume'>Resume</a>
                    <a href='#works'>Works</a>
                </div>
                <div className='header__burger' onClick={handleMenu}>
                    <MenuIcon style={{fontSize: '30px'}}/>
                </div>
                <div className={open ? 'header__hiddenMenu--open' : 'header__hiddenMenu--close'}>
                    <a href='#home' className='header__hiddenMenu-button' onClick={handleMenu}>Home</a>
                    <a href='#about' className='header__hiddenMenu-button' onClick={handleMenu}>About</a>
                    <a href='#resume' className='header__hiddenMenu-button' onClick={handleMenu}>Resume</a>
                    <a href='#works' className='header__hiddenMenu-button' onClick={handleMenu}>Works</a>
                </div>
            </div>
        </div>
    )
}

export default Header


