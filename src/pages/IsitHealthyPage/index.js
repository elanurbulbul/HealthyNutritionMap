import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { Helmet } from "react-helmet"


function SaglikliMi() {
  const productsHTMLUrl = '/products.html';
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  

  return (
    <div className='IsitHealthy'>
     <Helmet>
        <title>Is it Healthy?</title>
      </Helmet> 
      
      {loading && <Loading />}
      <iframe src={productsHTMLUrl} title="Health Page" width="100%" height="1000px" />
    </div>
    
  );
}

export default SaglikliMi;
