import React from 'react'
import './components.css'
import publicationData from '../Data/publications.json'

export const Publications = (props) => {
    return(
        <div className="publications">
            <div className='title'>Publications</div>
            {/* <div className='equal-contribution'>* Equal Contribution</div> */}
            <div className='publicationlist'>
                {publicationData.map(publication => (
                    <div className='publication' key={publication.title}>
                        <div className='info'>
                            <div className='maininfo'>
                                <div className='title'>{publication.title}</div>
                                <div className='authors'>{publication.authors.map((author, index) => 
                                    <span className='authorholder'>
                                        <span className={publication.highlight_author.includes(index) ? "highlight_author" : "author"}>{author}</span>
                                        {index < publication.authors.length - 1 ? ', ' : ''}
                                    </span>
                                    )}
                                </div>
                            </div>
                            <div className='subinfo'>
                                <span className='booktitle'>{publication.booktitle}</span>
                                {publication.state ? <span className='state'>{publication.state}</span> : null}
                            </div>
                        </div>
                        <div className='awards'>{publication.awards.map(award =>
                                <span className='award'>🏆 {award}</span>)}
                            </div>
                        <div className='links'>
                            {publication.url ? <a href={publication.url}>DOI</a> : null}
                            {publication.pdf ? <a href={publication.pdf}>PDF</a> : null}
                            {publication.video ? <a href={publication.video}>VIDEO</a> : null}
                            {publication.arxiv ? <a href={publication.arxiv}>Arxiv</a> : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}