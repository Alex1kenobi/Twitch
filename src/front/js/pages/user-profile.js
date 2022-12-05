import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/profile-dashboard.css";
import "../../styles/profile.css";
import { QuestionTable } from "../component/question-table";

/* 
import { MdLocationPin, MdEmail } from "react-icons/md"; */

export const UserProfile = () => {
  const { actions, store } = useContext(Context);

  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);

  const [ user, setUser ] = useState({});
  const [ error, setError] = useState ("");

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const [password2, setPassword2] = useState("");

  const verificarPasswords = (user) => {
    
    // Verificamos si las constraseñas no coinciden
    if (user.password || password2) {
      console.log(user);
      if (user.password != password2) {
        // Si las constraseñas no coinciden mostramos un mensaje
        setError("La contraseña no coincide");
      } else {
        actions.editUser(user);
      }
    }
    else {actions.editUser(user)
    
      swal({
        icon: "success",
        text: store.message,
      });
    
    }
  };

  return (
    <section>
      <div class="container">
        <div class="box">
          <p class="h-dash">Tu perfil</p>
          <p class="fst-italic textmuted">Área privada</p>
          <div class="row mx-0 mt-2">
            <div class="col-md-4 p-0 border-end">
              <div class="viewbox">
                <p>Preguntas que has hecho</p>
                <p class="blue">{store.preguntas_current_user.length}</p>
              </div>
            </div>
            <div class="col-md-4 p-0 border-end">
              <div class="viewbox">
                <p class="blue">8</p>
                <p>Preguntas aprobadas</p>
              </div>
            </div>
            <div class="col-md-4 p-0">
              <div class="viewbox">
                <p class="blue">1</p>
                <p>Entrevistas en las que has participado</p>
              </div>
            </div>
          </div>
          <div>
            <div class="box2 mt-3">
              <div class="d-flex mt-2 ">
                <span class="fas fa-users-cog mt-1"></span>
                <div class="w-100 border-bottom">
                  <p class="">Mi perfil</p>
                  <p class="textmuted mb-2">Acceso a tus datos y contraseña</p>
                  <div class="container">
                    <div class="container rounded bg-white mt-5">
                      <div class="row">
                        <div class="col-md-4 border-right">
                          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img
                              class="rounded-circle mt-5"
                              src="https://i.imgur.com/0eg0aG0.jpg"
                              width="90"
                            />
                            <span class="font-weight-bold">
                              {store.user.username}
                            </span>
                            <span class="text-black-50">
                              {store.user.email}
                            </span>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                              <div class="d-flex flex-row align-items-center back"></div>
                            </div>
                            <div class="row mt-2">
                              <div class="col-md-6">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Nombre de usuario"
                                  defaultValue={store.user.username}
                                  onChange={(e) => 
                                    setUser({
                                      ...user,
                                      username: e.target.value
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div class="row mt-3">
                              <div class="col-md-6">
                                <input
                                  type="text"
                                  class="form-control"
                                  defaultValue={store.user.email}
                                  placeholder="Email"
                                  onChange={(e) => 
                                    setUser({ ...user, email: e.target.value })
                                  }
                                />
                              </div>
                            </div>
                            <div class="row mt-3">
                              <div class="col-md-6">
                                <input
                                  type="password"
                                  class="form-control"
                                  placeholder="Cambia contraseña"
                                  onChange={(e) => 
                                    setUser({
                                      ...user,
                                      password: e.target.value
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div class="row mt-3">
                              <div class="col-md-6">
                                <input
                                  type="password"
                                  class="form-control"
                                  onChange={(e) => setPassword2(e.target.value)}
                                  placeholder="Confirmar Contraseña"
                                />
                              </div>
                            </div>
                            <p>
                              { error }
                            </p>
                            <div class="mt-5 text-right">
                              <button
                                class="btn btn-primary profile-button"
                                type="button"
                                onClick={() => {
                                  verificarPasswords(user);
                                }}
                              >
                                Guardar cambios
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex mt-2">
                <span class="fas fa-bookmark ms-0 mt-1"></span>
                <div class="w-100 ps-2">
                  <p class="">Mis interacciones</p>
                  <p class="textmuted mb-2">
                    Registro de preguntas y a quien se las hiciste
                  </p>
                </div>
              </div>
              <QuestionTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
