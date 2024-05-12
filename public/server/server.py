import re
import base64
from io import BytesIO
from PIL import Image
from flask import Flask, request, jsonify
from flask_cors import CORS
from ultralytics import YOLO

app = Flask(__name__)
CORS(app)

model = None
class_list = None


@app.route("/detect", methods=["POST"])
def detect():
    image_data = request.get_data().decode("utf-8")
    image_data = re.sub("^data:image/.+;base64,", "", image_data)
    image_data = BytesIO(base64.b64decode(image_data))
    image = Image.open(image_data).convert("RGB")
    results = []
    predictions = model.predict(image)
    for result in predictions:
        boxes = result.boxes
        xyxy = boxes.xyxy.numpy().tolist()
        class_id = result.boxes.cls.numpy().astype(int)
        print(class_id)
        class_name = ""
        if len(class_id) > 0:
            class_id = class_id[0]
            class_name = class_list[class_id]
        confidence = result.boxes.conf.numpy().tolist()
        results.append({"xyxy": xyxy, "class_name": class_name,
                       "confidence": confidence})
    return jsonify(results)


if __name__ == "__main__":
    model = YOLO("best_3.pt", task="detect")
    class_list = model.model.names
    app.run(host="127.0.0.1", port=8080, debug=True)
