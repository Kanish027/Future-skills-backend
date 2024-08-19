import "dotenv/config";
import express from "express";
import databaseConnection from "./database/connectDatabase.js";
import CardRouter from "./routes/CardRoutes.js";
import cors from "cors";

const app = express();
databaseConnection();

app.use(express.json());
app.use(cors());
app.use("/api/v1", CardRouter);

app.get("/ping", (req, res) => {
  res.send("Server is working");
});

app.listen(5000, () => {
  console.log(`Server is listening on PORT ${process.env.PORT}`);
});
