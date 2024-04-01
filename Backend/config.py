from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS
from bson import ObjectId  # Import ObjectId from bson

app = Flask(__name__)
CORS(app)

# Connect to MongoDB server
client = MongoClient("mongodb://localhost:27017/")  # Replace localhost and port if necessary
db = client["iPhoneIndex"]
collection = db["Phones"]

# API routes below