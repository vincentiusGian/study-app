import React, { useEffect, useState } from "react";

export default function Timer() {
    const [minutes, setMinutes] = useState(24);
    const [seconds, setSeconds] = useState(59);
    const [displayMsg, setDisplayMsg] = useState(false);
    const [isActive, setIsActive] = useState(false);


    useEffect(() => {
        
        let interval = setInterval(() => {
            clearInterval(interval);
            if (!isActive && seconds === 0) {
                if(!isActive && minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else {
                    let minutes = displayMsg ? 24 : 4;
                    let seconds = 59;
                    
                    setSeconds(seconds);
                    setMinutes(minutes);
                    setDisplayMsg(!displayMsg);
                } 
            } else if(isActive && seconds !== 0){
                setSeconds(seconds - 1);
            }
            
        }, 1000);
    }, [seconds, isActive]);

    const toggleStart = () => {
        setIsActive(!isActive);
    };

    const breakTime = () => {
        let minutes = displayMsg ? 24 : 4;
        let seconds = 59;
        
        setSeconds(seconds);
        setMinutes(minutes);
        setDisplayMsg(!displayMsg);
        setIsActive(isActive);
    }

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;


    return (
        <div className="card-body items-center">
            <div className="text-3xl">
                 <h1>Pomodoro Timer</h1>
            </div>
            <div className="text-3xl">
                {displayMsg && <h1>Break time!</h1>}
            </div>
            <div className="text-9xl ">
                {toggleStart ? <h1>{timerMinutes}:{timerSeconds}</h1> : <h1>25:00</h1> }
            </div>
            <div className="flex justify-center space-x-4">
            <a className="btn glass rounded-full dark:text-white" onClick={toggleStart}>{!isActive ? 'start' : 'pause'}</a>
            <a className="btn glass rounded-full dark:text-white" onClick={breakTime}>{!displayMsg ? 'start break' : 'end break'}</a>
            </div>
            <div className="chat chat-end absolute inset-x-0 bottom-7">
  <div className="chat-bubble chat-bubble-secondary">Pause first before you start or end breaks.</div>
</div>
        </div>
    )
}