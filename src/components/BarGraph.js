import React from 'react';
import { letterFrequency } from '@visx/mock-data';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { AxisLeft, AxisBottom, Axis } from '@visx/axis';

function BarGraph({myData}) {
// We'll use some mock data from `@visx/mock-data` for this.
const data = letterFrequency;
 
 

const myNewData = myData.map((item, i)=>{return({month:i + 1, value:item.length})})
 

// Define the graph dimensions and margins
const width = 558;
const height = 550;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

 

// We'll make some helpers to get at the data we want
const x = d => d.month;
const y = d => d.value;

// And then scale the graph by our data
const xScale = scaleBand({
  range: [0, xMax],
  round: true,
  domain: myNewData.map(x),
  padding: 0.1,
});
const yScale = scaleLinear({
  range: [yMax, 5],
  round: true,
  domain: [0, Math.max(...myNewData.map(y))],
});

// Compose together the scale and accessor functions to get point functions
const compose = (scale, accessor) => data => scale(accessor(data));
const xPoint = compose(xScale, x);
const yPoint = compose(yScale, y);

// Finally we'll embed it all in an SVG
 
   

  return (
    <svg width={width} height={height}>
      {myNewData.map((d, i) => {
        const barHeight = yMax - yPoint(d);
        return (
          
            <Group key={`${i}`}>
                <AxisLeft
                  scale={yScale}
                  top={0}
                  left={1}
                  label={'*10000'}
                  stroke={'#1b1a1e'}
                  tickTextFill={'#1b1a1e'}
                  axisClassName={'axisLeft'}
                />
              <Bar
                  x={xPoint(d)}
                  y={yMax - barHeight}
                  height={barHeight}
                  width={xScale.bandwidth()}
                  fill="#1bcfba"
              />
              <AxisBottom
                  scale={xScale }
                  top={yMax}
                  left={0}
                  label={'Month'}
                  stroke={'#1b1a1e'}
                  tickTextFill={'white'}
                  tickTextFontSize={40}
                  axisClassName={'axisBot'} 
                />
            </Group>
          
        );
      })}
    </svg>
  );
}
export default BarGraph;