import mongoose from "mongoose";
import "../config.js";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    //console.log(`DATABASE URI ->>>>>>> ${process.env.MONGODB_URI}`);
    //const connectionInstance = await mongoose.connect(
    //  ` ${process.env.MONGODB_URI}/${DB_NAME} `
    //);

    const connectionInstance = await mongoose.connect(
      process.env.MONGODB_URI
      //{
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
      //}
    );
    console.log(
      ` \n MongoDB connected! DB host:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(" MongoDB connect not done ", error);
    process.exit(1);
  }
};

export default connectDB;
