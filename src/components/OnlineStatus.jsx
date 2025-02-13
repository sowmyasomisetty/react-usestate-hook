import React from 'react'
import { useState } from 'react'

const OnlineStatus = () => {
  const [isOnline,setIsOnline]=useState(true);
  const [isTextVisible,setIsTextVisible]=useState(false);

  function toggleStatus(){
    setIsOnline(!isOnline)
  }
  function textVisible(){
    setIsTextVisible(!isTextVisible)
  }
  function resetStates(){
    setIsOnline(true);
    setIsTextVisible(false);
  }

  return (
    <div className='container text-center'>
      <h1>OnlineStatus</h1>
        <div className='container d-flex justify-content-center mt-5'>
          <div className='toggle mx-3'>
            <p>{isOnline ? "🟢 Online" : "🔴 Offline"}</p>
            <button className='btn btn-outline-warning' onClick={()=>toggleStatus()}>Toggle</button>
          </div>

          <div className='textVisible my-3 py-4'>
            <button className='btn btn-outline-success' onClick={()=>textVisible()}>{isTextVisible?"Hide content":"Show Content"}</button>
            <p> {isTextVisible?"The hide content is visible now":""}</p>
          </div>

          <div className='resetbtn m-3 py-4'>
              <button className='btn btn-outline-secondary' onClick={()=>resetStates()}>Reset</button>
          </div>
        </div>
    </div>
    
    
  )
}

export default OnlineStatus
