import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Smart Skills for the  <br /> 21st Century Learners  <br /> 
              </h2>
              <p className="mb-5">
              Fun, social, and safe learning
                  <br /> 
                  experiences for ages 8 to14 <br /> 
              </p>
            </div>
            <div className="">
              {/* <input type="text" placeholder="Search" /> */}
              <button className="btn">Explore Courses</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
