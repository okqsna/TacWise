"""module for the user model"""
from datetime import timedelta
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token
from db import users_collection


bcrypt = Bcrypt() # create an instance of the Bcrypt class

def create_user(username, email, password):
    """Function to create a new user"""
    hashed_pw = bcrypt.generate_password_hash(password).decode("utf-8") # hash the password

    # create an access token
    access_token = create_access_token(identity=email, expires_delta=timedelta(days=7))

    user = {
        "username": username,
        "email": email,
        "password": hashed_pw,
        "token": access_token
    }

    users_collection.insert_one(user) # insert the user into the database
    return access_token

def get_user_by_email(email):
    """Function to get a user by email"""
    return users_collection.find_one({"email": email})
