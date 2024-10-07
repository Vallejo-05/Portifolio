import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import projeto1 from "../assets/images/OG.png";
import projeto2 from "../assets/images/Vinheria.png";
import projeto3 from "../assets/images/Vallejour.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

export default function Projetos(){
  const projects = [
    {
      img: projeto1,
      name: "Ocean Guardian",
    },
    {
      img: projeto2,
      name: "Vinheria Agnello",
    },
    {
      img: projeto3,
      name: "Vallejour Modas",
    },
  ];
  return (
    <section id="projetos" className="py-10 bg-gray-800 text-white">
        <h3 className="text-4xl font-semibold text-center mb-5">
          Meus <span className="text-cyan-600">Projetos</span>
        </h3>
      <br/>
        <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>
  );
};


