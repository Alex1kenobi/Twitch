import React, { useEffect, useContext } from "react";
import "../../styles/card2.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card2 = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getEntrevistados();
    actions.getPreguntasPerfil();

  }, []);

  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-lg-6">
          {/* <!-- Section Heading--> */}
          <div
            class="section_heading text-center wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <h3>
              Our Creative <span> Team</span>
            </h3>
            <p>
              Appland is completely creative, lightweight, clean &amp; super
              responsive app landing page.
            </p>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="row">
        {store.entrevistados.map((invitado) => {
          return (
            <div class="col-12 col-sm-6 col-lg-3">
              <div
                class="single_advisor_profile wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                {/* <!-- Team Thumb--> */}
                <div class="advisor_thumb">
                  <img
                    src={invitado.photo}
                    alt=""
                  />
                  {/* <!-- Social Info--> */}
                  <div class="social-info">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                {/*   <!-- Team Details--> */}
                <Link to={"/entrevistas/"+invitado.id+"/"+invitado.name}>
                <div class="single_advisor_details_info">
                  <h6>{invitado.name}</h6>
                  <p class="designation">{invitado.position}</p>
                </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
