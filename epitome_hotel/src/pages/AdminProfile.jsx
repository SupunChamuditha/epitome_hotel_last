import React from "react";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/adminpanel.jpg";
import "../styles/home.css";
import Header from "../components/Header/AdminHeader";
import { Link } from "react-router-dom";

const AdminProfile = () => {
  return (
    <>
    <Header/>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <h1>My 
                <span className="highlight"> Profile </span>
              </h1>
              <p>
                Profile details Fom Database
              </p>
              <div className="nav__btns d-flex align-items-center gap-4">
                <button className="btn2" >
                  <Link to={"/Register"} style={{color:"white"}}>Edit</Link>
                </button>
                <button className="btn1" >
                  <Link to={"/home"} style={{color:"black", border:1, borderColor:"black"}}>Log Out</Link>
                </button>
              </div>
              <br />
              <br />
              
            </div>
          </Col>

          <Col lg="6">
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default AdminProfile;
