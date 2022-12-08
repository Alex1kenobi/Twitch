import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import {Card} from "../component/card"
import {Card2} from "../component/card2"
import "../../styles/webBackground.css"
import heroImg from '../../img/home/interview-set.jpg';


export const Home = () => {
    return (
      <div>
        <section className="heroSection" style={{backgroundImage: `url(${heroImg})` }}>
          <div className="overlay">
            {/* <h1>Nosotros presentamos la entrevista</h1> */}
            <h1 className="heroTitle">NOSOTROS PRESENTAMOS LA ENTREVISTA</h1>
            <br></br>
            <h1 className="heroTitle">TÚ HACES LAS <span className="preguntasTitle">PREGUNTAS</span></h1>
            <p className="heroSubTitle">Vota por la pregunta que quieras escuchar o haz tus propias preguntas</p>
            <button className="callToAction" role="button">Entrevista a tú manera</button>
          </div>
        </section>

        <section className="pt-5">
          <div className="container text-center">
            <h2 className="mb-5">Así puedes hacer tus preguntas</h2>
            <div className="homeSection">
              <div className="col-md-4 p-4">
                <span className="d-inline-block rounded-circle px-4 py-3 my-4">
                  1
                </span>
                <h3>Crea tu perfil</h3>
                <p>
                  De esta manera puedes entrar a las entrevistas en vivo
                </p>
              </div>
              <div className="col-md-4 p-4">
                <span className="d-inline-block rounded-circle px-4 py-3 my-4">
                  2
                </span>
                <h3>Vota por preguntas</h3>
                <p>
                  Vota por las preguntas interesantes que hayan hecho otros usuarios. Las preguntas más votadas serán las que se harán en la entrevista
                </p>
              </div>
              <div className="col-md-4 p-4">
                <span className="d-inline-block rounded-circle px-4 py-3 my-4">
                  3
                </span>
                <h3>Haz tus propias preguntas</h3>
                <p>
                  Si nadie ha hecho la pregunta que estás pensando, no pierdas tiempo, hazla tú mismo y ponla a votación. No te quedes con la duda! 
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container text-center">
            <div className="homeSection">
              <div className="col-md-10 mx-auto">
                <h1 className="mb-4">
                  Bringing the Internet of the Future to the People
                </h1>
                <p className="lead">
                  Decentralized, secure, private. The PiperNet is on it's way to
                  revolutionize every smartphone, PC, and smart-fridge near you.
                </p>
                <a className="btn btn-primary mb-5 mt-3" href="#">
                  Sign up with facebook
                </a>
              </div>
            </div>

            <div className="homeSection">
              <div className="col-md-6 col-lg-3 p-4">
                <img src="placeholder/icons/check.svg" alt="" />
                <h4 className="my-3">Security</h4>
                <p>
                  Your data is virtually unhackable compared to traditional net
                </p>
              </div>
              <div className="col-md-6 col-lg-3 p-4">
                <img src="placeholder/icons/check.svg" alt="" />
                <h4 className="my-3">Privacy</h4>
                <p>
                  Nobody is tracking you when your activity when you use
                  PiperNet
                </p>
              </div>
              <div className="col-md-6 col-lg-3 p-4">
                <img src="placeholder/icons/check.svg" alt="" />
                <h4 className="my-3">Storage</h4>
                <p>Store your data safely, and access it faster than ever</p>
              </div>
              <div className="col-md-6 col-lg-3 p-4">
                <img src="placeholder/icons/check.svg" alt="" />
                <h4 className="my-3">Decentralization</h4>
                <p>
                  Decentralized design allows data to flow freely and
                  efficiently
                </p>
              </div>
            </div>
          </div>
        </section>
        <Card2 />
      </div>
    );
}


export default Home;