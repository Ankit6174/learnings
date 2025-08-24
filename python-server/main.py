# app.py
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Hello from Flask running on Render!"

@app.route('/about')
def about():
    return "this is about!"

@app.route('/contact')
def contact():
    return "this is contact"

@app.route("/getData", methods=['POST'])
def received_data():
    data = request.get_json()
    print("Received from node", data)
    return jsonify({"status": "success", "received": data})

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
