import React, { useEffect, useState } from "react";

export const UseEffectApp = () => {
    const sayHello = () => console.log("하이!");

    const [anumber,setAnumber] = useState(0);
    const [bnumber,setBnumber] = useState(0);
    useEffect(()=>{
        sayHello();
    },[anumber])
    
    return (
        <div className="App">
            <h1>useEffectApp</h1>
            <button onClick={()=>setAnumber(anumber+1)}>{anumber}</button>
            <button onClick={()=>setBnumber(bnumber+1)}>{bnumber}</button>
        </div>
    )
}