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
            <h1>Title goes here</h1>
            <p>Slogan or more info goes here</p>
          </div>
        </section>

        <section className="pt-5">
          <div className="container text-center">
            <h2 className="mb-3">PiperNet Setup</h2>
            <div className="homeSection">
              <div className="col-md-4 p-4">
                <span className="d-inline-block rounded-circle px-4 py-3 bg-primary my-4">
                  1
                </span>
                <h3>Move Data</h3>
                <p>
                  Using our Piper Assistant application, you can move your data
                  to be stored our decentralized network with simple drag &amp;
                  drop.
                </p>
              </div>
              <div className="col-md-4 p-4">
                <span className="d-inline-block rounded-circle px-4 py-3 bg-primary my-4">
                  2
                </span>
                <h3>Integrate Software</h3>
                <p>
                  We want to make sure that you can keep using the software that
                  you use to manage your business.
                </p>
              </div>
              <div className="col-md-4 p-4">
                <span className="d-inline-block rounded-circle px-4 py-3 bg-primary my-4">
                  3
                </span>
                <h3>Ongoing Support</h3>
                <p>
                  As with all innovative technologies, sometimes unpredictable
                  things will happen, and you can always count on our support to
                  solve issues for you.
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