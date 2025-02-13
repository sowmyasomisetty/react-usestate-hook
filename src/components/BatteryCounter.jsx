import React from 'react'
import { useState } from 'react'

const BatteryCounter = () => {

    const [counter,setCounter]=useState(0)
    const [battery,setBattery]=useState(50)

    function incCounter(){
        setCounter(counter+1)
    }
    function decCounter(){
        if (counter>0)
            setCounter(counter-1)
    }
    function resetCounter(){
        setCounter(0)
    }

    function incBattery(){
        if (battery<100)
            setBattery(battery+10)
    }
    function decBattery(){
        if (battery>0)
            setBattery(battery-10)
    }
    function resetBattery(){
        setBattery(50)
    }

    function resetAll(){
        setCounter(0)
        setBattery(50)
    }

    function getBatteryColor() {
        if (battery <= 20) 
            return "red"; 
        if (battery <= 50) 
            return "yellow"; 
        return "green"; 
    }

  return (
    <div className='container justify-content-center text-center '>
      <div className='counter'>
        <h2>Counter: <span style={{ fontSize: "24px" }}>{counter}</span></h2>
        <div className='container d-flex justify-content-center '></div>
        <button className='btn btn-outline-primary m-3' onClick={incCounter}>+</button>
        <button className='btn btn-outline-warning m-3' onClick={decCounter} disabled={counter===0}>-</button>
        <button className='btn btn-outline-secondary m-3' onClick={resetCounter}>Reset counter</button>
      </div>
      
      <div className='battery container  '>
        <h2>Battery Level: 
            <span style={{ fontSize: "24px", color: getBatteryColor() }}> {battery}%</span>
        </h2>
        <button className='btn btn-outline-primary m-3' onClick={incBattery} disabled={battery>=100}>+10%</button>
        <button className='btn btn-outline-warning m-3' onClick={decBattery} disabled={battery<=0}>-10%</button>
        <button className='btn btn-outline-secondary m-3' onClick={resetBattery}>Reset Battery</button>
      </div>
      
      <button className="btn btn-outline-success" onClick={resetAll}>Reset All</button>
    </div>
  )
}

export default BatteryCounter
