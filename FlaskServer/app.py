from flask import Flask
from flask_cors import CORS
from flask import request
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from helper import*
import json
import base64

# Use a service account
cred = credentials.Certificate('vandykey.json')
firebase_admin.initialize_app(cred)
db = firestore.client()
app = Flask(__name__)
CORS(app)
options = {"model": "weights/yolov2-tiny.cfg",
           "load": 21900,
           "threshold":0.05,
           "gpu": 0}
tfnet2 = TFNet(options)
tfnet2.load_from_ckpt()

@app.route("/", methods=['GET'])
def hello():
    return "HELLO ERICK!"

@app.route("/updateUI", methods=['POST'])
def updateUI():
    my_dict = json.loads(request.data)
    label_arr = training(my_dict['foo'], tfnet2)
    renderUI(label_arr)
    return "SUCCESS!!!"

app.run(host='0.0.0.0')