import React, {  } from "react";

const useConfirm = (message = "", callback, cancle) => {
    const confirmAction = () => {
        if(window.confirm(message))
        {
            callback();
        }
        else
        {
            cancle();
        }
    }
    return confirmAction;
}

const usePreventLeave = () => {
    const listener = (e) => {
        e.preventDefault();
        e.returnValue = "";
    }
    const enableLeave = () => window.addEventListener("beforeunload",listener);
    const disableLeave = () => window.removeEventListener("beforeunload",listener);

    return {enableLeave,disableLeave}
}

export const UseEventsApp = () => {
    const deleteSome = () => console.log("del");
    const cancleDel = () => console.log("cancle");
    const confirmDel = useConfirm("Are you sure?",deleteSome,cancleDel);

    const {enableLeave,disableLeave} = usePreventLeave();

    return (
        <div className="App">
            <h1>useEventsApp</h1>
            <button onClick={confirmDel}>Delete</button>
            <button onClick={enableLeave}>protect</button>
            <button onClick={disableLeave}>unProtect</button>
        </div>
    )
}