"""Content models for the API"""
from flask_bcrypt import Bcrypt

from db import cards_collection

bcrypt = Bcrypt()

def get_cards():
    """Function to get the cards data"""
    return cards_collection.find_one({"name": "Flesh Cards"})
