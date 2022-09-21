import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [timer, setTimer] = useState({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  })

  // useEffect(() =>{
  //   setTimer(prevCon => (
  //     {
  //       ...prevCon,
  //       millisecond: 10,
  //       hour: 15
  //     }
  //   ))

  // },[])

  let hour = timer.hour
  let minute = timer.minute
  let second = timer.second
  let millisecond = timer.millisecond

  if(minute < 10 && minute !== 0){
    minute = `0${minute}`
  }


  function tenMinutes() {
    setTimer(prevTime => (
      {
        ...prevTime,
        minute: 10
      }
    ))
  }

  
  

  return (
    <div className="App">

      <div>
        <h2>hour {timer.hour}</h2>
        <h2>minute {timer.minute}</h2>
        <h2>second {timer.second}</h2>
        <h2>millisecond {timer.millisecond}</h2>
      </div>

      <div className="timer">
        <span id="hour"> 00 </span>
        : 
        <span id="minute"> { minute === 0 ? "00" : minute} </span>
        :
        <span id="second"> 00 </span>
        :
        <span id="millisecond"> 000 </span>
      </div>

      <div className="timer--button">
        <button onClick={tenMinutes}>10 Minute</button>
      </div>
    </div>
  )
}

export default App
