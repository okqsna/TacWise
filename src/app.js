const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors()); // Allow all origins (for development)

app.listen(3000, () => console.log("Server running on port 5000"));
