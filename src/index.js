import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header"
//import Second from "./Components/Second"
//import Home from "./Components/Home"


let dataLink =document.getElementById('root');
let newData = ReactDOM.createRoot(dataLink);

newData.render(<BrowserRouter><Routes><Route path='/' element={<Header/>}></Route></Routes></BrowserRouter>)
