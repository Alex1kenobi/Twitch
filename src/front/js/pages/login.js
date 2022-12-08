import React, { useState, useContext } from "react";
import "../../styles/login.css";
import { Context } from "../store/appContext";

import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate()

  const loginNavigate = async (user) => {
     try {
     await actions.login(user);
if (store.logged){
      navigate("/entrevistas")}
      else {
        setError (store.message); 
      }
    } catch (error) {
      
    }
  };


  const verificarPasswords = (user) => {
    console.log(user);
    // Verificamos si las constraseñas no coinciden
    if (user.password != password2) {
      // Si las constraseñas no coinciden mostramos un mensaje
      setError("La contraseña no coincide");
    } else {
      actions.register(user);
      if (localStorage.getItem("token")){
        navigate("/entrevistas")
      }
    }
  };

  {
    return (
      <div>
        <div id="msg"></div>

        {/* <!-- Mensajes de Verificación --> */}
        <div id="error" class="alert alert-danger ocultar" role="alert">
          Las Contraseñas no coinciden, vuelve a intentar !
        </div>
        <div id="ok" class="alert alert-success ocultar" role="alert">
          Las Contraseñas coinciden ! (Procesando formulario ... )
        </div>
        {/* <!-- Fin Mensajes de Verificación --> */}

        <div class="section">
          <div class="container">
            <div class="row full-height justify-content-center login-body">
              <div class="col-12 text-center align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 class="mb-0 pb-3">
                    <span>Entrar </span>
                    <span>Registro</span>
                  </h6>
                  <input
                    class="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label for="reg-log"></label>
                  <div class="card-3d-wrap mx-auto">
                    <div class="card-3d-wrapper">
                      <div class="card-front">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="mb-4 pb-3">Entrar</h4>
                            <div class="form-group">
                              <input
                                type="email"
                                onChange={(e) => {
                                  setUser({ ...user, email: e.target.value });
                                }}
                                name="logemail"
                                class="form-style"
                                placeholder="Tu email"
                                id="logemail"
                                autocomplete="off"
                              />
                              <i class="input-icon fas fa-envelope"></i>
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="password"
                                onChange={(e) => {
                                  setUser({
                                    ...user,
                                    password: e.target.value,
                                  });
                                }}
                                name="logpass"
                                class="form-style"
                                placeholder="Tu contraseña"
                                id="logpass"
                                autocomplete="off"
                              />
                              <i class="input-icon fas fa-key"></i>
                            </div>
                            <p>{error}</p>
                            <button
                              class="btn mt-4"
                              onClick={() => {
                                loginNavigate(user)
                              }}
                            >
                              Enviar
                            </button>
                            <p class="mb-0 mt-4 text-center">
                              <a href="#0" class="link">
                                ¿Olvidaste la contraseña?
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="card-back">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="mb-4 pb-3">Registro</h4>
                            <div class="form-group">
                              <input
                                type="text"
                                onChange={(e) => {
                                  setUser({
                                    ...user, rol_id:2, // Esto del rol_id le pone rol "2" (usuario) a todo cristo
                                    username: e.target.value,
                                  });
                                }}
                                name="logname"
                                class="form-style"
                                placeholder="Nombre de usuario"
                                id="logname"
                                autocomplete="off"
                              />
                              <i class="input-icon fas fa-user"></i>
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="email"
                                onChange={(e) => {
                                  setUser({ ...user, email: e.target.value });
                                }}
                                name="logemail"
                                class="form-style"
                                placeholder="Tu email"
                                id="logemail"
                                autocomplete="off"
                              />
                              <i class="input-icon fas fa-envelope"></i>
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="password"
                                name="pass1"
                                class="form-style"
                                placeholder="Tu contraseña"
                                id="pass1"
                                autocomplete="off"
                                onChange={(e) =>
                                  setUser({ ...user, password: e.target.value })
                                }
                              />
                              <i class="input-icon fas fa-key"></i>
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="password"
                                name="pass2"
                                class="form-style"
                                placeholder="Repite tu contraseña"
                                id="pass2"
                                autocomplete="off"
                                onChange={(e) => setPassword2(e.target.value)}
                              />
                              <i class="input-icon fas fa-key"></i>
                            </div>

                           

                            <p>{error}</p>
                            <button
                              href="#"
                              type="submit"
                              id="login"
                              class="btn mt-4"
                              onClick={() => {
                                verificarPasswords(user);
                              }}
                            >
                              Enviar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Login;
