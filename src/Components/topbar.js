import React from 'react'
import './components.css'
import './topbar.css'
import { useNavigate } from 'react-router-dom'


export const Topbar = (props) => {
    const navigate = useNavigate()
    return (
        <nav className='bg-white py-4 shadow-md'>
            <div className='container mx-auto flex items-center justify-between px-12'>
                <div className='text-4xl font-extrabold text-primary cursor-pointer' onClick={(e) => navigate("/")}> 🐳 Inhwa Song</div>
                {/* <input className="hidden-peer" type="checkbox" id="burger-check" /> */}
                {/* <label
                    htmlFor="burger-check"
                    className="peer-checked:hidden block md:hidden cursor-pointer"
                >
                    <span className="block bg-black h-0.5 w-6 mb-1 transition-all duration-200"></span>
                    <span className="block bg-black h-0.5 w-6 transition-all duration-200"></span>
                </label>
                <div className='menu'>
                    <a onClick={(e) => {
                        navigate("/projects")
                        window.scrollTo(0, 0);
                    }}>Projects</a>
                    <a onClick={(e) => {
                        navigate("/publications")
                        window.scrollTo(0, 0);
                    }}>Publications</a>

                    <a href="https://docs.google.com/document/d/1_ZGuOP94-1kckQbOkkY-SongxzJVprdv0Ayx1lG5a30/edit?usp=sharing">CV</a>
                </div> */}
                <div className='flex space-x-10 text-xl font-semibold text-gray-500'>
                    {/* <a onClick={(e) => navigate("/#")}>Home</a> */}
                    {/* <a href="#publications">Publications</a> */}
                    <a
                        className='hover:text-primary cursor-pointer'
                        onClick={(e) => {
                            navigate("/projects")
                            window.scrollTo(0, 0);
                        }}>Projects</a>
                    <a
                        className='hover:text-primary cursor-pointer'
                        onClick={(e) => {
                            navigate("/publications")
                            window.scrollTo(0, 0);
                        }}>Publications</a>

                    <a className='hover:text-primary cursor-pointer' href="https://docs.google.com/document/d/1_ZGuOP94-1kckQbOkkY-SongxzJVprdv0Ayx1lG5a30/edit?usp=sharing">CV</a>
                </div>
            </div>
        </nav>
    )
}