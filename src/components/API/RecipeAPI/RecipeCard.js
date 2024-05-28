import React from "react";
import { Link } from "react-router-dom"; // Import for routing
import "./index.scss";
import Card from "react-bootstrap/Card";

const RecipeCard = ({ recipe }) => {
  const { image, label, cuisineType, dietLabel, mealType, uri } =
    recipe?.recipe;
  const id = uri?.split("#")[1];
  return (
    <Card className="recipe-card h-100 ">
      <Card.Img variant="top" src={image} alt={label} />
      <Card.Body>
        <Card.Title className="recipeCard-title my-4 ">{label}</Card.Title>
        <Link
          to={`/recipe/${id}`}
          className="btn recipe-card-btn btn-outline-secondary border-2"
        >
          View Recipe
        </Link>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
