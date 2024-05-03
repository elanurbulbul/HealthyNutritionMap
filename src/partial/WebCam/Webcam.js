import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import Loading from '../../components/Loading';

const Webcam= ({ onPrediction }) => {
  const [loading, setLoading] = useState(true);
  const [isCameraReady, setIsCameraReady] = useState(false);

  const videoRef = useRef();

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setLoading(false);
        setIsCameraReady(true); // Kamera hazır olduğunda durumu güncelle
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    setupCamera();
  }, []);

//   useEffect(() => {
//     if (!isCameraReady) return; // Kamera hazır değilse işlem yapma

//     const predictFrame = async () => {
//     //   const model = await tf.loadGraphModel('C:\Users\elanr\Masaüstü\ProjeBitirme\SaglıklıBesinHaritasiWebSite\public\saved_model.pb'); // Model URL'sini buraya ekleyin
//         const model=[''];
//       const intervalId = setInterval(async () => {
//         const image = tf.browser.fromPixels(videoRef.current);
//         const resizedImage = tf.image.resizeBilinear(image, [224, 224]);
//         const expandedImage = resizedImage.expandDims(0);
//         const predictions = await model.predict(expandedImage);
//         const predictionResult = predictions.argMax(1).dataSync()[0];
//         onPrediction(predictionResult); // Tanıma sonucunu ana bileşene iletiliyor
//       }, 1000);

//       return () => clearInterval(intervalId);
//     };

//       predictFrame();
    
//     }, [isCameraReady, onPrediction]);

  return (
    <div>
      {loading && <Loading />}
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default Webcam;
