const express = require("express");
const { sequelize, connectMongo } = require("./config/db");

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("API is running 🚀"));

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL connected");
    await connectMongo();
    app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
  } catch (err) {
    console.error("❌ DB error:", err.message);
  }
};

start();
