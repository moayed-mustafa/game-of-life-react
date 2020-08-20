import React, { useState } from 'react';
import Cell from './Cell'


const Grid = ({numRows, numCols}) => {
    const [grid, setGrid] = useState(Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => 0)))
    const changeColor = (row, col) => {
        let clone = Array.from(grid)
        clone[row][col]=  clone[row][col] === 1? 0:1
        setGrid(clone)


    }


    return (

      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, 20px)`
      }}>
        {grid.map((rows, i) =>
            rows.map((col, k) =>
                <Cell col={col} handle={()=>changeColor(i, k)} />

                // <div key={`${i}-${k}`}

        //           style={{
        // width: 20,
        // height: 20,
        // backgroundColor: col === 0 ? 'black' : undefined,
        // border: 'solid 1px black'

        //       }}
                // />
              ))}
        </div>
    )

}

export default Grid;