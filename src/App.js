import React, {useState, useEffect} from 'react';
import Content from './components/Content';

function App() { 

  const [posts, updatePosts] = useState();


  //Fetching the data only when the page loads for the first time => useEffect  []
  useEffect(()=>{
    fetch('https://fakerql.stephix.uk/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: `{
    allPosts(count: 5) {
      published
      createdAt
    }
  }` }),
})
  .then(data => data.json())
  .then(res => updatePosts(res));
  }, [])


  

  return (
    <>
      <Content content={posts}/>
    </>
  )
}

export default App;

