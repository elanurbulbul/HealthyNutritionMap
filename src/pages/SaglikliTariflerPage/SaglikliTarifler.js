import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import RecipeApi from "../../partial/RecipeAPI/RecipesApi";
import "./index.scss";
import Card from "react-bootstrap/Card";
import heroImg from "../../img/HealthyRecipes/hero-section-recipes-img.png";
import { Container } from "react-bootstrap";

const app_id = "cfa79e41"; // Replace with your Edamam API app_id
const app_key = "c5f776242e38ea968b3fac48d712da1e"; // Replace with your Edamam API app_key
const endpoint = "https://api.edamam.com/search";

const SaglikliTarifler = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRecipes = (data) => {
    setRecipes(data);
    setLoading(false);
  };

  return (
    <div className="HealthyRecipesPage">
      {loading && <Loading />}

      <section className="hero-section">
        <Container>
          <Card className="hero-card ">
            <Card.Img
              className="hero-card-img"
              src={heroImg}
              alt="Card image"
            />
            <Card.ImgOverlay className="hero-card-ImgOverlay d-flex flex-column justify-content-center  align-items-center ">
              <Card.Title className="hero-card-title fs-1 ">
                Check here for the healthy recipes you are looking for..
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Container>
      </section>
      <section className="content-section">
        <Container>
          <p className="content-section-description ">
            Eating healthy at home is important to protect our physical and
            mental health. However, busy life pace and work stress can sometimes
            make it difficult to have a balanced diet. Fortunately, there are
            practical ways to eat healthy at home. On this web page, we will
            help you live a balanced and nutritious life by sharing some
            practical suggestions for healthy nutrition at home.
          </p>
        </Container>
      </section>
      <section className="search-section">
        <div className="container">
          <h5 className="search-title">
            Write down the ingredients you want and try lots of recipes
          </h5>
        </div>
        <RecipeApi
          app_id={app_id}
          app_key={app_key}
          handleRecipes={handleRecipes}
        />
      </section>
    </div>
  );
};

export default SaglikliTarifler;
