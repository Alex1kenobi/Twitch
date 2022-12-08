import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import {Card} from "../component/card"
import {Card2} from "../component/card2"
import "../../styles/webBackground.css"
import heroImg from '../../img/home/interview-set.jpg';
import sobremi from '../../img/home/sobremi.png';
import superman from '../../img/home/superman2.png';
import contactUs from '../../img/home/contactUs.jpg';


export const Home = () => {
    return (
      <div>
        <section
          className="heroSection"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="overlay">
            <h1 className="heroTitle">NOSOTROS PRESENTAMOS LA ENTREVISTA</h1>
            <br></br>
            <h1 className="heroTitle">
              TÚ HACES LAS <span className="preguntasTitle">PREGUNTAS</span>
            </h1>
            <p className="heroSubTitle">
              Vota por la pregunta que quieras escuchar o haz tus propias
              preguntas
            </p>
            <button className="callToAction" role="button">
              Entrevista a tú manera
            </button>
          </div>
        </section>

        <section className="pt-5">
          <div className="container text-center">
            <h2 className="mb-5">Así puedes hacer tus preguntas</h2>
            <div className="homeSection">
              <div className="col-md-4 p-4">
                <span className="d-inline-block px-4 py-3 my-4">
                  <i class="fa-solid fa-user homeFirstSectionIcon"></i>
                </span>
                <h3>
                  Crea tu <span className="preguntasTitle">perfil</span>
                </h3>
                <p>De esta manera puedes entrar a las entrevistas en vivo</p>
              </div>
              <div className="col-md-4 p-4">
                <span className="d-inline-block  px-4 py-3 my-4">
                  <i class="fa-solid fa-square-poll-horizontal homeFirstSectionIcon"></i>
                </span>
                <h3>
                  <span className="preguntasTitle">Vota</span> por preguntas
                </h3>
                <p>
                  Vota por las preguntas interesantes que hayan hecho otros
                  usuarios. Las preguntas más votadas serán las que se harán en
                  la entrevista
                </p>
              </div>
              <div className="col-md-4 p-4">
                <span className="d-inline-block px-4 py-3 my-4">
                  <i class="fa-solid fa-circle-question homeFirstSectionIcon"></i>
                </span>
                <h3>
                  Haz tus <span className="preguntasTitle">propias</span> preguntas
                </h3>
                <p>
                  Si nadie ha hecho la pregunta que estás pensando, no pierdas
                  tiempo, hazla tú mismo y ponla a votación. No te quedes con la
                  duda!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container text-center">
            <div className="homeSection">
              <div className="col-md-5 mx-auto">
                <img src={sobremi} className="imgSobremi"></img>
              </div>
              <div className="col-md-5 mx-auto">
                <h1 className="mb-4 mt-5">Sobre Mí</h1>
                <h4 className="preguntasTitle">Consultor Empresarial y Digital</h4>
                <p className="lead">
                  Escucha la historia de mi vida de cómo el destino cambió mi
                  movida, de cómo sin comerlo ni beberlo llegué a ser el
                  pringado de un barrio llamado Bel Air. 
                  <br></br>
                  <br></br>
                  Al oeste de un islote
                  crecía y vivía sin hacer mucho caso a la policía. Jugaba al
                  Call of Duty sin cansarme demasiado porque por las noches me
                  sacaba el graduado. Cierto día jugando Fifa con unos amigos
                  unos tipos me metieron en un lío y mi madre me decía una y
                  otra vez: “¡Con tu tío y tu tía aprenderás Photoshop!”
                </p>
                <a className="btn btn-primary mb-5 mt-4" href="#">
                  Quieres saber más de mí?
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container text-center">
            <div className="homeSection">
              <div className="col-md-5 mx-auto d-flex flex-column justify-content-center">
                <h1 className="mb-4 mt-5">Hazte un perfil</h1>
                <h4>Y empieza a disfrutar de <span className="preguntasTitle">decenas</span> de entrevistas cada mes</h4>
                <button className="btn btn-primary mt-5" role="button">
                  Entrevista a tú manera
                </button>
              </div>
              <div className="col-md-5 mx-auto">
                <img src={superman} className="imgSobremi"></img>
              </div>
            </div>
          </div>
          </section>
        <section className="py-5">
          <div className="container text-center">
            <div className="homeSection">
              <div className="col-md-5 mx-auto">
                <img src={contactUs} className="contactUs"></img>
              </div>
              <div className="col-md-5 mx-auto d-flex flex-column justify-content-center">
                <h1 className="mb-4 mt-5">Quieres que te entrevistemos?</h1>
                <h4>Si quieres <span className="preguntasTitle">compartir</span> algo con la comunidad, contáctanos y podemos agendar una entrevista</h4>
                <button className="btn btn-primary mt-5" role="button">
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
          </section>
      </div>
    );
}


export default Home;