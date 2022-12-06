import React, { useState, useContext } from "react";
import { gsap } from "gsap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

import Logo from "../../img/a1k-entero.png";
import react from "react";

export const Navbar = () => {
  /*  const { useRef, useEffect, createRef } = React; */

  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/">
          <img src={Logo} alt="Alex1Kenobi Logo" height={"50px"} className="navbarLogo"></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/entrevistas" className="nav-link">
                Entrevistas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link">
                Sobre mi
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link">
                Contacto
              </Link>
            </li>
            {store.logged ? (
              <>
                <li className="nav-item">
                  <Link to="/user-profile" className="nav-link">
                    Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    onClick={() => {
                      actions.logout();
                    }}
                    className="nav-link"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
