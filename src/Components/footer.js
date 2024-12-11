import React from 'react'

export const Footer = (props) => {
    return (
        <div className='bg-primary text-secondary text-left py-10 pl-10'>
            <div>Copyright © 2023-2024 Inhwa Song. All Rights Reserved. The website was designed by Inhwa Song and built with React.js.</div>
            <div>The design was inspired by multiple other wonderful personal websites (<span className='italic'>incl.</span> <a href="http://younghokim.net/" target="_blank">[1]</a>, <a href="https://haesookim.info/" target="_blank">[2]</a>, <a href="https://daeunchoi.com/" target="_blank">[3]</a>).</div>
        </div>
    )
}