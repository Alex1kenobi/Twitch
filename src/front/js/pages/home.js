import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import {Card} from "../component/card"
import {Card2} from "../component/card2"

import heroImg from '../../img/slider_img_bg.png';


export const Home = () => {
    return (
        <div className="">
<section className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-6 mt-4 mt-md-0 order-2 order-md-1">
        <img className="img-fluid" src="placeholder/pictures/bg_4-3.svg?primary=007bff" alt=""/>
      </div>
      <div className="col-md-6 my-auto pl-md-5 order-1 order-md-2">
        <h2 className="mb-4">The New Internet</h2>
        <p className="mb-4">Our mission is not to outsell Hooli with a product like their latest Box 3. We are not in it for the money - we are in it to make the whole world decentralized.</p>
        <div>
          <div className="d-flex align-items-start">
            <img className="mr-3" src="placeholder/icons/check.svg" alt=""/>
            <div>
              <h4>Security</h4>
              <p>Your data is virtually unhackable compared to traditional net.</p>
            </div>
          </div>
          <div className="d-flex align-items-start">
            <img className="mr-3" src="placeholder/icons/check.svg" alt=""/>
            <div>
              <h4>Privacy</h4>
              <p>Nobody is tracking you when your activity when you use PiperNet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="pt-5">
  <div className="container text-center">
    <h2 className="mb-3">PiperNet Setup</h2>
    <div className="row">
      <div className="col-md-4 p-4">
        <span className="d-inline-block rounded-circle px-4 py-3 bg-primary my-4">1</span>
        <h3>Move Data</h3>
        <p>Using our Piper Assistant application, you can move your data to be stored our decentralized network with simple drag &amp; drop.</p>
      </div>
      <div className="col-md-4 p-4">
        <span className="d-inline-block rounded-circle px-4 py-3 bg-primary my-4">2</span>
        <h3>Integrate Software</h3>
        <p>We want to make sure that you can keep using the software that you use to manage your business.</p>
      </div>
      <div className="col-md-4 p-4">
        <span className="d-inline-block rounded-circle px-4 py-3 bg-primary my-4">3</span>
        <h3>Ongoing Support</h3>
        <p>As with all innovative technologies, sometimes unpredictable things will happen, and you can always count on our support to solve issues for you.</p>
      </div>
    </div>

  </div>
</section>

<section className="py-5">
  <div className="container text-center">
    <div className="row">
      <div className="col-md-10 mx-auto">
        <h1 className="mb-4">Bringing the Internet of the Future to the People</h1>
        <p className="lead">Decentralized, secure, private. The PiperNet is on it's way to revolutionize every smartphone, PC, and smart-fridge near you.</p>
        <a className="btn btn-primary mb-5 mt-3" href="#">Sign up with facebook</a>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 col-lg-3 p-4">
        <img src="placeholder/icons/check.svg" alt=""/>
        <h4 className="my-3">Security</h4>
        <p>Your data is virtually unhackable compared to traditional net</p>
      </div>
      <div className="col-md-6 col-lg-3 p-4">
        <img src="placeholder/icons/check.svg" alt=""/>
        <h4 className="my-3">Privacy</h4>
        <p>Nobody is tracking you when your activity when you use PiperNet</p>
      </div>
      <div className="col-md-6 col-lg-3 p-4">
        <img src="placeholder/icons/check.svg" alt=""/>
        <h4 className="my-3">Storage</h4>
        <p>Store your data safely, and access it faster than ever</p>
      </div>
      <div className="col-md-6 col-lg-3 p-4">
        <img src="placeholder/icons/check.svg" alt=""/>
        <h4 className="my-3">Decentralization</h4>
        <p>Decentralized design allows data to flow freely and efficiently</p>
      </div>
    </div>
  </div>
</section>

        <Card2/>
        </div>

    );
}


export default Home;