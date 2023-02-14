import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
// import Teste from "./pages/testes";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";



export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login/>} />

            <Route path="/dashboard" element={<Dashboard/>} />
            
            </Routes>
        </BrowserRouter>
    )
}