import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import IsitHealthy from "../../pages/IsitHealthyPage";
import HealthyRecipes from "../../pages/HealthyRecipesPage";
import RecipeDetail from "../../pages/HealthyRecipesPage/RecipeDetailPage";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage/>} />
      <Route path="/homepage"  element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/isitHealthy" element={<IsitHealthy />} />
      <Route path="/healthyrecipes" element={<HealthyRecipes />} />
      <Route path='recipe/:id' element={<RecipeDetail />} /> 
    </Routes>
  );
};
export default RoutePage;
