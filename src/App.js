import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./page/home/home";
import {Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;