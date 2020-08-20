import React, { useState } from 'react';
import Grid from './Grid'
import './App.css';

function App() {
  // let numOfRows = 50;
  // let numOfCol = 50;
  // const [grid, setGrid] = useState(Array.from({ length: numOfRows }, () => Array.from({ length: numOfCol }, () => [0])))
  // console.log(grid)
  return (
    <div className="App">
      <Grid numRows={100} numCols={100}/>
      {/* <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numOfCol}, 20px)`
      }}>
        {grid.map((rows, i) =>
          rows.map((col, k) =>
            <div key={`${i}-${k}`} style={{
        width: 20,
        height: 20,
        backgroundColor: col === 0 ? 'black' : undefined,
        border: 'solid 1px black'

      }} />))}
        </div> */}
    </div>
  );
}

export default App;
