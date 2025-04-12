"""module for the user model"""
from datetime import timedelta
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token

from db import users_collection


bcrypt = Bcrypt() # create an instance of the Bcrypt class

def create_user(fname, lname, email, about, password):
    """Function to create a new user"""
    hashed_pw = bcrypt.generate_password_hash(password).decode("utf-8") # hash the password

    # create an access token
    access_token = create_access_token(identity=email, expires_delta=timedelta(days=7))

    user = {
        "first name": fname,
        "last name": lname,
        "email": email,
        "about": about,
        "password": hashed_pw,
        "token": access_token
    }

    required_fields = ["first name", "last name", "email", "about", "password", "token"]
    missing = [field for field in required_fields if field not in user]

    if missing:
        return "Missing fields: {', '.join(missing)}"

    if not isinstance(user["password"], str) or len(user["password"]) < 6:
        return "Password must be at least 6 characters"

    users_collection.insert_one(user) # insert the user into the database
    return access_token

def get_user_by_email(email):
    """Function to get a user by email"""
    return users_collection.find_one({"email": email})


def login_user(email, password):
    """Function to login a user"""
    user = get_user_by_email(email) # get the user by email
    if not user: # check if the user exists
        return "User does not exist"

    if not bcrypt.check_password_hash(user["password"], password):
                                    # check if the password is correct
        return "Invalid password"

    # create an access token
    access_token = create_access_token(identity=email, expires_delta=timedelta(days=7))

    return access_token

def get_user_by_token(token):
    """
    Function to get user by their token
    """
    return users_collection.find_one({"token": token})
