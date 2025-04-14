"""mongoDB connection and collection"""
from pymongo import MongoClient

from config import MONGO_URL

client = MongoClient(MONGO_URL)

#users db
db_users = client["db-users"]

users_collection = db_users["users"]

#schools and aid db
db_additional = client["db-additional"]

aid_collection = db_additional["aid"]

schools_collection = db_additional["schools"]

#content db
db_contents = client["db-contents"]

cards_collection = db_contents["flesh_cards"]

modules_collection = db_contents["modules"]
