// detailAPI.js
import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading'

const DetailAPI = ({ id, app_id, app_key, handleRecipeDetail }) => {
  const [loading, setLoading] = useState(false);

  const fetchRecipeDetail = async () => {
    setLoading(true);
    try {
      if (!id) {
        throw new Error('Failed to fetch recipe');
      }
      const response = await fetch(`https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${app_id}&app_key=${app_key}`);
      const data = await response.json();
      handleRecipeDetail(data[0]);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipeDetail();
  }, [id]); 

  return (
    <div>
    
</div>
  );
};

export default DetailAPI;
