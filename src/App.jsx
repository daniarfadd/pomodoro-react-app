import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [millisecond, setMilliSecond] = useState(0)
  const [breakMessage, setBreakMessage] = useState(false)
  const [start, setStart] = useState(false)

  const [timer, setTimer] = useState(0)

  const styles = {
    backgroundColor: breakMessage ? "#8fad4f" : "#c86354"
  }


  let minuteTime = minute < 10 ? `0${minute}` : minute
  let secondTime = second < 10 ? `0${second}` : second
  let milliTime = millisecond < 10 ? `00${millisecond}` : millisecond < 100 ? `0${millisecond}` : millisecond

  let cron;


  function timerHandler(time) {
    if(breakMessage) {
      setBreakMessage(prevCon => !prevCon)
    }
    setTimer(time)

    setStart(prevStart => !prevStart)

    setSecond(0)
    setMilliSecond(9)
    setMinute(time)
  }

  useEffect(() => {

    if (start) {
      cron = setInterval(() => {
        clearInterval(cron)

        if (millisecond <= 0) {
          if (second === 0) {
            if (minute !== 0) {
              setMilliSecond(999)
              setSecond(59)
              setMinute(prevMin => prevMin - 1)
            } else {
              // ini kalau 0 semuah

              let minute = breakMessage ? timer : 5
      
              let audio = breakMessage ? "audio-start" : "audio-end"
              document.getElementById(audio).play()
              setMinute(minute)
              setMilliSecond(9)
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


  }, [millisecond])

  

  return (
    <div className="App">

      {/* this audio for background sound */}
      <audio id='audio-end' src= "../assets/sound/notif.mp3" controls style={{display: "none"}}></audio>
      <audio id='audio-start' src="../assets/sound/notif_start.mp3" controls style={{display: "none"}}></audio>

      <div className='title'>
        <h1>Pomodoro</h1>
        Created by <a href="https://daffa-link-bio.vercel.app" target="_blank">Daffa Daniarfa</a>
      </div>


      <div className='break--message'>
        {breakMessage && <h1>time for a break !</h1>}
      </div>

      <div className="timer" style={styles}>
        <span id="minute"> {minuteTime} </span>
        :
        <span id="second"> {secondTime} </span>
        :
        <span id="millisecond"> {milliTime === 0 ? "000" : milliTime} </span>
      </div>

      <div className="timer--button">
        <button onClick={() => timerHandler(5)}>5 Minute</button>
        <button onClick={() => timerHandler(10)}>10 Minute</button>
        <button onClick={() => timerHandler(15)}>15 Minute</button>
        <button onClick={() => timerHandler(20)}>20 Minute</button>
        <button onClick={() => timerHandler(25)}>25 Minute</button>
      </div>
    </div>
  )
}


export default App