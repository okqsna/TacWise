"""Content models for the API"""
from flask_bcrypt import Bcrypt

from db import cards_collection, modules_collection

bcrypt = Bcrypt()

def get_cards():
    """Function to get the cards data"""
    name = "Flesh Cards"
    return cards_collection.find_one({"name": name})


def get_modules_data():
    """Function to get data of modules"""
    name = "Modules information"
    data = modules_collection.find_one({"name": name})
    return data
