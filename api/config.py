"""module to store the configuration variables for the backend"""
import os
import secrets
from dotenv import load_dotenv


load_dotenv()  # Load environment variables from .env file

MONGO_URL = os.getenv("MONGO_URL") # get the MONGO_URL

JWT_SECRET_KEY = secrets.token_hex(32) # generate a random secret key for the JWTManager
