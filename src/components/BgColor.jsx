import React from 'react'
import { useState } from 'react'

const BgColor = () => {
    const [bgcol,setBgcol]=useState("blue")

  return (
    <div className='text-center d-flex flex-wrap justify-content-center'>
        <h1>Background Themes</h1>
        <div className='backgroundcolor'>
            <div style={{
              backgroundColor:bgcol, 
              height: "100vh", 
              width: "100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid gray",
            }}>
                <button className='btn btn-outline-success m-2' onClick={()=>setBgcol("green")}>Green</button>
                <button className='btn btn-outline-danger m-2' onClick={() => setBgcol("red")}>Red</button>
                <button className='btn' style={{border:"2px solid pink", color:"pink", margin:"8px"}} onClick={() => setBgcol("pink")}>Pink</button>
                <button className='btn btn-outline-warning m-2' onClick={() => setBgcol("orange")}>Orange</button>
                <button className='btn m-2' style={{border:"2px solid purple", color:"purple"}} onClick={() => setBgcol("purple")}>Purple</button>
                <button className='btn m-2' style={{border:"2px solid yellow", color:"Yellow"}} onClick={() => setBgcol("yellow")}>Yellow</button>
                <button className='btn btn-outline-primary m-2' onClick={() => setBgcol("blue")}>Reset</button> 
            </div>
        </div>
    </div>
  )
}

export default BgColor