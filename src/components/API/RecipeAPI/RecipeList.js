import React from "react";
import RecipeCard from "./RecipeCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.scss";

const RecipeList = ({ recipes }) => {
  return (
    <Container>
      <Row>
        {recipes.map((recipe) => (
          <Col key={recipe.recipe.uri} xs={12} sm={6} lg={4} className="mb-4 ">
            <RecipeCard recipe={recipe} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeList;
