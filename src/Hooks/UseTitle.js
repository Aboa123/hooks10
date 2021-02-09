import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
    const [title,setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle,[title]);
    return setTitle;
}

export const UseTitleApp = () => {
    const titleUpdater = useTitle("Loading");
    setTimeout(() => titleUpdater("Done"),5000)
    return (
        <div className="App">
            <div>useTitleApp</div>
        </div>
    )
}