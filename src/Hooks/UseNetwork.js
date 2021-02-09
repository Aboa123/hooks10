import React, { useState, useEffect } from "react";

const useNetWork = (onChange) => {
    const [status,setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        setStatus(navigator.onLine)
    }
    useEffect(()=>{
        if(typeof onChange !== "function")
        {
            return;
        }
        window.addEventListener("online",handleChange)
        window.addEventListener("offline",handleChange)
        return () => (
            window.removeEventListener("online",handleChange),
            window.removeEventListener("online",handleChange)
        )
    }, [])
    return status;
}

export const UseNetworkApp = () => {
    const handleNetworkChange = () => {
        console.log(onNet ? "online!" : "offline")
    }
    const onNet = useNetWork(handleNetworkChange);
    
    return (
        <div className="App">
            <h1>useNetworkApp</h1>
            <h1>{onNet ? "online" : "offline"}</h1>
        </div>
    )
}