import React, { useRef, useEffect } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(()=>{
        if(typeof duration !== "number" || typeof delay !== "number")
        {
            return;
        }
        if(element.current)
        {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);
    return {ref: element, style: {opacity: 0}};
}

export const UseFadeInApp = () => {
    const fadeH1 = useFadeIn(1,2);
    const fadeP = useFadeIn(5,3);
    return (
        <div className="App">
            <h1>useFadeIn</h1>
            <h1 {...fadeH1}>Hi</h1>
            <p {...fadeP}>lalala</p>
        </div>
    )
}