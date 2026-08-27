import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Python Nexus Backend is running!"
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
