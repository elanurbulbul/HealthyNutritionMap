import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import Webcam from '../../partial/WebCam/Webcam'
const SaglikliMi = () => {
  const [loading, setLoading] = useState(false);
  const [predictedProduct, setPredictedProduct] = useState(null);
  const [showWeb, setShowWeb] = useState(false); // Web bileşeninin gösterilip gösterilmeyeceğini kontrol etmek için state kullanıyoruz


  const handlePrediction = (prediction) => {
    // Tanınan ürünü state'e kaydet
    setPredictedProduct(prediction);
  };
  useEffect(()=>{ 
    setLoading(false);
    setShowWeb(false);
  },[]);
  const handleClick = () => {
    setShowWeb(true); // Web bileşenini göster
  };

  return (
    <div>
      {loading && <Loading />}
      {!predictedProduct && (
        <div>
          <p>Sende denemek ister misin?</p>
          <button onClick={handleClick}>Dene</button>
        </div>
      )}
        {!predictedProduct && showWeb && (
        <div>
          <Webcam onPrediction={handlePrediction} />
        </div>
      )}
      {predictedProduct ? (
        <p>Tanınan Ürün: {predictedProduct}</p>
      ):null}
    </div>
  );
};

export default SaglikliMi;
