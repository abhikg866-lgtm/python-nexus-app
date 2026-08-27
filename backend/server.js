import express from "express";
import cors from "cors";
import tutorRouter from "./api/tutor.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tutor", tutorRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Python Nexus Backend is running!"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
