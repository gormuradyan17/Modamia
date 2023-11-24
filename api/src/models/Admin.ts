const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: false,
      min: 3,
    },
    refreshToken: {
        type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", AdminSchema);
