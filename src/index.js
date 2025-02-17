import "./config.js";
import { app } from "./app.js";
import connectDB from "./db/index.js";

const PORT = process.env.PORT || 3000;
//console.log(process.env.PORT);

connectDB()
  .then()
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });
