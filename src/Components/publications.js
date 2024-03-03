import React from 'react'
import './components.css'
import publicationData from '../Data/publications.json'
import PublicationEntry from './PublicationEntry/PublicationEntry'

export const Publications = (props) => {
    return(
        <div className="publications">
            <div className='publications-header'>Publications</div>
            {/* <div className='equal-contribution'>* Equal Contribution</div> */}
            {/* <hr/> */}
            <div className='publicationlist'>
                {publicationData.map(publication => (
                    <PublicationEntry publication={publication}/>
                ))}
            </div>
        </div>
    )
}