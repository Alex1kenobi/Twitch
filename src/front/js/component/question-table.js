import React, { useContext } from "react";
import "../../styles/question-table.css";
import { Context } from "../store/appContext";

export const QuestionTable = () => {
  const { store, actions } = useContext(Context);
  console.log(store.preguntas_perfil);

  return (
    <div class="padding">
      <div class="row container d-flex justify-content-center">
        <div class="col grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h4 class="card-title">Tabla de preguntas</h4>
                </div>
              </div>
              <div class="table-responsive">
                <table id="htmltable" class="table">
                  <thead>
                    <tr>
                      <th>Entrevistado</th>
                      <th>Categoría</th>
                      <th>Pregunta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store.preguntas_current_user.length > 0
                      ? store.preguntas_current_user.map((cadapregunta) => {
                          return (
                            <tr>
                              <td>{cadapregunta.interviewer}</td>
                              <td>{cadapregunta.category}</td>
                              <td>{cadapregunta.text}</td>
                            </tr>
                          );
                        })
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
