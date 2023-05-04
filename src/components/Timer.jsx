import React, { useEffect, useState } from "react";

export default function Timer() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMsg, setDisplayMsg] = useState(false);
    


    useEffect(() => {
        
        let interval = setInterval(() => {
            clearInterval(interval);
            if ( seconds === 0) {
                if( minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else {
                    let minutes = displayMsg ? 24 : 4;
                    let seconds = 59;
                    
                    setSeconds(seconds);
                    setMinutes(minutes);
                    setDisplayMsg(!displayMsg);
                } 
            } else if(seconds !== 0){
                setSeconds(seconds - 1);
            }
            
        }, 1000);
    }, [seconds]);

    


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
                 <h1>{timerMinutes}:{timerSeconds}</h1>
            </div>
            <div className="chat chat-end absolute inset-x-0 bottom-7">
  <div className="chat-bubble chat-bubble-secondary">Pause first before you start or end breaks.</div>
</div>
        </div>
        
<iframe id="spotify" width="80%" height="80" frameborder="0" allowfullscreen="" data-src="https://open.spotify.com/embed/playlist/4Zjli1P13J5mmSCD5iKAXK?theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" src="https://open.spotify.com/embed/album/05WYfOdYRlapM87Fy9r2rs?utm_source=generator"></iframe>
    )
}

