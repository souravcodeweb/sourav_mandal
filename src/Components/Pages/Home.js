import React from "react";
import "./Home.css";
import homeImg from "../../images/profilepic.png";
import {BsTwitter} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";
import {FaYoutube} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import { Link } from "react-router-dom";

const data = {
  mes: "Hello I'M",
  name: "Sourav Mandal",
  about: " Hello Ther i am sourav mandal a full-stack web developer form india helping peppol learn web devolopement to ern",
};

const Home = () => {
  return (
    <section>
      <div className="home">
        <div className="text">
          <h1>{data.mes}</h1>
          <h2>{data.name}</h2>
          <p>
           {data.about}
          </p>
          <div className="socil-links">
            <Link to="#" className="twitter"><BsTwitter/></Link>
            <Link to="#" className="linkedin"><FaLinkedinIn/></Link>
            <Link to="#" className="instagram"><AiOutlineInstagram/></Link>
            <Link to="#" className="youtube"><FaYoutube/></Link>
            <Link to="#" className="github"><AiFillGithub/></Link>
          </div>
          <div className="btn">
            <a href="./images/SouravMandal_Resume.pdf" download>
              My Resume
            </a>
          </div>
        </div>

        <div className="img">
          <img src={homeImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
