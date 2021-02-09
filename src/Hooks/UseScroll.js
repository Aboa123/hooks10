import React, { useEffect, useState } from "react";

const useScroll = () => {
    const [state,setState] = useState({
        x:0,
        y:0
    });
    const onScroll = () => {
        setState({x:window.scrollX,y:window.scrollY})
    }
    useEffect(()=>{
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    }, [])
    return state;
}

export const UseScrollApp = () => {
    const {y} = useScroll();
    return (
        <div className="App" style={{height:"200vh"}}>
            <h1>useScrollApp</h1>
            <h1 style={{
                top:0,
                right:0,
                position: "fixed",
                color: y > 100 ? "red" : "blue"
            }}>안녕!</h1>
        </div>
    )
}