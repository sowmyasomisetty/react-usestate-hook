import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count,setCount]=useState(0)

    function IncCount(){
        setCount(count+1)
    }
    function DecCount(){
        setCount(count-1)
    }
    function Reset(){
        setCount(0)
    }

  return (
    <div className='container text-center vh-100'>
        <h1>Counter page</h1>
        <div className=" d-flex flex-column align-items-center justify-content-center mt-5">
            <h3>Count: <span style={{color:"pink"}}>{count}</span></h3>
            <div className='buttons my-4'>
                <button className='btn btn-outline-primary mx-3' onClick={IncCount} disabled={count>=100}>Increase</button>
                <button className='btn btn-outline-danger mx-3' onClick={DecCount} disabled={count<=0}>Decrease</button>
                <button className='btn btn-outline-secondary mx-3' onClick={Reset}>Reset</button>
            </div>
        </div>
    </div>
    
  )
}

export default Count