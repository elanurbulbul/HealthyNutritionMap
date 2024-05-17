import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { Container, Row, Col } from "react-bootstrap";
import heroSectionImg from "../../img/HomePage/homePage_hero-section-img.jpeg";
import "./index.scss";
import list1 from "../../img/HomePage/list1.jpg";
import list2 from "../../img/HomePage/list2.jpg";
import list3 from "../../img/HomePage/list3.jpg";
import list4 from "../../img/HomePage/list4.jpg";
import healthyEating from "../../img/HomePage/healthyEating.jpg";


const Homepage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="HomePage">
     
      {loading && <Loading />}
      <section className=" hero-section py-5">
        <Container>
          <Row className="flex-lg-row flex-column-reverse">
            <Col lg={6} className="align-self-center  ">
              <h1>"Are You Ready for a Life Journey Full of Healthy Foods?"</h1>
              <h2>Nutrition: The Key to Unlocking a Healthy Lifestyle!</h2>
            </Col>
            <Col
              lg={6}
              className="d-flex align-items-center justify-content-center mb-lg-0 mb-5"
            >
              
                <img
                  src={heroSectionImg}
                  alt="heroSection_img"
                  className="img-fluid rounded-3 "
                />
            
            </Col>
          </Row>
        </Container>
      </section>

      <section className="content-section py-5">
        <Container>
          <Row mt={4}>
            
            <Col lg={12}>
            <h3 className="content-section-title">
                What is healthy nutrition?
              </h3>
              <p className="content-section-text">
                Healthy nutrition is a lifestyle that includes getting the
                nutrients the body needs in a balanced way. This ensures
                adequate intake of various food groups and limits consumption of
                processed foods and excess sugar. In addition, choosing fresh
                and natural foods, drinking enough water and exercising
                regularly are the basic principles of a healthy diet.
              </p>
              <p className="content-section-text">
                This approach supports overall health, increases energy levels
                and contributes to long-term health outcomes.
              </p>
              <Row className="content-section-list">
                <Col lg={3} md={6} className="content-section-list-item">
                  <p>Balanced and Varied Nutrition</p>
                  <img src={list1} alt="Balanced and Varied Nutrition" />
                </Col>
                <Col lg={3} md={6} className="content-section-list-item">
                  <p>Fresh and Natural Foods</p>
                  <img src={list2} alt="Fresh and Natural Foods" />
                </Col>
                <Col lg={3} md={6} className="content-section-list-item">
                  <p>Regular Exercise and Hydration</p>
                  <img src={list3} alt="Regular Exercise and Hydration" />
                </Col>
                <Col lg={3} md={6} className="content-section-list-item">
                  <p>Adequate Sleep and Stress Management</p>
                  <img src={list4} alt="Adequate Sleep and Stress Management" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonials-section py-5">
        <Container>
          <Row className="testimonials-section-passage">
            <Col lg={4} md={12} >
              <img
                src={list1}
                alt="Balanced and Varied Nutrition"
                className="testimonials-section-img"
              />
            </Col>
            <Col lg={8} md={12} className="align-self-center">
              <p className="testimonials-section-description">
                "Consuming a balanced diet that incorporates all essential
                nutrients is the cornerstone of a healthy lifestyle. Protein
                plays a vital role in building and repairing tissues,
                carbohydrates provide readily available energy for our bodies,
                and healthy fats are crucial for hormone production, cell
                function, and nutrient absorption. Vitamins and minerals act as
                conductors, orchestrating a symphony of vital processes within
                our bodies. By ensuring adequate intake of all these elements,
                we empower our bodies to function optimally, promoting physical
                and mental well-being."
              </p>
            </Col>
          </Row>

          <Row className="testimonials-section-passage flex-lg-row flex-column-reverse">
            <Col lg={8} md={12} className="align-self-center">
              <p className="testimonials-section-description">
                "Shifting towards unprocessed, natural, and fresh foods is a
                transformative step on your path to healthy eating. These whole
                foods are a treasure trove of natural goodness, free from the
                harmful additives, preservatives, and refined sugars that can
                wreak havoc on our health. Instead, they are brimming with the
                building blocks of life: essential vitamins, minerals, and
                fiber. By prioritizing whole foods, we not only fuel our bodies
                efficiently but also provide them with the necessary tools to
                combat chronic diseases, improve gut health, and enhance overall
                vitality."
              </p>
            </Col>
            <Col lg={4} md={12} >
              <img
                src={list2}
                alt="Balanced and Varied Nutrition"
                className="testimonials-section-img"
              />
            </Col>
          </Row>

          <Row className="testimonials-section-passage">
            <Col lg={4} md={12}>
              <img
                src={list3}
                alt="Balanced and Varied Nutrition"
                className="testimonials-section-img"
              />
            </Col>
            <Col lg={8} md={12} className="align-self-center">
              <p className="testimonials-section-description">
                "Engaging in regular physical activity extends far beyond
                aesthetics and sculpted physiques. It's a potent elixir for both
                our physical and mental well-being. Exercise strengthens our
                muscles, enhancing their ability to perform daily tasks and
                reducing the risk of injuries. Moreover, it's a champion for our
                cardiovascular health, promoting a strong and efficient heart
                that pumps life-giving blood throughout our bodies.
                Additionally, physical activity is a natural stress reliever,
                helping to melt away tension and fostering a sense of calm. It
                also enhances brain function, cognition, and memory,
                contributing to a sharper, more focused mind."
              </p>
            </Col>
          </Row>
          <Row className="testimonials-section-passage  flex-lg-row flex-column-reverse">
            <Col lg={8} md={12} className="align-self-center">
              <p className="testimonials-section-description">
                "Our body thrives on a rhythm of activity and rejuvenation. Deep
                sleep fuels this cycle, repairing muscles, regenerating tissues,
                and consolidating memories. It's vital for a healthy immune
                system, emotional resilience, and overall well-being. Alongside
                sleep, managing stress is key. Chronic stress harms both
                physical and mental health. By prioritizing healthy coping
                mechanisms like mindfulness or nature walks, we can cultivate
                inner peace and mental balance."
              </p>
            </Col>
            <Col lg={4} md={12}>
              <img
                src={list4}
                alt="Balanced and Varied Nutrition"
                className="testimonials-section-img"
              />
            </Col>
          </Row>
        </Container>
      </section>

       <section className="visual-section">
        <Container>
        <Row>
          <Col>
            <img src={healthyEating} alt="Healthy Eaiting Plate" className="w-100 "/>
          </Col>
        </Row>
        </Container>
       
      </section> 
    </div>
  );
};
export default Homepage;
