import React, { useRef, useEffect } from "react";

const useClick = (onClick) => {
    const element = useRef();
    useEffect(()=>{
        if(element.current)
        {
            element.current.addEventListener("click",onClick);
        }

        return () => {
            if(element.current)
            {
                element.current.removeEventListener("click",onClick);
            }
        }
    }, []);
    return element;
}

export const UseClickApp = () => {
    const onClick = () => console.log("클릭했어!");
    const click = useClick(onClick);
    return (
        <div className="App">
            <h1>useClickApp</h1>
            <button ref={click}>클릭</button>
        </div>
    )
}