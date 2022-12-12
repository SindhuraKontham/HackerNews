import React from 'react'
import NewsItem from './NewsItem'

export default function NewsList({ data }) {
  return (
    <div>
        <ul>
            {data.map((newsItem) => {
                return <NewsItem newsItem={newsItem}/> 
            })}
        </ul>
        <button>Back</button>
        <button>Forward</button>
    </div>
  )
}
