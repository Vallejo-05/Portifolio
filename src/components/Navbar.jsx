import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState(1); 
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "SOBRE", link: "#sobre" },
    { name: "HABILIDADES", link: "#habilidades" },
    { name: "PROJETOS", link: "#projetos" },
    { name: "CONTATOS", link: "#contato"}
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setSticky(scrollY > 0);
      setOpacity(Math.max(1 - scrollY / 400, 0.5)); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-[999] bg-white text-gray-900`} style={{ opacity }}>
      <div className="flex items-center justify-between mx-7">
        <h4 className="text-4xl uppercase font-bold">
          G<span className="text-cyan-600">V</span>
        </h4>
        <div className={`md:block hidden bg-white/60 text-gray-900 px-7 py-2 font-medium rounded-bl-full`}>
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={() => setOpen(!open)} className={`z-[999] text-3xl md:hidden m-5 ${open ? "text-gray-900" : "text-gray-100"}`}>
          <ion-icon name="menu"></ion-icon>
        </div>
        <div className={`md:hidden absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"}`}>
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600" onClick={() => setOpen(false)}>
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
