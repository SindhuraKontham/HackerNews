import logo from './logo.svg';
import './App.css';
import hackernews from './hackernews.json'
import { useState, useEffect } from 'react';
import NewsList from './Components/NewsList';

function App() {
  const [state, setState] = useState([
    {
      title: "title_1",
      author: "Best Author_1",
      url: "random url_1",
      created_at: new Date(),
      type: "news",
    },
    {
      title: "title_2",
      author: "Best Author_2",
      url: "random url_2",
      created_at: new Date(),
      type: "news",
    },
    {
      title: "title_3",
      author: "Best Author_3",
      url: "random url_3",
      created_at: new Date(),
      type: "news",
    }
  ]);

  useEffect(() => {
    setState(
      hackernews.hits.map((arrayHits) => {
        return {
          created_at: new Date(arrayHits.created_at),
          title: arrayHits.title,
          url: arrayHits.url,
          author: arrayHits.author,
          type: "news",
        };
      })
    );
  }, [])

  return (
    <div>
      <NewsList newsItems={state} />
    </div>
  );
}

export default App;
