import { useEffect, useState } from 'react'
import './App.css'


function App() {
  
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [millisecond, setMilliSecond] = useState(0)
  const [breakMessage, setBreakMessage] = useState(false)
  const [start, setStart] = useState(false)


  let minuteTime = minute < 10 ? `0${minute}` : minute
  let secondTime = second < 10 ? `0${second}` : second
  let milliTime = millisecond < 10 ? `00${millisecond}` : millisecond < 100 ?   `0${millisecond}` : millisecond

  let cron;
  
    useEffect(() => {

      if (start) {
        cron = setInterval( () => {
          clearInterval(cron)
    
          if(millisecond <= 0){
            if(second === 0) {
              if(minute !== 0){
                setMilliSecond(999)
                setSecond(59)
                setMinute(prevMin => prevMin - 1)
              } else {
                // ini kalau 0 semuah
    
                let minute = breakMessage ? 10 : 5
                // setMinute(minute)
                setSecond(minute)
                setMilliSecond(999)
                setBreakMessage(prevCon => !prevCon)     
    
              }
            } else {
              // kalau second nya gak 0
              setMilliSecond(999)
              setSecond(prevSec => prevSec - 1)
            }
          } else {
            // kalau millisecond gak 0
            setMilliSecond(prevMils => prevMils - 9)
          }
    
        }, 10)
      }

  
    },[millisecond])

  
  function pause() {
    
  }
  

  function tenMinutes(){
    setStart(prevStart => !prevStart)
    setSecond(5)
    setMilliSecond(999)
    setMinute(0)
  }

  return (
    <div className="App">

      <div>
        <h2>minute {minuteTime}</h2>
        <h2>second {secondTime}</h2>
        <h2>millisecond {milliTime}</h2>
        { breakMessage && <h1>Istirahat Boss!!</h1>}
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