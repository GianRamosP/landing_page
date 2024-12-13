import React, { useEffect } from "react";
import Logo from "../assets/logo/logoT.png";
import transition from "../transition.jsx";

const Us = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".carousel-slides .slide");
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("hidden", i !== index);
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    const interval = setInterval(nextSlide, 5000);
    showSlide(currentSlide);

    
    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="bg-gray-50">
      <section className="py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTytFzjizMC8ri5QcnyloWXReE1FqGc-YTvg&s"
              alt="Nosotros"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
            <h2 className="text-blue-600 text-lg font-bold uppercase mb-4">
              Asiste Sac
            </h2>
            <h1 className="text-4xl font-extrabold mb-4">Nosotros</h1>
            <p className="text-gray-700">
              ASISTE SAC es un grupo de empresas dedicadas a ofrecer una
              integración completa de servicios de personal para diversos
              sectores y mercados. Nuestro principal objetivo es permitir que
              nuestros clientes concentren sus esfuerzos en el núcleo de su
              actividad productiva.
              <br />
              <br />
              El grupo ASISTE SAC está compuesto por ASISTE OUTSOURCING, FORZA
              LABORAL, LÍDERES EN INTERMEDIACIÓN, TERCERIZACIÓN Y SERVICIOS
              NAVARRO, y CONSTRUCTORA GRUPO BOAT.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Asiste Sac</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ASISTE SAC es un referente destacado en la provisión de servicios
            variados de recursos humanos para empresas de diferentes sectores.
            <br />
            <br />
            Gracias a la calidad y diversidad de nuestros servicios, así como a
            nuestra filosofía de compromiso total y esfuerzo constante, hemos
            ganado la confianza y aceptación de nuestros clientes.
          </p>
          <div className="mt-8 flex justify-center">
            <video
              controls
              className="rounded-lg shadow-lg max-w-full"
              width="640"
            >
              <source src="ruta-a-tu-video.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-blue-600 text-lg font-bold uppercase mb-4">
            Asiste Sac
          </h2>
          <h1 className="text-4xl font-extrabold mb-4">Asiste Sac</h1>
          <div className="max-w-2xl mx-auto">
            <div id="carousel" className="relative overflow-hidden">
              <div className="carousel-slides">
                <div className="slide text-gray-700 text-lg hidden">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Misión
                  </h3>
                  <p>
                    Ser un elemento esencial para los clientes al brindar
                    servicios diferenciados del Talento Humano...
                  </p>
                </div>
                <div className="slide text-gray-700 text-lg hidden">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Visión
                  </h3>
                  <p>
                    Ser reconocidos como líderes en soluciones innovadoras para
                    la gestión de recursos humanos...
                  </p>
                </div>
                <div className="slide text-gray-700 text-lg hidden">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Valores
                  </h3>
                  <p>
                    Compromiso, integridad y excelencia en cada proyecto que
                    emprendemos...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default transition(Us)
