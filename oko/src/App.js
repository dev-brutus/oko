import React from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (<BrowserRouter><Header/><Body/><Footer/></BrowserRouter>);
}

export default App;
