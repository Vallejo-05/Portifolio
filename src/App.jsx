import React from "react";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Habilidades from "./components/Habilidades";
import Projetos from "./components/Projetos";
import Navbar from "./components/Navbar";
import Contato from "./components/Contato";

export default function App(){
  return (
    <div>
      <Navbar/>
      <Home/>
      <Sobre/>
      <Habilidades/>
      <Projetos/>
      <Contato/>
    </div>
  );
};


