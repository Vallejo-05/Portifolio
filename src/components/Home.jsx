import React from "react";
import foto from "../assets/images/euhome.jpeg/";
export default function Home (){
  return (
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={foto} alt="" className="md:w-7/12 object-cover mt-12 mb-3 px-10  " />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Bem-vindo!
            </span>
            <br/>
            Eu sou o Gabriel Vallejo
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Desenvolvedor de Software - Junior
          </h4>
        </div>
      </div>
    </section>
  );
};

