import React from "react";

import "../styles/cafe.css";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "../components/SearchBar/SearchBar";
import FoodCard from "../components/Card/FoodCard";
import Cart from "../components/Cart/Cart";
import content from "../components/Card/content";
import Header from "../components/Header/Header";

const Cafe = () => {
  return (
    <>
    <Header/>
      <Container>
        <Row lg="">
          <Col className="">
            <Col>
              <div>
                <section id="foods">
                  <Container>
                    <Row>
                      <SearchBar />
                    </Row>
                  </Container>
                </section>
                <section className="pt-0">
                  <Container>
                    <Row >
                        {content.map(content=>(
                          <Col lg='3' style={{marginBottom:10}}>
                          <FoodCard
                            key={content.id}
                            id={content.key}
                            image={content.image}
                            foodname={content.foodname}
                          />
                          </Col>
                        ))}                   
                    </Row>
                  </Container>
                </section>
              </div>
            </Col>
          </Col>
          <Col className="">
            <Cart/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cafe;