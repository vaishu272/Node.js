import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
});

// collection name = users
const MongoUser = mongoose.model("users", userSchema);

export default MongoUser;
