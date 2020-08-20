import React from 'react';

const Cell = ({ col, handle }) => {
    const colors = ["Violet", "Indigo", "Gold", "Cyan",'Darkgreen','teal','navy','pink', "Orange","Sienna", "Mistyrose", "Royalblue", "Sandybrown"]
    return (
        <div
            onClick={handle}
                  style={{
            width: 20,
            height: 20,
            backgroundColor: col === 0 ? 'white' : colors[Math.floor(Math.random() * colors.length)],
            border: 'solid 1px black',


                  }}>


        </div>
    )

}



export default Cell;