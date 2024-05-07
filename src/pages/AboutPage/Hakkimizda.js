import React from "react";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/index";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import healthyNutrition from "../../img/AboutPage/abotPageHealthyNutrition.jpg";

const Hakkimizda = () => {
  const [loading, setLoading] = useState(false);
  const stats = [
    { id: 1, name: "Transactions every 24 hours", value: "2 million" },
    { id: 2, name: "Assets under holding", value: "$1 trillion" },
    { id: 3, name: "New users annually", value: "7,000" },
  ];

  return (
    <div className="AboutPage">
      {loading && <Loading />}
      <section className="hero-section">
        <Container>
          <Row>
            <Col
              lg={8}
              // className="d-flex align-items-center justify-content-center mb-lg-0 mb-5"
            >
              <img
                src={healthyNutrition}
                alt="Healthy Nutrition"
                className="w-100 "
              />
            </Col>
            <Col lg={4} className="align-self-center ">
              <div className="hero-section-description">
                <h2 className="hero-section-title">
                  Now it's your turn to eating healthy...
                </h2>
                <p className="hero-section-text">
                  We, as Healthy Nutrition Compass, aim to assist individuals in
                  adopting and maintaining a healthy lifestyle. Our goal is to
                  promote healthy eating habits and increase awareness of
                  healthy living within the community.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="stats-section">
        <Container>
          <Row>
            <Col lg={8} sm={12}>
              <h3 className="mb-3 ">Mission and Vision</h3>
              <div className="stats-section-description">
                <p>
                  {" "}
                  Our mission is to educate individuals on conscious and
                  accurate nutrition habits, emphasize the importance of
                  high-nutrient, natural, and fresh foods, and encourage a
                  healthy lifestyle. By providing access to correct information
                  on healthy nutrition and lifestyle, we aim to contribute to
                  individuals leading healthier and happier lives.
                </p>

                <p>
                  Our vision is to make healthy eating and lifestyle a standard
                  within society. We aim for every individual to have access to
                  healthy nutrition and to integrate this awareness into their
                  daily lives. Thus, we aspire to create a healthier, happier,
                  and more energetic community.
                </p>
                <p>
                  As Healthy Nutrition Compass, we will continue to guide and
                  support individuals in adopting a healthy lifestyle according
                  to this vision. We strive to contribute to everyone acquiring
                  conscious eating habits for a healthier future.
                </p>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              
                
                  <Row  className="stats-formation d-md-flex justify-content-bet  " >
                    {stats.map((stat) => (
                      <Col key={stat.id} lg={12} md={4} className="mx-auto  py-3">
                        <div>
                          <p className="stats-formation-value">{stat.value}</p>
                          <p className="stats-formation-name">{stat.name}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
              
              
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default Hakkimizda;
