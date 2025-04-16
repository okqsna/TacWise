"""Module for handling authentication routes"""
from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
import random

from user_models import create_user, get_user_by_email, \
    login_user, get_user_by_token, set_card_status
from aid_models import get_data
from content_models import get_modules_data

auth = Blueprint("auth", __name__)
aid = Blueprint("aid", __name__)
logged = Blueprint("logged", __name__)
content = Blueprint("content", __name__)

bcrypt = Bcrypt()

@auth.route("/register", methods=["POST"])
def register():
    """Function to register a new user"""

    data = request.json # get the request data

    if get_user_by_email(data["email"]):   # check if the user already exists
        return jsonify({"message": "User already exists"}), 400

    # create a new user
    result = create_user(data["fname"], data["lname"], data["email"],\
                        data["about"], data["password"])
    if "Missing fields" in result or "Password must" in result:
        return jsonify({"error": result}), 400

    token = result # get the access token

    return jsonify({ # return the response
        "message": "User registered successfully",
        "token": token
    }), 201

@auth.route("/login", methods=["POST"])
def login():
    """Function to login a user"""
    data = request.json

    result = login_user(data["email"], data["password"])

    if "User does not exist" in result or "Invalid password" in result:
        return jsonify({"error": result}), 400
    # create an access token
    token = result
    return jsonify({ # return the response
        "message": "User logged in successfully",
        "token": token
    }), 200

@aid.route("/aid", methods=["GET"])
def get_aid_content():
    """Function to get the first aid data"""
    data = get_data() # get the first aid data
    return jsonify({ # return the response
        "message": "Got data successfully",
        "data": data["products"]
    }), 200

@logged.route("/user", methods=["GET"])
def get_user():
    """Function to get the user data"""
    token = request.args.get('token') # get the token from the request
    if not token: # check if the token is present
        return jsonify({"error": "Token not provided"}), 400
    data = get_user_by_token(token) # get the user by token
    if not data: # check if the user exists
        return jsonify({"error": "User does not exist"}), 400
    data["_id"] = str(data["_id"]) # convert the ObjectId to string
    return jsonify({ # return the response
        "message": "Got data successfully",
        "data": data
    }), 200

@logged.route("/learning", methods=["GET"])
def get_cards():
    """function to get the learning cards data"""
    token = request.args.get('token') # get the token from the request
    module_id = request.args.get('id') # get the id from the request
    n = request.args.get('n') # get the n from the request
    all_mode = request.args.get('mode') # get the mode from the request

    user = get_user_by_token(token) # get the user by token

    if not user: # check if the user exists
        return jsonify({"error": "User does not exist"}), 400

    cards = user["flashcards"]['modules_cards']

    for c in cards:
        if c['id'] == int(module_id):
            cards = c
            break

    cards = cards["data"]

    if all_mode == "false":
        # print(cards)
        cards = [c for c in cards if c["learned"] == "false"]

    cards = random.choices(cards, k=int(n)) # get n random cards

    return jsonify({ # return the response
        "message": "Got data successfully",
        "data": cards
    }), 200


@logged.route("/learning/setstatus", methods=["POST"])
def set_status():
    """Function to set the status of a card"""
    data = request.json
    set_card_status(data)
    return jsonify({ # return the response
        "message": "Set data successfully",
    }), 200

@content.route("/modules", methods=["GET"])
def get_modules():
    """Function to get the data of the modules"""
    data = get_modules_data() # get data of the modules
    data["_id"] = str(data["_id"])
    return jsonify({ # return the response
        "message": "Got data successfully",
        "data": data['modules']
    }), 200
