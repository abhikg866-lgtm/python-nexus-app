import express from "express";
import tutorRouter from "./api/tutor.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Python Nexus Backend is running"
  });
});

app.use("/api/tutor", tutorRouter);

app.listen(PORT, () => {
  console.log(`Python Nexus Backend running on port ${PORT}`);
});
