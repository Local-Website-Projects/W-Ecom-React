import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/header/header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route exact={true} path='/' element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>


    </>
  );
}

export default App;
