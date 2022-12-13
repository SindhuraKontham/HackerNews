import logo from './logo.svg';
import './App.css';
import hackernews from './hackernews.json'
import { useState, useEffect } from 'react';
import NewsList from './Components/NewsList';
import axios from 'axios';

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

  const loadStateFromResponse = (response) => {
    setState(
      response.hits.map((arrayHits) => {
        console.log(arrayHits.title);
        return {
          created_at: new Date(arrayHits.created_at),
          title: arrayHits.title ?? arrayHits.storyTitle,
          url: arrayHits.url,
          author: arrayHits.author,
          type: "news",
        };
      })
    );
  }

  const searchFor = ( query ) => {
    // fetches data from HackerNews
    axios.get(`http://hn.algolia.com/api/v1/search_by_date?query=${encodeURIComponent(query)}&numericFilters=num_comments%3E%3D0`)
      .then(response => {
        if (response.status === 200) {
          // load state from response.data
          console.log(response.data)
          loadStateFromResponse(response.data)
        }
      }).catch((e) => console.log(e))
  }

  useEffect(() => {
    searchFor("react and javascript");
  }, [])

  return (
    <div>
      <NewsList newsItems={state} />
    </div>
  );
}

export default App;
