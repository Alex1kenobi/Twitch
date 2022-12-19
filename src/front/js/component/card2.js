import React, { useEffect, useContext } from "react";
import "../../styles/card2.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card2 = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getEntrevistados();
    
    
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-lg-6">
          {/* <!-- Section Heading--> */}
          <div
            className="section_heading text-center wow fadeInUp"
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
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="row">
        {store.entrevistados.map((invitado) => {
          return (
            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className="single_advisor_profile wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                {/* <!-- Team Thumb--> */}
                <div className="advisor_thumb">
                  <img
                    src={invitado.photo}
                    alt=""
                  />
                  {/* <!-- Social Info--> */}
                  <div className="social-info">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                {/*   <!-- Team Details--> */}
                <Link to={"/entrevistas/"+invitado.id+"/"+invitado.name}>
                <div className="single_advisor_details_info">
                  <h6>{invitado.name}</h6>
                  <p className="designation">{invitado.position}</p>
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
