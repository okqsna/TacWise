"""mongoDB connection and collection"""
from pymongo import MongoClient
from config import MONGO_URL

client = MongoClient(MONGO_URL)

db_users = client["db-users"]

users_collection = db_users["users"]
