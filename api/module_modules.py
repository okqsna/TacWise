"""This module contains the functions that interact
with the first aid data in the database"""
from flask_bcrypt import Bcrypt

from db import modules_collection


bcrypt = Bcrypt() # create an instance of the Bcrypt class

def get_modules_data():
    """Function to get data of modules"""
    name = "modules"
    data = modules_collection.find_one({"name": name})
    return data
