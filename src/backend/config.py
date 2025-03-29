from dotenv import load_dotenv
import os

# Load variables from .env file
load_dotenv()

# Access variables
MONGO_URL = os.getenv("MONGO_URL")
