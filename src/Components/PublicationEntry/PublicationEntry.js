import { useState } from 'react'
import './PublicationEntry.css'

const PubBtn = ({href, icon, text}) => {
  return(
    <a
      // className="btn btn-sm btn-secondary me-2 mt-0"
      href={href}
      style={{
        padding: "2px 6px",
        color: "black",
        fontSize: "14px",
        fontWeight: "600",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
        backgroundColor: "#E8F4E9",
        textDecorationLine: 'none',
        borderRadius: "7px"
      }}
      target="_blank"
    >
      {/* {icon && <i className={"pe-1 " + icon}></i>} */}
      {text}
    </a>
  )
}

const PublicationEntry = ({publication}) => {
  const [abstract, setAbstract] = useState(false)
  return (
    <div className='publication' key={publication.title}>
      <div className='publication-info'>
          <div className='maininfo'>
              <div className='publication-title'>{publication.title}</div>
              <div className='publication-authors'>{publication.authors.map((author, index) => 
                  <span className='authorholder'>
                    {author.url?
                      <a href={author.url} target="_blank">{author.name}</a>:
                      <span className={publication.highlight_author.includes(index) ? "highlight_author" : "author"}>{author.name}</span>}
                      {index < publication.authors.length - 1 ? ', ' : ''}
                  </span>
                  )}
              </div>
          </div>
          <div className='publication-subinfo'>
              <span className='booktitle'>{publication.booktitle}</span>
              {publication.state ? <span className='state'>{publication.state}</span> : null}
          </div>
      </div>
      {/* <div className='awards'>{publication.awards.map(award =>
          <span className='award'>🏆 {award}</span>)}
      </div> */}
      <div className='publication-links'>
          {/* {publication.url ? <a href={publication.url}>DOI</a> : null}
          {publication.pdf ? <a href={publication.pdf}>PDF</a> : null}
          {publication.video ? <a href={publication.video}>VIDEO</a> : null}
          {publication.arxiv ? <a href={publication.arxiv}>Arxiv</a> : null} */}
          {publication.url ? <PubBtn href={publication.url}/> : null}
          {publication.pdf ? <PubBtn href={publication.pdf} text="PDF" target="_blank"/> : null}
          {publication.arxiv ? <PubBtn href={publication.arxiv} text="Arxiv"/> : null}
          {publication.abstract ? <div onClick={() => {setAbstract(!abstract)}}><PubBtn text="Abs"/></div> : null}
      </div>
      {abstract?<div className='abstract'> {publication.abstract} </div>:null}
  </div>
  )
}

export default PublicationEntry;