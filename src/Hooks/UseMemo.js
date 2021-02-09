import React, { useState } from "react";
import Info from "./Info";

export const UseMemoApp = () => {
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    
    return (
        <div className="App">
            <h1>useMemoApp</h1>
            이름은 <input value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            나이는 <input value={age} onChange={(e)=>setAge(e.target.value)}/>
            <Info name={name} age={age} />
        </div>
    )
}