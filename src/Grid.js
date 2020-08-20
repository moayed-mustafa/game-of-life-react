import React, { useState, useCallback, useRef } from 'react';
import Cell from './Cell'


const Grid = ({ numRows, numCols }) => {
    // set the state for the grid
    const [grid, setGrid] = useState(Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => 0)))

    // change the state of the grid
    const changeColor = (row, col) => {
        let clone = Array.from(grid)
        clone[row][col]=  clone[row][col] === 1? 0:1
        setGrid(clone)
    }
    // set the state of the simulator
    const [running, setRunning] = useState(false)
    // make a refrence of it for simulation purposes
    let runningRef = useRef(running)
    runningRef.current = running

    // helper method for simulation
    const operations = [
        [1, 0],
        [1, -1],
        [1, 1],
        [-1, 0],
        [-1, 1],
        [-1, -1],
        [0, -1],
        [0, 1]

    ]
    // simulate
    const runSimulation = useCallback(() => {
        let clone = Array.from(grid)
        if (!runningRef.current) {
            return;
        }
        // simulate!!
        for (let i = 0; i < numRows; i++){
            for (let j = 0; j < numCols; j++){
                let neighbors = 0
                // update the state here

                operations.forEach(([r, c])=> {
                    const row = i + r;
                    const col = j + c
                    // check the boundaries
                    if (row >= 0 && row < numRows && col >= 0 && col < numCols) {
                            neighbors += grid[i][c]
                    }
                })
                // check the rules for the game
                if (neighbors < 2 || neighbors > 3) {
                    clone[i][j] =0
                }
                else if (grid[i][j] === 0 && neighbors === 3) {
                    clone[i][j] =1
                }

            }
        }
        setTimeout(runSimulation,1000)
        setGrid(clone)


    }, [])



    return (
        <>
            {/* button to start simulation */}
            <button
                onClick={() => {
                    setRunning(!running);
                    if (!running) {
                        runningRef.current = true
                        runSimulation()
                    }
                }} >
                {!running ? 'start' : 'stop'}
            </button>
            {/* This is my grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, 20px)`
      }}>
        {grid.map((rows, i) =>
            rows.map((col, j) =>
                <Cell col={col} handle={()=>changeColor(i, j)} />
              ))}
            </div>
            </>
    )

}

export default Grid;