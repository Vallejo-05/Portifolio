import React from "react";

export default function Habilidades() {
  const skills = [
    { logo: "logo-html5", level: "Avançado", count: 90 },
    { logo: "logo-css3", level: "Avançado", count: 85 },
    { logo: "logo-javascript", level: "Mediano", count: 65 },
    { logo: "logo-python", level: "Iniciante", count: 35},
  ];

  return (
    <section id="habilidades" className="py-10 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Habilidades <span className="text-cyan-600">Técnicas</span>
        </h3>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
        {skills.map((skill, i) => (
          <div key={i} className="border-2 border-white relative min-w-[10rem] max-w-[16rem] p-10 rounded-xx">
            <div className="text-6xl w-28 h-28 bg-gray-900 flex items-center justify-center mb-4">
              <ion-icon name={skill.logo}></ion-icon>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
              <div style={{ width: `${skill.count}%` }} className="bg-cyan-600 h-full"></div>
            </div>
            <p className="text-xl mt-3 text-center">{skill.level}</p>
          </div>
        ))}

        </div>
      </div>
    </section>
  );
}
