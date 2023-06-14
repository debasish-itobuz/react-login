import mongoose from "mongoose";
import env from "dotenv"

env.config()

const connectDatabase = () => {
    console.log(process.env.MONGO_URL);
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectDatabase;
