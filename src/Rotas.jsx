import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Botao from "./pages/Botao";

export default function Rotas(){
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/botao" element={<Botao/>}/>
    </Routes>
    );
}