"""module for compiling all the backend into one application"""
from flask import Flask
from flask_cors import CORS
from routes import auth
from flask_jwt_extended import JWTManager


app = Flask(__name__) # create a Flask app

app.config.from_pyfile("config.py") # configure the app with the config file

jwt = JWTManager(app) # configure the app with the JWTManager for token authentication

CORS(app) # configure the app with CORS for cross-origin requests

app.register_blueprint(auth, url_prefix="/api/auth") # register the auth blueprint with the app

if __name__ == "__main__":
    app.run(host='localhost', port=3001) # run the app on localhost:3001
