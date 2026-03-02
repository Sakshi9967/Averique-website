const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Sample product API
app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Divine Brass Lamp",
      price: 799,
      image: "images/lamp.jpg"
    },
    {
      id: 2,
      name: "Wooden Wall Decor",
      price: 1299,
      image: "images/wall.jpg"
    },
    {
      id: 3,
      name: "Spiritual Frame Art",
      price: 999,
      image: "images/frame.jpg"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});