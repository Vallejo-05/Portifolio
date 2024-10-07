import React from "react";
import eusobre from "../assets/images/eusobre.jpeg";
export default function Sobre(){
  return (
    <section id="sobre" className="py-10 bg-gray-800 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Sobre <span className="text-cyan-600">Mim</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Estudante de Engenharia de Software na FIAP. Possuo conhecimentos em HTML, 
              JavaScript, React, CSS, C# e Phyton. Amplo conhecimento e capacidade em 
              desenvolvimento de site e itegrações. Em busca de estágio ou posição de 
              desenvolvimento de software junior para aprimorar meu desenvolvimento e 
              contribuir com execução.
              </p>
              <br />
              <br />
              <a href="./src/assets/Curriculum_Gabriel.pdf" download>
                <button className="btn-primary">Baixar CV</button>
              </a>
            </div>
          </div>  
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img src={eusobre } alt="" className="w-full object-cover bg-cyan-600 rounded-xl"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


