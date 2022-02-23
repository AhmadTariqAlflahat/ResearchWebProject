import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes } from "react-router-dom";

import Header from "./Layouts/Header/header";
import {AllRoute} from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header/>
        <Routes>
            {/*<Route path="/" element={<Home/>} />*/}
            {/*<Route path="/about" element={<About/>} />*/}
            {AllRoute}
        </Routes>
    </BrowserRouter>
    {/*<App/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
