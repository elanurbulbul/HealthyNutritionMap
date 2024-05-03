import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { Container, Row, Col } from 'react-bootstrap';

// import cx from "classnames";
 import "./index.scss";
// import heroImg from "../../img/HomePage/hero-section-img.jpeg";

const Anasayfa = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="HomePage">
      {loading && <Loading />}
      <Container>
      <section className="banner py-5">
        <Row>
          <Col md={6}>
            <h1>Learn the best JavaScript tools and frameworks from industry pros.</h1>
            <h2>Video tutorials for badass web developers.</h2>
            <a href="#" className="btn btn-primary mt-3">Click to Start Learning</a>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <a href="#">
              <img src="img/ImmuateableImmer_Final.png" alt="Egghead Course" className="img-fluid" />
            </a>
          </Col>
        </Row>
      </section>

      <section className="section1 py-5">
        {/* <Row>
      
          {['javascript', 'react', 'graphql', 'gatsby', 'css', 'vscode'].map((tech) => (
            <TechIcon key={tech} techName={tech} />
          ))}
        </Row>
         */}
        <Row mt={4}> {/* Using mt prop for margin-top */}
          <Col md={8}>
            <h3>What is egghead?</h3>
            <p>
              egghead is a group of working web development professionals and open source contributors that provide you with concise, information-dense video courses on the best tools in the industry.
            </p>
            <p>
              We are dedicated to respecting your time. This means that egghead courses get to the point and deliver knowledge that you can use today. You won't find boring 8 hour courses on egghead, instead you'll find a wealth of bite-sized courses that pack more information in a fraction of the time.
            </p>
          </Col>
        </Row>
      </section>

      <section className="section2 py-5">
        <Row>
          <Col xs={1}>
            <i className="fa fa-quote-left"></i>
          </Col>
          <Col>
            <p>
              If you're a developer, you owe it to yourself to follow @eggheadio. Short, instructional videos on the technologies we use.
            </p>
          </Col>
        </Row>
        <Row mt={2}>
          <Col xs={2} className="text-center">
            <img src="https://egghead.io/webpack/ff44ca7769c3472639bc459206e96fb0.jpg" alt="Shaun Cave" className="rounded-circle" />
          </Col>
          <Col xs={10}>
            <span>Shaun Cave on Twitter</span>
          </Col>
        </Row>
      </section>

      <section className="section3 py-5">
        <Row>
          <Col md={6}>
            <h3></h3>
            <p>
              Ready to get started? egghead has many free community resource courses for you to start learning today. Create your free account and choose something to learn. Creating a free account will allow you to view all of the free courses egghead has to offer as well as tracking your progress as you learn.
            </p>
            <a href="#" className="btn btn-success">Create Your Free Account</a>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <img src="img/image.png" alt="Learning Illustration" className="img-fluid" />
          </Col>
        </Row>
      </section>
    </Container>


    </div>
  );
};
export default Anasayfa;
