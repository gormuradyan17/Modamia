const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    shopify_id: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
      min: 3,
    },
    refreshToken: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false
    },
    code: {
      type: String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
