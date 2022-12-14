import React from 'react'

export default function NewsItem({newsItem}) {
  return (
    <li className='NewsItem'>
      <span>{newsItem.title}</span>
      <span>{newsItem.author}</span>
      <p><a href={newsItem.url}>{newsItem.url}</a></p>
      <span className='createddate'>{newsItem.created_at.toLocaleString()}</span>
    </li>
  );
}
