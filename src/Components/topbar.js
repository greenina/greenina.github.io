import React from 'react'
import './components.css'
import './topbar.css'

export const Topbar = (props) => {
    return(
        <nav className='topbar'>
            <div className='contents'>
                <img className='logo' src="logo192.png" alt="Logo" />
                <input className="burger-check" type="checkbox" id="burger-check" /><label className="burger-icon" htmlFor="burger-check"><span className="burger-sticks"></span></label>
                <div className='menu'>                         
                    <a href="#about" className='hamburger-bar'>About Me</a>
                    {/* <a href="#projects" className='hamburger-bar'>Projects</a> */}
                    <a href="#publications" className='hamburger-bar'>Publications</a>
                </div>
                <div className='links'>
                    <a href="#about">About Me</a>
                    {/* <a href="#projects">Projects</a> */}
                    <a href="#publications">Publications</a>
                </div>             
            </div>
        </nav>
    )
}