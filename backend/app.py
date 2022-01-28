from matplotlib import image
import flask
from flask import Flask, Response
from flask_cors import CORS
import cv2
import numpy as np
import mediapipe as mp
from cvzone.SelfiSegmentationModule import SelfiSegmentation
from PIL import Image
import re
import base64
import io


app = Flask(__name__)
CORS(app)

def help(url):
    imgstr = re.search(r'base64,(.*)', url).group(1)
    image_bytes = io.BytesIO(base64.b64decode(imgstr))
    im = Image.open(image_bytes)
    img = np.array(im)
    img = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
    segmentor = SelfiSegmentation()
    imgOut = segmentor.removeBG(img,(255,255,255),threshold=0.83)
    imgOut = np.array(imgOut)
    imgOut = Image.fromarray(imgOut)
    imgOut = imgOut.convert("RGBA")
    datas = imgOut.getdata()
    newData = []
    for item in datas:
        if item[0] == 255 and item[1] == 255 and item[2] == 255:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
    imgOut.putdata(newData)
    imgOut = np.array(imgOut)
    _, imagebytes = cv2.imencode('.png', imgOut)
    s = base64.b64encode(imagebytes)
    return s
    # cv2.imshow("img",imgOut)
    # cv2.waitKey(0)
    # cv2.destroyAllWindows()
    # ret, buffer = cv2.imencode('.jpg',imgOut)
    # frame = buffer.tobytes()
    # yield (b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
    

@app.route('/')
def index():
    return "<h1>Hello World</h1>"

@app.route('/erase',methods=["POST"])
def erase():
    json = flask.request.json
    return Response(help(json["img"]),mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__=="__main__":
    app.run(debug=True)