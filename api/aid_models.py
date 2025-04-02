"""This module contains the functions that interact
with the first aid data in the database"""
from flask_bcrypt import Bcrypt

from db import aid_collection


bcrypt = Bcrypt() # create an instance of the Bcrypt class

def get_data():
    """Function to get the first aid data"""
    name = "first aid"
    data = aid_collection.find_one({"name": name})
    return data
