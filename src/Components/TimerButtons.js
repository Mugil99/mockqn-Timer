import React, { useRef, useState } from 'react';

const TimerButtons = () => {
  const [timer, setTimer] = useState(0);
let interval=useRef(null);
 const start=()=>{
     interval.current = setInterval(() => {
        setTimer(timer => timer + 1);  //its an asyn function ... thats why we are using call back ..instead of timer+1
      }, 1000);
 }
const stop=()=>{
    clearInterval(interval.current);
} 
const reset=()=>{
    setTimer(0);
}
    

  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default TimerButtons;
//Added a useRef hook to create a mutable reference to store the interval ID.
