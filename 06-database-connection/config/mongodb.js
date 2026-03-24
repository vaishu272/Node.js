import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected ✅");
  } catch (err) {
    console.error("Mongo Error ❌", err);
    process.exit(1);
  }
};

export default connectMongo;
