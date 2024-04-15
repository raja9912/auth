import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://imgs.search.brave.com/_3djOGzouZ7Q98JMK8xRaulbS59NaPjZT41QC5XCxGM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDgyMzU5/NTEuanBn",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

export default User;
