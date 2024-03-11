// backend/index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sampleData = require("./sampleData");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is up and running!");
});

app.get("/sampleData", (req, res) => {
  res.json(sampleData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
