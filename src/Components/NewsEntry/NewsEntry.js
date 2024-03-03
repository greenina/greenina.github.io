import './NewsEntry.css'

const NewsEntry = ({news}) => {
  return(
    <div className='news'>
      <div className='news-date'>{news.date}</div>
      <div className='news-content'>{news.content}</div>
    </div>
  )
}

export default NewsEntry;