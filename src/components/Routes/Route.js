import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Anasayfa from "../../pages/HomePage/AnaSayfa";
import Hakkimizda from "../../pages/AboutPage/Hakkimizda";
import SaglikliMi from "../../pages/ProductsPage/SaglikliMi";
import SaglikliTarifler from "../../pages/SaglikliTariflerPage/SaglikliTarifler";
import RecipeDetail from "../../pages/SaglikliTariflerPage/RecipeDetailPage";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Anasayfa/>} />
      <Route path="/anasayfa"  element={<Anasayfa />} />
      <Route path="/hakkimizda" element={<Hakkimizda />} />
      <Route path="/saglikliMi" element={<SaglikliMi />} />
      <Route path="/saglikliTarifler" element={<SaglikliTarifler />} />
      <Route path='recipe/:id' element={<RecipeDetail />} /> 
    </Routes>
  );
};
export default RoutePage;
