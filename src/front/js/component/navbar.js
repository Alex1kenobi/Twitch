import React, { useState, useContext } from "react";
import { gsap } from "gsap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import Logo from "../../img/a1k-entero.png";
import logo from "../../img/a1k-entero.png";
import react from "react";

export const Navbar = () => {
  /*  const { useRef, useEffect, createRef } = React; */

  const { store, actions } = useContext(Context);

  let items;

  if (store.logged) {
    items = [
      {
        name: "Home",
        color: "#e91e63",
        href: "/",
      },
      {
        name: "Streamings",
        color: "#e91e63",
        href: "#",
      },
      {
        name: "Entrevistas",
        color: "#e91e63",
        href: "/entrevistas",
      },
      {
        name: "Sobre mi",
        color: "#e91e63",
        href: "#",
      },
      {
        name: "Perfil",
        color: "#e91e63",
        href: "/user-profile",
      },
    ];
  } else {
    items = [
      {
        name: "Home",
        color: "#e91e63",
        href: "/",
      },
      {
        name: "Streamings",
        color: "#e91e63",
        href: "#",
      },
      {
        name: "Entrevistas",
        color: "#e91e63",
        href: "/entrevistas",
      },
      {
        name: "Sobre mi",
        color: "#e91e63",
        href: "#",
      },
      {
        name: "Login",
        color: "#e91e63",
        href: "/login",
      },
    ];
  }
  /* 
  const $root = useRef();
  const $indicator1 = useRef();
  const $indicator2 = useRef();
  const $items = useRef(items.map(createRef));
  const [active, setActive] = useState(0);

  const animate = () => {
    const menuOffset = $root.current.getBoundingClientRect();
    const activeItem = $items.current[active].current;
    const { width, height, top, left } = activeItem.getBoundingClientRect();

    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width: width,
      height: height,
      backgroundColor: items[active].color,
      ease: "elastic.out(.7, .7)",
      duration: 0.8,
    };

    gsap.to($indicator1.current, {
      ...settings,
    });

    gsap.to($indicator2.current, {
      ...settings,
      duration: 1,
    });
  };

  useEffect(() => {
    animate();
    window.addEventListener("resize", animate);

    return () => {
      window.removeEventListener("resize", animate);
    };
  }, [active]); */

  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/entrevistas" class="nav-link">
                Entrevistas
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/#" class="nav-link">
                Sobre mi
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/#" class="nav-link">
                Contacto
              </Link>
            </li>
            {store.logged ? (
              <>
                <li class="nav-item">
                  <Link to="/user-profile" class="nav-link">
                    Perfil
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/" onClick={()=>{
                    actions.logout()
                  }} class="nav-link">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li class="nav-item">
                <Link to="/login" class="nav-link">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>

    /*  <div ref={$root} className="menu">
      <a
        class="navbar-brand"
        href="#"
        img
        src="/workspace/project-4geeks/src/front/img/a1k-entero.png"
      ></a>

      {items.map((item, index) => (
        <a
          key={item.name}
          ref={$items.current[index]}
          className={`item ${active === index ? "active" : ""}`}
          onMouseEnter={() => {
            setActive(index);
          }}
          href={item.href}
        >
          {item.name}
        </a>
      ))}

      <div>
        {store.logged ? (
          <a
            onClick={() => {
              actions.logout();
            }}
          >
            <i class="fas fa-sign-out-alt"></i>
          </a>
        ) : null}
      </div>
      <div ref={$indicator1} className="indicator" />
      <div ref={$indicator2} className="indicator" />
    </div> */
  );
};
