
import React from 'react';
import './App.css';
import Posts from './post/posts.js';

export const PostContext = React.createContext({});

const App = () => {

  const post = {
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    avatar: "https://i.picsum.photos/id/326/200/300.jpg?hmac=SKzjQ5ycCVyISiOfq2m-GqpQ5zWT_J202KPYG7z0uB4",
    likes: 51,
    description: `uia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`,
    link:"https://jsonplaceholder.typicode.com/posts",
  
  }
  return (
    <div className="App">
      <PostContext.Provider value={post}>
        <Posts />
      </PostContext.Provider>
    </div>
  );
}

export default App;
