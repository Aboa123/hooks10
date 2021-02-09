import React, {  } from "react";
import Axios from "./Axios";

export const UseAxiosApp = () => {
    const {loading, data, refetch} = Axios({
        url:"https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    });
    
    return (
        <div className="App">
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch!</button>
        </div>
    )
}