import React from 'react'
import NewsItem from './NewsItem'

export default function NewsList({ newsItems }) {
  return (
    <div>
      <ul>
        {newsItems.map((newsItem) => {
          return <NewsItem newsItem={newsItem} />;
        })}
      </ul>
      <button>Back</button>
      <button>Forward</button>
    </div>
  );
}
