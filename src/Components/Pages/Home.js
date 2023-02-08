import React from "react";
import "./Home.css";
import homeImg from "../../images/profilepic.png";
import {BsTwitter} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";
import {FaYoutube} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";

const data = {
  mes: "Hello I'M",
  name: "Sourav Mandal",
  about: " Hello Ther i am sourav mandal a full-stack web developer form india helping peppol learn web devolopement to ern",
};

const Home = () => {
  return (
    <section>
      <div class="home">
        <div class="text">
          <h1>{data.mes}</h1>
          <h2>{data.name}</h2>
          <p>
           {data.about}
          </p>
          <div class="socil-links">
            <a href="#">
             <BsTwitter/>
            </a>
            <a href="https://www.linkedin.com/in/souravcode/">
              <FaLinkedinIn/>
            </a>
            <a href="#">
              <AiOutlineInstagram/>
            </a>
            <a href="#">
              <FaYoutube/>
            </a>
            <a href="#">
              <AiFillGithub/>
            </a>
          </div>
          <div class="btn">
            <a href="./images/SouravMandal_Resume.pdf" download>
              My Resume
            </a>
          </div>
        </div>

        <div class="img">
          <img src={homeImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
