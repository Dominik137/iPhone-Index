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

@app.route('/phones', methods=['GET'])
def get_data():
    # Retrieve data from MongoDB
    data = list(collection.find({}))
    
    # Convert ObjectId to strings
    for item in data:
        item['_id'] = str(item['_id'])
    
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
