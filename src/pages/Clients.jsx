import React from "react";
import transition from "../transition.jsx";

const Clients = () => {
  return (
    <div
      id="clients"
      className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-3xl lg:text-4xl leading-normal mb-4 font-extrabold text-black dark:text-white">
            Sector Público
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: "0 auto", height: "35px" }}
            xmlSpace="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary dark:stroke-white"
              style={{
                fill: "transparent",
                strokeWidth: "2",
                strokeMiterlimit: "10",
              }}
            ></circle>
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary dark:stroke-white"
              style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
            ></line>
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary dark:stroke-white"
              style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
            ></line>
          </svg>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <a
            href="https://munihuancayo.gob.pe/concejo-municipal-23/images/munihuancayo.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://munihuancayo.gob.pe/concejo-municipal-23/images/munihuancayo.png"
              alt="Logo 1"
              className="mx-auto"
            />
          </a>
          <a
            href="https://sierdgtt.mtc.gob.pe/Content/assets/images/logo2.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://sierdgtt.mtc.gob.pe/Content/assets/images/logo2.png"
              alt="Logo 2"
              className="mx-auto"
            />
          </a>
          <a
            href="https://servicio.indecopi.gob.pe/sipcon/resources/imagenes/logo.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://servicio.indecopi.gob.pe/sipcon/resources/imagenes/logo.jpg"
              alt="Logo 3"
              className="mx-auto"
            />
          </a>
        </div>
      </div>
      <div className="container xl:max-w-6xl mx-auto px-4 mt-12">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-3xl lg:text-4xl leading-normal mb-4 font-extrabold text-black dark:text-white">
            Sector Privado
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: "0 auto", height: "35px" }}
            xmlSpace="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary dark:stroke-white"
              style={{
                fill: "transparent",
                strokeWidth: "2",
                strokeMiterlimit: "10",
              }}
            ></circle>
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary dark:stroke-white"
              style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
            ></line>
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary dark:stroke-white"
              style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
            ></line>
          </svg>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <a
            href="https://multimarkas.com/nosotros/politica-de-calidad/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://multimarkas.com/wp-content/uploads/2023/04/logotipo-header-color.png"
              alt="Logo 4"
              className="mx-auto"
            />
          </a>
          <a
            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsj9Iy0lMq_wJMK8UVTCWGDfm5BgrKTt-Cgg&s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsj9Iy0lMq_wJMK8UVTCWGDfm5BgrKTt-Cgg&s"
              alt="Logo 5"
              className="mx-auto"
            />
          </a>
        </div>
      </div>
      <section className="bg-gray-200 dark:bg-gray-800 py-12 mt-12">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Certificaciones Internacionales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://normasiso.org/norma-iso-4500/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://normasiso.org/wp-content/uploads/norma-iso-45000-1.jpg.webp"
                alt="Certificación 1"
                className="h-16 mx-auto"
              />
            </a>
            <a
              href="https://hublogistics.ch/quality-control/iso-9001-meaning-and-history"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://hublogistics.ch/wp-content/uploads/2024/05/ISO-9001-Meaning-and-History-hublogistics-logistics-switzerland-transportation-warehouses.webp"
                alt="Certificación 2"
                className="h-16 mx-auto"
              />
            </a>
            <a
              href="https://www.csrconsulting.com.mx/2023/06/29/que-es-la-norma-sa8000-certificacion-de-responsabilidad-social/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.csrconsulting.com.mx/wp-content/uploads/2023/06/SA8000.jpg"
                alt="Certificación 3"
                className="h-16 mx-auto"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default transition(Clients);
