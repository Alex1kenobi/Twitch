import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/responsive.css";
import "../../styles/interviewer-profile.css";

export const InterviewerProfile = () => {
  const { store, actions } = useContext(Context);
  const [question, setQuestion] = useState({});

  let { id } = useParams();

  useEffect(() => {
    actions.getEntrevistado(id);

  }, []);
console.log (store.preguntas_entrevistado)

  return (
    <div>
      <div>
        <body class="profile-page">
          <div class="page-header header-filter"></div>
          <div class="main main-raised">
            <div class="profile-content">
              <div class="container">
                <div class="row">
                  <div class="ml-auto mr-auto">
                    <div class="profile">
                      <div class="avatar">
                        <img
                          src={store.entrevistado.photo}
                          alt="Circle Image"
                          class="img-raised rounded-circle img-fluid"
                        />
                      </div>
                      <div class="name">
                        <h3 class="title">{store.entrevistado.name}</h3>
                        <h6>{store.entrevistado.position}</h6>

                        {/* <a
                          href="#pablo"
                          class="btn btn-just-icon btn-link btn-dribbble"
                        >
                          <i class="fa fa-dribbble"></i>
                        </a>
                        <a
                          href="#pablo"
                          class="btn btn-just-icon btn-link btn-twitter"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a
                          href="#pablo"
                          class="btn btn-just-icon btn-link btn-pinterest"
                        >
                          <i class="fa fa-pinterest"></i>
                        </a> */}
                      </div>
                      <p>{store.entrevistado.description}</p>
                    </div>
                  </div>
                </div>

                <div classname="needs-validation">
                  <div for="validationCustom04" class="form-label">
                    <select
                      class="form-select"
                      aria-label="Floating label select example"
                      id="validationCustom04"
                      required
                      onChange={(e) => {
                        setQuestion({
                          ...question,
                          interviewer_id: store.entrevistado.id,
                          category_id: e.target.value,
                        });
                      }}
                    >
                      <option selected disabled>
                        Selecciona una opción
                      </option>
                      {store.categories.map((category) => {
                        return (
                          <>
                            <option value={category.id}>{category.name}</option>
                          </>
                        );
                      })}
                    </select>
                    <label for="floatingSelect"></label>
                  </div>

                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "100px" }}
                      onChange={(e) => {
                        setQuestion({ ...question, text: e.target.value });
                      }}
                    ></textarea>
                    <label for="floatingTextarea2">Pon aquí tu pregunta</label>
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => {
                      actions.preguntas(question);
                    }}
                  >
                    Enviar
                  </button>

                  <div>
                    <div class="card" style={{ width: "18rem" }}>
                      <div class="card-body">
                        {store.preguntas_entrevistado.length >0   ? store.preguntas_entrevistado.map((indexPregunta) => {
                          return (
                            <>
                              <h5 class="card-title">
                                {indexPregunta.user}
                              </h5>
                              <p class="card-text">
                                {indexPregunta.text}
                              </p>
                              <p class="card-text">
                                {indexPregunta.category}
                              </p>
                            </>
                          );
                        }): <p>Escribe tu pregunta</p>}

                        <div class="input-group">
                          <button
                            type="button"
                            class="btn btn-primary fas fa-thumbs-up"
                          >
                            Like
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary fas fa-thumbs-down"
                          >
                            Dislike
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary fas fa-meh-rolling-eyes"
                          >
                            Pregunta troll
                          </button>

                          <a href="#" class="btn btn-primary">
                            Borrar Pregunta
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>

      {/* <div classname="needs-validation">
        <div for="validationCustom04" class="form-label">
          <select
            class="form-select"
            aria-label="Floating label select example"
            id="validationCustom04"
            required
            onChange={(e) => {
              setQuestion({
                ...question,
                interviewer_id: store.entrevistado.id,
                category_id: e.target.value,
              });
            }}
          >
            <option selected disabled>
              Selecciona una opción
            </option>
            {store.categories.map((category) => {
              return (
                <>
                  <option value={category.id}>{category.name}</option>
                </>
              );
            })}
          </select>
          <label for="floatingSelect"></label>
        </div>

        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            onChange={(e) => {
              setQuestion({ ...question, text: e.target.value });
            }}
          ></textarea>
          <label for="floatingTextarea2">Pon aquí tu pregunta</label>
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => {
            actions.preguntas(question);
          }}
        >
          Submit
        </button>

        <div>
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{store.preguntas_entrevistado.user}</h5>
              <p class="card-text">{store.preguntas_entrevistado.text}</p>
              <p class="card-text">{store.preguntas_entrevistado.category}</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        {store.entrevistado.name}
        <img src={store.entrevistado.photo} />
        {store.entrevistado.description}
      </div> */}
    </div>
  );
};
