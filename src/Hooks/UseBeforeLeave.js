import React,{ useEffect } from "react";

const useBeforeLeave = (onBefore) => {
    const handle = (e) => {
        const {clientY} = e;
        if(clientY <= 0)
        {
            onBefore();
        }
    }
    useEffect(()=>{
        document.addEventListener("mouseleave",handle)
        return () => document.removeEventListener("mouseleave",handle)
    },[]);
    if(typeof onBefore !== "function")
    {
        return;
    }
}

export const UseBeforeLeaveApp = () => {
    const begForLife = () => console.log("나가지마!!");
    useBeforeLeave(begForLife)
    return (
        <div className="App">
            <h1>useBeforeLeaveApp</h1>
        </div>
    )
}