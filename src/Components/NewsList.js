import React from 'react'
import NewsItem from './NewsItem'

export default function NewsList({ newsItems }) {
  return (
    <div>
      <ol>
        {newsItems.map((newsItem) => {
          return <NewsItem newsItem={newsItem} />;
        })}
      </ol>
      <button>Back</button>
      <button>Forward</button>
    </div>
  );
}
