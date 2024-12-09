import './News.css'
// import newsData from '../Data/news.json'
// import NewsEntry from './NewsEntry/NewsEntry'
import newsData from '../../Data/news.json'
import NewsEntry from '../NewsEntry/NewsEntry'

const News = () => {
  return (
    <div className='newslist'>
      {newsData.map(news => (
        <NewsEntry news={news} />
      ))}
    </div>
  )
}

export default News;