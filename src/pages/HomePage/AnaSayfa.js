import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import cx from "classnames";
// import "./index.scss";
import heroImg from "../../img/HomePage/hero-section-img.jpeg";

const Anasayfa = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="HomePage">
      {loading && <Loading />}
      asadasfdsafsaf
      {/* <section className="home-hero-section">
        <div className="hero-section-img">
          <img src={heroImg} alt="" />
        </div>
      </section> */}
    </div>
  );
};
export default Anasayfa;
