"""module for the user model"""
from datetime import timedelta, datetime
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token

from db import users_collection
from content_models import get_cards


bcrypt = Bcrypt() # create an instance of the Bcrypt class

def create_user(fname, lname, email, about, password):
    """Function to create a new user"""
    hashed_pw = bcrypt.generate_password_hash(password).decode("utf-8") # hash the password

    # create an access token
    access_token = create_access_token(identity=email, expires_delta=timedelta(days=7))

    cards = get_cards() # get the cards from the content model

    del cards["_id"]

    user = {
        "first name": fname,
        "last name": lname,
        "email": email,
        "about": about,
        "password": hashed_pw,
        "token": access_token,
        "flashcards": cards,
        "last_interaction": None,
        "streak": 0,
    }

    required_fields = ["first name", "last name", "email", "about", "password", "token"]
    missing = [field for field in required_fields if field not in user]

    if missing:
        return f"Missing fields: {', '.join(missing)}"

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

    users_collection.update_one(
    {"email": email},                    # filter
    {"$set": {"token": access_token}}    # update
)
    return access_token

def get_user_by_token(token):
    """
    Function to get user by their token
    """
    return users_collection.find_one({"token": token})


def set_card_status(data):
    """Function to set the status of a card"""
    users_collection.update_one(
    {
        "token": data['token']  # your actual token string
    },
    {
        "$set": {
            "flashcards.modules_cards.$[mod].data.$[card].learned": "true"
        }
    },
    array_filters=[
        {"mod.id": int(data['module'])},
        {"card.id": int(data['card'])}
    ]
)

def set_last_interaction(token):
    """Function to set the last interaction of a user"""
    today = datetime.today()
    user = get_user_by_token(token)
    last_day = user["last_interaction"]
    streak = user["streak"]
    if last_day is None:
        users_collection.update_one(
        {"token": token},
        {"$set": {"streak": 1}})
    elif (today - last_day).days == 1:
        users_collection.update_one(
        {"token": token},
        {"$set": {"streak": streak+1}})
    elif (today - last_day).days > 1:
        users_collection.update_one(
        {"token": token},
        {"$set": {"streak": 0}})
    users_collection.update_one(
    {"token": token},
    {"$set": {"last_interaction": today}})

def get_last_interaction(token):
    """Function to get the last interaction of a user"""
    user = get_user_by_token(token)
    if not user:
        return None
    last_interaction = user["last_interaction"]
    streak = user["streak"]
    return last_interaction, streak
