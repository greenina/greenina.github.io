import React from 'react'
import './components.css'
import './topbar.css'

export const Topbar = (props) => {
    return(
        <nav className='topbar'>
            <div className='contents'>
                <div className='name'>  Inhwa Song</div>
                <input className="burger-check" type="checkbox" id="burger-check" /><label className="burger-icon" htmlFor="burger-check"><span className="burger-sticks"></span></label>
                <div className='menu'>                         
                    <a href="#about" className='hamburger-bar'>About Me</a>
                    {/* <a href="#projects" className='hamburger-bar'>Projects</a> */}
                    <a href="#publications" className='hamburger-bar'>Publications</a>
                    <a href="#CV" className='hamburger-bar'>CV</a>
                </div>
                <div className='links'>
                    <a href="#about">About Me</a>
                    {/* <a href="#projects">Projects</a> */}
                    <a href="#publications">Publications</a>
                    <a href="https://docs.google.com/document/d/1_ZGuOP94-1kckQbOkkY-SongxzJVprdv0Ayx1lG5a30/edit?usp=sharing">CV</a>
                </div>             
            </div>
        </nav>
    )
}