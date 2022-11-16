import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoutes.js";
import postRoute from "./routes/postRoute.js";
import uploadRoute from "./routes/uploadRoute.js";
import cors from "cors";
// routes
const app = express();

app.use(express.static("public"));
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  res.send("just checking");
});

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 5000;

const CONNECTION = process.env.MONGO_DB;
mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Listening at Port ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/posts", postRoute);
app.use("/upload", uploadRoute);
