import { useEffect, useState } from 'react'
import './App.css'


function App() {
  
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [millisecond, setMilliSecond] = useState(0)


  let minuteTime = minute < 10 ? `0${minute}` : minute
  let secondTime = second < 10 ? `0${second}` : second
  let milliTime = millisecond < 10 ? `00${millisecond}` : millisecond < 100 ?   `0${millisecond}` : millisecond

  
  useEffect(() =>{

  },[])
  

  function tenMinutes(){
    setSecond(0)
    setMilliSecond(9)
    setMinute(7)
  }

  return (
    <div className="App">

      <div>
        <h2>minute {minuteTime}</h2>
        <h2>second {secondTime}</h2>
        <h2>millisecond {milliTime}</h2>
      </div>

      <div className="timer">
        <span id="minute"> {minuteTime} </span>
        :
        <span id="second"> {secondTime} </span>
        :
        <span id="millisecond"> { milliTime === 0 ? "000" : milliTime} </span>
      </div>

      <div className="timer--button">
        <button onClick={tenMinutes}>10 Minute</button>
      </div>
    </div>
  )
}

export default App
