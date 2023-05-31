import React, { useState } from 'react'

const Main = () => {

   const [value, setValue] = useState(0)

  return (
    <div>
        <h1 className="title">Counter App</h1>
        <div>
            <h2 className="text">Number: {value}</h2>
            <button className="btn" onClick={() => setValue(value + 1)}>+</button>
            <button className="btn" onClick={() => setValue(value - 1)}>-</button> 
            <button className="btn" onClick={() => setValue(0)}>Reset</button>
        </div>
    </div>
  )
}

export default Main;