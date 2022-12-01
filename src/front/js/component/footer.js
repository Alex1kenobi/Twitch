import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/a1k-entero.png";
import twitter from "../../img/twitter.svg" 

export const Footer = () => {
  return (
    <footer class="py-3"><div class="container">
    <div class="d-flex justify-content-center align-items-center flex-column">
      <div class="d-flex mb-3">
        <a href="#">
          <img src={Logo} height={"50px"}/></a>

        
      </div>
      <div class="d-flex">
        <p class="mb-0 small text-muted">© 2022 Alex1kenobi. All rights reserved.</p>
      </div>
    </div>
    </div>
  </footer>
  );
};
