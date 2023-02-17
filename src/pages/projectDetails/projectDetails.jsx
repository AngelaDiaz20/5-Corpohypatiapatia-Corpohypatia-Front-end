import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../service/api";

import ReadMore from "./ReadMore";
import "./StylesDetails.css";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BsBoxArrowUp } from "react-icons/bs";
import { RiFileEditLine } from "react-icons/ri";
import Checklist from "./Checklist";

function ProjectDetails() {

  const [project, setProject] = useState([]);

  const { id } = useParams();

  const loadProjectsDetails = async () => {
    const response = await getProject(id);
    setProject(response.data);
  };

  useEffect(() => {
    loadProjectsDetails();
  }, []);

  // console.log(project.problematic_summary)

  // const text = project.problematic_summary
  // console.log(`texto ${text}`)

  return (
    <div className="contenedor-Detalle">

      <div className="card-foto">
        <img className="imagen" src={project.imagePath} alt="Card cap" />
        <div className="reverse">
          <div className="cards">
            <div className="texto-v">
              <p className="texto-bold">
                Proyecto: {project.project_title}
              </p>
              <p className="texto-bold">
                Entidad: Corporación para la Equidad, la Democracia y el Buen Vivir – Corpohypatia.
              </p>
              <p className="texto-bold">
                Estrategia de bienestar emocional de niños y niñas de 5 a 12 años en el municipio de Bucaramanga, Santander.
              </p>
            </div>
            <div className="boton-edit">
              <button className="boton-editar">
                Editar <RiFileEditLine className="icon-edit" />
              </button>
            </div>
          </div>

          <div className="elemento-avance">
            <button className="Boton-regresar">
              Regresar <RiArrowGoBackFill className="icon-regreso" />
            </button>

            <div className="avance">
              <p>Avance</p>
              <div className="porcentaje-avance">
                <p>15%</p>
              </div>
            </div>
          </div>
        </div>
      </div >

      <div class="margen">
        <div class="segun-margen">
          {/* card sencilla indicador*/}
          <h2>Indicadores:</h2>
          <div class="card">
            <div className="forma">
              <div class="cards-indicador">
                <div className="rectangulo">
                  <p>Indicador</p>
                </div>
                {/* <p class="card-text">Lorem Ipsum is simply dummy text</p> */}
              </div>
              {/* <div className="indicador">
                <p className="porcetanje-indi">76.52% </p>
                <p className="texto-avance">Avance</p>
              </div> */}
              <Checklist />
            </div>
          </div>
          {/* card sencilla fechas*/}

          <div class="card">
            <div class="card-body">
              <div className="contenedor-fechas">
                <div className="fechas">
                  <p className="bold">Fecha de corte:</p>
                  <p>30/03/3030</p>
                </div>
                <div className="fechas">
                  <p className="bold">Fecha de actualizacion:</p>
                  <p>30/03/3030</p>
                </div>
                <div className="fechas">
                  <p className="bold">Duración:</p>
                  <p>{project.project_duration}</p>
                </div>
                <div className="fechas">
                  <p className="bold">Presupuesto:</p>
                  <p>{project.project_budget}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="resumen-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#resumen"
                    type="button"
                    role="tab"
                    aria-controls="resumen"
                    aria-selected="true"
                  >
                    Resumen
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="resultados-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#resultados"
                    type="button"
                    role="tab"
                    aria-controls="resultados"
                    aria-selected="false"
                  >
                    Objetivos
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="ficha-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#ficha"
                    type="button"
                    role="tab"
                    aria-controls="ficha"
                    aria-selected="false"
                  >
                    Experiencia y capacidad
                  </button>
                </li>

                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="Documento-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Documento"
                    type="button"
                    role="tab"
                    aria-controls="Documento"
                    aria-selected="false"
                  >
                    Sostenibilidad
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="resumen"
                  role="tabpanel"
                  aria-labelledby="resumen-tab"
                >
                  <div className="card-body">
                    <h5 className="card-title">Descripción del proyecto</h5>
                    <hr />
                    <p className="card-texts">
                      {project.problematic_summary}
                      {/* Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum. */}
                    </p>
                    <h5 className="card-title">Beneficiarios / población diana</h5>
                    <hr />
                    {project.beneficiaries}

                    <h5 className="card-title">Resumen ejecutivo</h5>
                    <hr />
                    {project.executive_summary}

                    <h5 className="card-title">Alineación del proyecto con políticas públicas y prioridades locales, regionales, estatales y/o Internacionales</h5>
                    <hr />
                    {project.alignment}

                    {/* <div className="texto-fecha">
                      <p>Fecha de corte:</p>
                      <p>Fecha de actualizacion:</p>
                    </div> */}
                  </div>

                  {/* <div className="card-body">
                    <h5 className="card-title">
                      Comportamiento anual del indicador
                    </h5>
                    <hr />
                  </div> */}
                </div>
                <div
                  class="tab-pane fade"
                  id="resultados"
                  role="tabpanel"
                  aria-labelledby="resultados-tab"
                ><br/>
                  {project.methodology_summary}
                  <h5 className="card-title">Objetivo general</h5>
                  <hr />
                  {project.general_objetive}

                  <h5 className="card-title">Objetivos específicos</h5>
                  <hr />
                  •	Reforzar las competencias de NN de 5 a 12 años para la resiliencia y el afrontamiento de la vulnerabilidad, frente al panorama situacional de riesgos, mediante el conocimiento, auto-reconocimiento de necesidades y capacidades emocionales, incorporando enfoques de género y psicopedagógicos. <br/><br/>
                  •	Potenciar dinámicas familiares, comunitarias e institucionales de corresponsabilidad para la  activación de entornos protectores de los NN de la zona involucrada en el proyecto.
                </div>
                <div
                  class="tab-pane fade"
                  id="ficha"
                  role="tabpanel"
                  aria-labelledby="ficha-tab"
                ><br/>
                  <h5 className="card-title">Experiencia y capacidad</h5>
                  <hr />
                  {project.experience}
                </div>
                <div
                  class="tab-pane fade"
                  id="Documento"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                ><br/>
                  <h5 className="card-title">Identificación de elementos que aseguren la sostenibilidad económica, social y ambiental del Proyecto</h5>
                  <hr />
                  {project.sustainability}

                  <h5 className="card-title">Estrategia de salida al finalizar el proyecto</h5>
                  <hr />
                  {project.exit_strategy}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="boton-export">
          Exportar <BsBoxArrowUp className="icon-Export" />{" "}
        </button>
      </div>
    </div >
  );
}

export default ProjectDetails;
