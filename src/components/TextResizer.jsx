import React from 'react'
import { useState } from 'react'

const TextResizer = () => {

    const [isText,setIsText]=useState(16)

    function Increase(){
        if (isText<50){
            setIsText(isText+1)
        }
    }
    function Decrease(){
        if (isText>10){
            setIsText(isText-1)
        }
    }
    function Reset(){
        setIsText(16)
    }

  return (
    <div className='container text-center'>
      <h1>Text resize</h1>
      <div className='container text-center mt-5'>
      <div className=''> 
        <p style={{fontSize:`${isText}px`}}>Resize the text size by clicking Increase and Decrease Buttons</p>
        <button className='btn btn-outline-success m-3' onClick={()=>Increase()} disabled={isText>=50}> Increase </button>
        <button className='btn btn-outline-primary m-3' onClick={()=>Decrease()} disabled={isText<=10}> Decrease </button>
        <button className='btn btn-outline-secondary m-3' onClick={Reset}>Reset</button>
        <p>Current Font Size: {isText}px</p>
      </div>
    </div>
    </div>
  )
}

export default TextResizer