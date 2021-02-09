import React, { useRef, useEffect, useState } from "react";

const useFullScreen = (callBack) => {
    const element = useRef();
    const runCallBack = isFull => {
        if(callBack && typeof callBack === "function")
        {
            callBack(isFull);
        }
    }
    const triggerFull = () => {
        if(element.current)
        {
            if(element.current.requestFullscreen)
            {
                element.current.requestFullscreen();
            }
            else if(element.current.mozRequestFullscreen)
            {
                element.current.mozRequestFullscreen();
            }
            else if(element.current.webkitFullscreen)
            {
                element.current.webkitFullscreen();
            }
            else if(element.current.msRequestFullScreen)
            {
                element.current.msRequestFullScreen();
            }
            runCallBack(true)
        }
    }
    const exitFull = () => {
        if(document.exitFullscreen)
        {
            document.exitFullscreen();
        }
        else if(document.mozExitFullscreen)
        {
            document.mozExitFullscreen();
        }
        else if(document.webkitExitFullscreen)
        {
            document.webkitExitFullscreen();
        }
        else if(document.msExitFullscreen)
        {
            document.msExitFullscreen();
        }
        runCallBack(false);
    }
    return {element,triggerFull,exitFull};
}

export const UseFullscreenApp = () => {
    const [fullCheck,setFullCheck] = useState(false);
    const onFulls = (isFull) => {
        console.log(isFull ? "We are full!!!" : "We are small!!!");
        setFullCheck(isFull);
    }
    const {element,triggerFull,exitFull} = useFullScreen(onFulls);
    
    return (
        <div className="App">
            <h1>useFullscreenApp</h1>
            <div ref={element}>
                <img
                alt="img"
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png"}/>
                {fullCheck && <button onClick={exitFull}>exit fullscreen</button>}
            </div>
            <button onClick={triggerFull}>make fullscreen</button>
        </div>
    )
}