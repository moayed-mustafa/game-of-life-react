import React, { useState } from 'react';

const Cell = ({col, handle}) => {
    return (
        <div
            onClick={handle}
                  style={{
            width: 20,
            height: 20,
            backgroundColor: col === 0 ? 'white' : "pink",
            border: 'solid 1px black'

                  }}>


        </div>
    )

}



export default Cell;