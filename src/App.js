import React, {useState, useEffect} from 'react';
import Content from './components/Content.js';
import Particles from 'react-particles-js';

function App() { 

  const particlesParams={
    particles:{
        number:{
            value:50,
            density:{
                enable:true,
                value_area:500
            }
        }
    }
}

  const [posts, updatePosts] = useState({data:{
    allPosts:[1,2,3]
  }});


  //Fetching the data only when the page loads for the first time (useEffect , [])
  useEffect(()=>{
    fetch('https://fakerql.stephix.uk/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: `{
    allPosts(count: 100) {
      published
      createdAt
    }
  }` }),
})
  .then(data => data.json())
  //Then set the state to our data
  .then(res => updatePosts(res));
  }, [])
 
   


  return (
    <>
    <Particles className='particles' params={particlesParams}/>
    <Content content={posts}/>

     
       
    </>
  )
}

export default App;

