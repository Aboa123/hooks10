import React, {  } from "react";
import { UseAxiosApp } from "./Hooks/UseAxios";
import { UseBeforeLeaveApp } from "./Hooks/UseBeforeLeave";
import { UseClickApp } from "./Hooks/UseClick";
import { UseEffectApp } from "./Hooks/UseEffect";
import { UseEventsApp } from "./Hooks/UseEvents";
import { UseFadeInApp } from "./Hooks/UseFadeIn";
import { UseFullscreenApp } from "./Hooks/UseFullscreen";
import { UseInputApp } from "./Hooks/UseInput";
import { UseMemoApp } from "./Hooks/UseMemo";
import { UseNetworkApp } from "./Hooks/UseNetwork";
import { UseNotificationApp } from "./Hooks/UseNotification";
import { UseScrollApp } from "./Hooks/UseScroll";
import { UseTabsApp } from "./Hooks/UseTabs";
import { UseTitleApp } from "./Hooks/UseTitle";

export const App = () => {
    return (
        <div className="App">
            <h1>useAxios</h1>
            <UseAxiosApp/>
            <UseBeforeLeaveApp/>
            <UseClickApp/>
            <UseEffectApp/>
            <UseEventsApp/>
            <UseFadeInApp/>
            <UseFullscreenApp/>
            <UseInputApp/>
            <UseMemoApp/>
            <UseNetworkApp/>
            <UseNotificationApp/>
            <UseTabsApp/>
            <UseTitleApp/>
            <UseScrollApp/>
        </div>
    )
}