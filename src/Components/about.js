import React from 'react'
import './components.css'

export const About = (props) => {
    return(
        <div className="about">
            <div>
                <img src={'images/photo.png'} alt="profile"/>
                <div className='icons'>
                    <a href='mailto:igreen0485@kaist.ac.kr'><img src="/icons/mail.svg" alt="mail"/></a>
                    <a href='https://scholar.google.com/citations?user=wSmDOjUAAAAJ&hl=en'><img src="/icons/scholar.svg" alt="scholar"/></a>
                    <a href='https://www.linkedin.com/in/inhwa-song-993b091a7/'><img src="/icons/linkedin.svg" alt="linkedin"/></a>
                    <a href='PDF/CV.pdf'><img src="/icons/cv.svg" alt="cv"/></a>
                    <a href='https://github.com/greenina'><img src="/icons/github.svg" alt="github"/></a>
                </div>
            </div>
            <div className='contents'>
                <div className='greeting'>Hi, I'm Inhwa Song</div>
                <div className='description'>I am a highly motivated undergraduate HCI researcher studying and doing research at KAIST School of Computing. My research interests are centered around the dynamic interplay between technology design and its influence on individual well-being and mental health. I am particularly fascinated by the ways in which people engage with language models and personal informatics systems. My focus is to delve deeper into these interactions, exploring design strategies for effective interventions. Additionally, I believe that creativity has the power to be a catalyst for enhancing mental health and well-being. This belief drives me to explore the nexus of technology and creativity, supporting individuals to seek innovative ways in each of their unique contexts to actively improve well-being and mental health.</div>
                <b>I am a Ph.D. applicant for Fall 2025!</b>
                
            </div>
        </div>
    )
}