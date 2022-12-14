import React from 'react'

export default function NewsItem({newsItem}) {
  return (
    <li>
      <span>{newsItem.title}</span>
      <span>{newsItem.author}</span>
      <span>{newsItem.url}</span>
      <span>{newsItem.created_at.toLocaleString()}</span>
    </li>
  );
}
