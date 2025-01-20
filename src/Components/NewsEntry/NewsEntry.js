const NewsEntry = ({ news }) => {
  return (
    <div className='flex flex-row gap-3 text-normal py-1'>
      <div className='font-semibold'>{news.date}</div>
      <div className=''>{news.content}</div>
    </div>
  )
}

export default NewsEntry;