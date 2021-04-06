import React from 'react';
import BarGraph from './BarGraph';

function MyGraph({data}) {
     
    
    return (
        <div className='myGraph'>
            <BarGraph myData ={data}/>
        </div>
    )
}

export default MyGraph
