import React from 'react'
import { useState } from 'react'

const Theme = () => {
    const [isTheme,setIsTheme]=useState(true)

    function toggleTheme(){
        setIsTheme(!isTheme)
    }

  return (
    
    <div className='container text-center'>
      <h1>Theme</h1>
      <div className='d-flex flex-column align-items-center vh-100 mt-5'>
        <div style={{ 
            backgroundColor: isTheme ? "white" : "black", 
            color: isTheme ? "black" : "white", 
            height: "100px", 
            width: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid gray",
            }}>
            {isTheme ? "Light Mode" : "Dark Mode"}
        </div>
        <button className='btn btn-outline-warning mt-3' onClick={toggleTheme}>{isTheme ? "Switch to Dark Mode" : "Switch to Light Mode"}</button>
      </div>
    </div>    
  )
}

export default Theme