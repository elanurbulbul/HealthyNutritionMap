import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import Loading from "../../components/Loading";
import { Container } from "react-bootstrap";

const app_id = "cfa79e41"; // Replace with your Edamam API app_id
const app_key = "c5f776242e38ea968b3fac48d712da1e"; // Replace with your Edamam API app_key
const endpoint = "https://api.edamam.com/search";

const RecipeApi = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchRecipes = async (term) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${endpoint}?q=${term}&app_id=${app_id}&app_key=${app_key}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
      console.log(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchRecipes(searchTerm);
  }, [searchTerm]);
  


  return (
      <div >
        {loading && <Loading />}
        <SearchBar
          onSearchTermChange={setSearchTerm}
          onSearch={() => fetchRecipes(searchTerm)}

      />

        <RecipeList recipes={recipes} />
      </div>
  );
};

export default RecipeApi;

