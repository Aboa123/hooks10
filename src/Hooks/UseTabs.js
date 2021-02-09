import React, { useState } from "react";

const content = [
    {
        tab: "Section 1",
        content: "Content 1 is Here"
    },
    {
        tab: "Section 2",
        content: "Content 2 is Here"
    },
    {
        tab: "Section 3",
        content: "Content 3 is Here"
    },
]

const useTabs = (initialTab,allTabs) => {
    const [currenIndex,setCurrentIndex] = useState(initialTab);

    if(!allTabs || !Array.isArray(allTabs))
    {
        return;
    }
    
    return {
        currentItem: allTabs[currenIndex],
        changeItem: setCurrentIndex
    }
}

export const UseTabsApp = () => {
    const {currentItem, changeItem} = useTabs(0,content);
    return (
        <div className="App">
            <h1>useTabsApp</h1>
            {content.map((section,index) =>
                <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
            )}
            {currentItem.content}
        </div>
    )
}