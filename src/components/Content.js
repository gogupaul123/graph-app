import React from 'react';
import MyGraph from './MyGraph'

function Content({content}) {
  
  const posts = content.data.allPosts;
  const createdAt = posts.map((post)=>post.createdAt);
  const humanDate = createdAt.map((date)=>{
    var dateVal =`/Date(${date})/`;
    var date = new Date( parseFloat( dateVal.substr(6 )));
    return(
        date.getMonth() + 1  
        )
  })
  
  

  const january = humanDate.filter(date=>date===1);
  const february = humanDate.filter(date=>date===2);
  const march = humanDate.filter(date=>date===3);
  const april = humanDate.filter(date=>date===4);
  const may = humanDate.filter(date=>date===5);
  const june = humanDate.filter(date=>date===6);
  const july = humanDate.filter(date=>date===7);
  const august = humanDate.filter(date=>date===8);
  const september = humanDate.filter(date=>date===9);
  const october = humanDate.filter(date=>date===10);
  const november = humanDate.filter(date=>date===11);
  const december = humanDate.filter(date=>date===12);

  
  //bundle the data into one variable so I can pass everything to the <MyGraph/> component
  let months = [january, february, march, april, may, june, july, august, september, october, november, december] 

  // console.log('january: ' +january.length + '/february: ' + february.length  + '/march: ' + march.length + '/april: ' + april.length + '/may: ' + may.length + '/june: ' + june.length + '/july: ' + july.length + '/august: ' +
  // august.length + '/september: ' + september.length + '/october: ' + october.length + '/november: ' + november.length + '/december: ' + december.length)



  return (
    <div className='content'>
      <h1>Posts created in each month of 2019</h1>
      <MyGraph data ={months}/>
    </div>
  )
}

export default Content;
