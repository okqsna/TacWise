"""Module for handling authentication routes"""
from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt

from user_models import create_user, get_user_by_email
from aid_models import get_data

auth = Blueprint("auth", __name__)
aid = Blueprint("aid", __name__)
schools = Blueprint("schools", __name__)

bcrypt = Bcrypt()

@auth.route("/register", methods=["POST"])
def register():
    """Function to register a new user"""

    data = request.json # get the request data

    if get_user_by_email(data["email"]):   # check if the user already exists
        return jsonify({"message": "User already exists"}), 400

    token = create_user(data["username"], data["email"], data["password"]) # create a new user
    return jsonify({ # return the response
        "message": "User registered successfully",
        "token": token
    }), 201

@aid.route("/aid", methods=["GET"])
def get_aid_content():
    """Function to get the first aid data"""
    data = get_data() # get the first aid data
    return jsonify({ # return the response
        "message": "Got data successfully",
        "data": data["products"]
    }), 200

@schools.route("/schools", methods=["GET"])
def get_schools_content():
    """Function to get the schools data"""
    data = get_data()
    return jsonify({ # return the response
        "message": "Got data successfully",
        "data": data["schools"]
    }), 200
