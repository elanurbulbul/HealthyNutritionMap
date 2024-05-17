import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import DetailAPI from "../../components/API/RecipeAPI/DetailApi"; // Import the newly created component
import { AiFillPushpin } from "react-icons/ai";

const app_id = "cfa79e41"; // Replace with your Edamam API app_id
const app_key = "c5f776242e38ea968b3fac48d712da1e"; // Replace with your Edamam API app_key

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRecipeDetail = (data) => {
    setRecipeDetail(data);
    setLoading(false);
  };

  return (
    <div className="recipe-details">
      <DetailAPI
        id={id}
        app_id={app_id}
        app_key={app_key}
        handleRecipeDetail={handleRecipeDetail}
      />
      {loading ? (
        <Loading />
      ) : recipeDetail ? (
        <div>
         
          <h2>{recipeDetail.label}</h2>
          <img src={recipeDetail.image} alt={recipeDetail.label} />
          <p>Ingrediendts: </p>

          {recipeDetail.ingredientLines.map((ingredient, index) => (
            <p key={index} className="text-neutral-100 flex gap-2">
              <AiFillPushpin className="text-green-800 text-xl" /> {ingredient}
            </p>
          ))}

          <p>HealthLabel:</p>
          {recipeDetail.healthLabels.map((label, index) => {
            return <p key={index}>{label}</p>;
          })}

          <p>Calory:{recipeDetail.calories}</p>
          {/* You can display other recipe details here */}
        </div>
      ) : null}
    </div>
  );
};

export default RecipeDetail;
