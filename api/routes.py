"""Module for handling authentication routes"""
import random
from datetime import datetime
from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt

from user_models import create_user, get_user_by_email, \
    login_user, get_user_by_token, set_card_status, set_last_interaction, \
    get_last_interaction
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

@logged.route('/learning/progress', methods = ["GET"])
def module_progress():
    """
    Function calculates the progress for each module
    """
    token = request.args.get('token') # get the token from the request
    user_data = get_user_by_token(token)
    modules_data = user_data['flashcards']['modules_cards']
    modules_progress = []

    for module in modules_data:
        all_cards = len(module['data'])
        all_learnt = 0
        for card in module['data']:
            if card['learned'] == "true":
                all_learnt += 1
        progress_percentage = round((all_learnt / all_cards) * 100, 2)
        modules_progress.append({
            "module_id": module["id"],
            "module_name": module.get("name", f"Module {module['id']}"),
            "progress_percent": progress_percentage
        })

    return jsonify({
        "message": "Progress received successfully",
        "data": modules_progress
    }), 200

@logged.route('/learning/studied', methods = ["GET"])
def modules_studied():
    """
    Function calculates all studied modules
    """
    token = request.args.get('token') # get the token from the request
    user_data = get_user_by_token(token)
    modules_data = user_data['flashcards']['modules_cards']
    module_studied = []

    for module in modules_data:
        all_cards = len(module['data'])
        all_learnt = 0
        for card in module['data']:
            if card['learned'] == "true":
                all_learnt += 1
        module_status = True if all_cards == all_learnt else False
        module_studied.append({
            "module_id": module["id"],
            "module_name": module.get("name", f"Module {module['id']}"),
            "progress_percent": module_status
        })

    return jsonify({
        "message": "Study progress received successfully",
        "data": module_studied
    }), 200

@logged.route('/learning/lastactivity', methods = ["POST"])
def set_activity():
    """Function to set the last activity of the user"""
    token = request.json
    set_last_interaction(token)
    return jsonify({
        "message": "Last activity set successfully"
    }), 200

@logged.route('/learning/lastactivity', methods = ["GET"])
def get_streak():
    """Function to get the last activity of the user"""
    token = request.args.get('token')
    last_int = get_last_interaction(token)
    last_day = last_int.date()
    today = datetime.today().date()
    if last_day == today:
        result = "active"
    elif (today - last_day).days == 1:
        result = "pending"
    else:
        result = "expired"
    return jsonify({
        "message": "Last activity set successfully",
        "data": result
    }), 200

@logged.route('/learning/flashcards', methods = ["GET"])
def available_flashcards():
    """
    Function finds an amount of available flashcards
    """
    token = request.args.get('token') # get the token from the request
    user_data = get_user_by_token(token)
    modules_data = user_data['flashcards']['modules_cards']
    flashcards_available = []

    for module in modules_data:
        all_cards = len(module['data'])
        flashcards_available.append({
            "module_id": module["id"],
            "module_name": module.get("name", f"Module {module['id']}"),
            "cards_amount": all_cards
        })

    return jsonify({
        "message": "Flashcards amount received successfully",
        "data": flashcards_available
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
