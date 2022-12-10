import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/responsive.css";
import "../../styles/interviewer-profile.css";

export const InterviewerProfile = () => {
  const { store, actions } = useContext(Context);
  const [text, setText] = useState("");

  const [selectcategory, setSelectcategory] = useState("");
  const [mensaje, setMensaje] = useState("");

  let { id } = useParams();

  useEffect(() => {
    actions.getEntrevistado(id);
  }, []);

  const handleQuestion = async () => {
    await actions.preguntas(store.entrevistado.id, text, selectcategory);
    setText("");
    setSelectcategory("");
    setMensaje(store.message_response);
  };

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
                      </div>
                      <p>{store.entrevistado.description}</p>
                    </div>
                  </div>
                </div>

                <div classname="needs-validation">
                  {store.logged ? (
                    <>
                      <div for="validationCustom04" class="form-label">
                        <select
                          class="form-select"
                          aria-label="Floating label select example"
                          id="validationCustom04"
                          required
                          value={selectcategory}
                          onChange={(e) => {
                            setSelectcategory(e.target.value);
                          }}
                        >
                          <option selected disabled value="">
                            Selecciona una opción
                          </option>
                          {store.categories.map((category) => {
                            return (
                              <>
                                <option value={category.id}>
                                  {category.name}
                                </option>
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
                          value={text}
                          onChange={(e) => {
                            setText(e.target.value);
                          }}
                        ></textarea>
                        <label for="floatingTextarea2">
                          Pon aquí tu pregunta
                        </label>
                      </div>

                      <p>{mensaje}</p>
                      <button
                        type="submit"
                        class="btn btn-primary"
                        onClick={async () => {
                          handleQuestion();
                        }}
                      >
                        Enviar
                      </button>
                    </>
                  ) : (
                    <>
                      <div for="validationCustom04" class="form-label">
                        <select
                          class="form-select"
                          aria-label="Floating label select example"
                          id="validationCustom04"
                          required
                          value={selectcategory}
                          onChange={(e) => {
                            setSelectcategory(e.target.value);
                          }}
                          disabled
                        >
                          <option selected disabled value="">
                            Selecciona una opción
                          </option>
                          {store.categories.map((category) => {
                            return (
                              <>
                                <option value={category.id}>
                                  {category.name}
                                </option>
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
                          value={text}
                          onChange={(e) => {
                            setText(e.target.value);
                          }}
                          disabled
                        ></textarea>
                        <label for="floatingTextarea2">
                          Inicia sesión para hacer una pregunta
                        </label>
                      </div>

                      <p>{mensaje}</p>
                      <button
                        type="submit"
                        class="btn btn-primary"
                        onClick={async () => {
                          handleQuestion();
                        }}
                        disabled
                      >
                        Enviar
                      </button>
                    </>
                  )}
                  <div>
                    {store.preguntas_entrevistado.length > 0 ? (
                      store.preguntas_entrevistado.map((indexPregunta) => {
                        return (
                          <div className="card-group">
                            <div class="card" style={{ width: "18rem" }}>
                              <div class="card-body">
                                <>
                                  <h5 class="card-title">
                                    {indexPregunta.user}
                                  </h5>
                                  <p class="card-text">{indexPregunta.text}</p>
                                  <p class="card-text">
                                    {indexPregunta.category}
                                  </p>
                                </>
                                {store.logged ? (
                                  <div class="input-group">
                                    {}
                                    <button
                                      type="button"
                                      class="btn btn-primary fas fa-thumbs-up"
                                      onClick={() => {
                                        actions.Likes(
                                          indexPregunta.id,
                                          store.user.id,
                                          indexPregunta.interviewer_id
                                        );
                                      }}
                                    >
                                      Like
                                    </button>
                                    {indexPregunta.likes.length}

                                    <button
                                      type="button"
                                      class="btn btn-primary fas fa-thumbs-down"
                                      onClick={() => {
                                        actions.Dislikes(
                                          indexPregunta.id,
                                          store.user.id,
                                          indexPregunta.interviewer_id
                                        );
                                      }}
                                    >
                                      Dislike
                                    </button>
                                    {indexPregunta.dislikes.length}

                                    <button
                                      type="button"
                                      class="btn btn-primary fas fa-thumbs-down"
                                      onClick={() => {
                                        actions.Trolls(
                                          indexPregunta.id,
                                          store.user.id,
                                          indexPregunta.interviewer_id
                                        );
                                      }}
                                    >
                                      Troll / Repetido
                                    </button>
                                    {indexPregunta.trolls.length}

                                    




                                    {store.user.id == indexPregunta.user_id ? (
                                      <button
                                        class="btn btn-primary"
                                        onClick={() => {
                                          actions.deletequestion(
                                            indexPregunta.id,
                                            indexPregunta.interviewer_id
                                          );
                                        }}
                                      >
                                        Borrar Pregunta
                                      </button>
                                    ) : null}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p>Escribe tu pregunta</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
};
