import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import SearchEngine from "./SearchEngine";

import "./App.css";

function App() {
    return ( <
        div className = "App" >
        <
        h1 > Weather app < /h1> <
        SearchEngine / >
        <
        /div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render( <
    StrictMode >
    <
    App / >
    <
    /StrictMode>,
    rootElement
);