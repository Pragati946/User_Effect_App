import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const Stopwatch = () => {
    const [timerId, settimerId] = useState(null);
    const [watch, setwatch] = useState(0);
    const start =()=>{
    if(!timerId){
    let id = setInterval(()=>{
        setwatch((prev)=>prev+1);
    },1000);
  settimerId(id);
}
};
const pause=()=>{
    clearInterval(timerId);
    settimerId(null);
};
const reset =()=>{
    clearInterval(timerId);
    setwatch(0);
}


return (
    <div>
        <h2>Stopwatch</h2>
        <h1>{watch}</h1>
    <div>
    <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={reset}>Reset</button>
</div>
</div>

);
};
