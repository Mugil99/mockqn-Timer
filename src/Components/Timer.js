import React from "react";
import { useState,useEffect } from "react";

const Timer=()=>{
const[timer,setTimer]=useState(0);

useEffect(()=>{
const interval=setInterval(()=>{
        setTimer(timer=>timer+1);
    },1000)

 return()=>{
    clearInterval(interval)
 }
},[])
// In the corrected version, clearInterval(interval) is moved inside the cleanup function(optional),
// which is returned by the useEffect hook. This ensures that the interval is cleared when
// the component unmounts or when the dependencies change (in this case, there are no dependencies,
// so it runs only once on mount).
return(
    <div>
        {timer}
    </div>
)
}
export default Timer;

//clearInterval without return doesnt run 
// The issue in your code is that clearInterval(interval) is being called immediately
// after setting up the interval. This causes the interval to be cleared right after 
//it's created, preventing it from running and updating the timer.