import React from "react";

export default function Contato(){
  const contato = [
    { logo: "mail", text: "gabrielvallejo2005@hotmail.com" },
    { logo: "logo-whatsapp", text: "+55 (11) 97185-7017" },
  ];
  return (
    <section id="contato" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">Contato</h3>
        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Seu Nome Completo" />
            <input type="Email" placeholder="Seu Email" />
            <textarea placeholder="Sua Mensagem" rows={10}></textarea>
            <button className="btn-primary w-fit">Enviar</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contato.map((cntt, i) => (
              <div key={i} className="flex flex-row text-left gap-4 flex-wrap items-center">
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={cntt.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm break-words">
                  {cntt.text}
                </p>
              </div>
            ))}
          </div>  
        </div>
      </div>
    </section>
  );
};


