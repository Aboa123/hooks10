import React, {  } from "react";

const useNotification = (title,options) => {
    if(!("Notification" in window))
    {
        return;
    }
    const goNoti = () => {
        if(Notification.permission !== "granted")
        {
            Notification.requestPermission().then(permission => {
                if(permission === "granted")
                {
                    new Notification(title,options)
                }
                else
                {
                    return;
                }
            })
        }
        else
        {
            new Notification(title,options)
        }
    }
    return goNoti;
}

export const UseNotificationApp = () => {
    const notiTrigger = useNotification("This is title!!!!!", {
        body: "hey! im body!"
    });
    
    return (
        <div className="App">
            <h1>useNotificationApp</h1>
            <button onClick={notiTrigger}>Noti!</button>
        </div>
    )
}