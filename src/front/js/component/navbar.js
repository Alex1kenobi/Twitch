import React, { useState, useContext } from "react";
import { gsap } from "gsap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import Logo from "../../img/a1k-entero.png";

export const Navbar = () => {
  /*  const { useRef, useEffect, createRef } = React; */

  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbarLogo">
          <img src={Logo} alt="Alex1Kenobi Logo" height={"50px"}></img>
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
          <span class="navbar-toggler-icon"><i class="bi bi-list burguerMenu"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-around ms-5">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/entrevistas" className="nav-link">
                Entrevistas
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/#" className="nav-link">
                Sobre mi
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/#" className="nav-link">
                Contacto
              </Link>
            </li>
            {store.logged ? (
              <>
                <li className="nav-item mx-2">
                  <Link to="/user-profile" className="nav-link">
                    Perfil
                  </Link>
                </li>
                <li className="nav-item mx-2">
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
              <li className="nav-item mx-2">
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
