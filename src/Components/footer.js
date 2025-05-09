import React from 'react'

export const Footer = (props) => {
    return (
        <div className='bg-primary text-secondary text-left py-10 pl-10'>
            <div>Copyright © 2023-2025 Inhwa Song. All Rights Reserved. The website was designed by Inhwa Song and built with React.js.</div>
            <div>Acknowledgements: The design of this website was inspired by multiple other wonderful personal websites (<span className='italic'>incl.</span> <a href="http://younghokim.net/" target="_blank">[1]</a>, <a href="https://haesookim.info/" target="_blank">[2]</a>, <a href="https://daeunchoi.com/" target="_blank">[3]</a>). The initial skeleton code was forked from <a href='https://github.com/Hyunseung-Lim/webpagetemplate' target="_blank" className='underline'>here</a>, and heavily modified.</div>
        </div>
    )
}