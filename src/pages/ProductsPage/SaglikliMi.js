import React, { useEffect, useState, useRef } from "react";
import * as onnx from "onnxjs";
import Loading from "../../components/Loading";
const onnxFolder = require("../../model/best.onnx");


function SaglikliMi() {
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);

  // ONNX modelini yükleme
  

  useEffect(() => {
    async function loadModel() {
      //const modelPath = onnxFolder;
      console.log("infer2");
      const sess = await new onnx.InferenceSession();
      console.log("startin");
      const loadedModel = await sess.loadModel("../../model/best.onnx");
      console.log("sess load");
      setModel(loadedModel);
    }
     loadModel();
  }, []);

  // Görüntü işleme ve tahmin yapma
  async function handleImageProcessing(image) {
    if (!model) return;

    // Görüntüyü tensor formatına dönüştürme
    const tensor = new onnx.Tensor(new Float32Array(image.data), "float32", [
      1,
      image.height,
      image.width,
      3,
    ]);

    // Modeli kullanarak tahmin yapma
    const output = await model.predict(tensor);
    setPredictions(output);
  }

  // Kullanıcının bir dosya yüklediğinde tetiklenecek işlev
  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const image = new Image();
      image.onload = function () {
        handleImageProcessing(image);
      };
      image.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  const useWebcam = () => {
    const [videoStream, setVideoStream] = useState(null);
    const canvasRef = useRef(null);

    useEffect(() => {
      async function startWebcam() {
        const constraints = { video: true };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        setVideoStream(stream);
      }

      startWebcam();

      return () => {
        if (videoStream) {
          videoStream.getTracks().forEach((track) => track.stop());
        }
      };
    }, []);

    useEffect(() => {
      if (videoStream && canvasRef) {
        const videoElement = document.createElement("video");
        videoElement.srcObject = videoStream;
        videoElement.play();

        const context = canvasRef.current.getContext("2d"); // Use current here
        const interval = setInterval(() => {
          context.drawImage(videoElement, 0, 0);
          const imageData = context.getImageData(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          ); // Use current here
          handleImageProcessing(imageData);
        }, 1000);

        return () => clearInterval(interval);
      }
    }, [videoStream, canvasRef]);

    return (
      <div>
        <video
          ref={(videoElement) =>
            videoElement && (videoElement.srcObject = videoStream)
          }
          autoPlay
          muted
        ></video>
        <canvas ref={canvasRef}></canvas>
      </div>
    );
  };

  return (
    <div>
      {loading && <Loading />}
      <h1>Nesne Tahmini Web Sitesi</h1>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      {useWebcam()}
      <div>
        <h2>Tahminler</h2>
        <ul>
          {predictions.map((prediction, index) => (
            <li key={index}>{prediction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SaglikliMi;
