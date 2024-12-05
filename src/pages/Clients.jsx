import React from "react";
import Logo from "../assets/logo/logoT.png"; // Asegúrate de que la ruta sea correcta

const Clients = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <section className="container mx-auto my-12 px-6">
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-green-700 mb-6">
            Sector Público
          </h3>
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

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-red-600 mb-6">
            Sector Privado
          </h3>
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
      </section>

      <section className="bg-gray-200 py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-700 mb-6">
            Certificaciones Internacionales
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://normasiso.org/norma-iso-4500/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://normasiso.org/wp-content/uploads/norma-iso-45000-1.jpg.webp"
                alt="Certificación 1"
                className="h-16"
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
                className="h-16"
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
                className="h-16"
              />
            </a>
          </div>
        </div>
      </section>

      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-10">JF ASISTENTE SAC.</h4>
            <p>
              Nos especializamos en áreas de gestión de personas a nivel
              nacional y en países.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#">
                <img
                  src="https://e7.pngegg.com/pngimages/194/58/png-clipart-computer-icons-css-sprites-facebook-page-company-logo.png"
                  alt="Facebook"
                  className="h-6"
                />
              </a>
              <a href="#">
                <img
                  src="https://img.freepik.com/vector-premium/icono-logotipo-vector-instagram-logotipo-redes-sociales_901408-395.jpg?semt=ais_hybrid"
                  alt="Instagram"
                  className="h-6"
                />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  TERCERIZACION Y SERVICIOS JF ASISTE SAC
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LIDERES EN INTERMEDIACION S.A.C
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  JC OUTSOURCING S.A.C
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ubicación</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Oficinas en Lima
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sucursales
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contáctanos</h4>
            <p>Dirección: XXXXXXXX</p>
            <p>Teléfono: 940047242</p>
            <p>Email: contacto@sparklea.com</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Clients;
