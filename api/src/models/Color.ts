const mongoose = require("mongoose");

export interface ColorInterface {
  name: string,
  hexcode: string,
  pantonecode?: string,
  tags?: string,
}

const ColorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hexcode: {
      type: String,
      required: true,
      unique: true,
    },
    pantonecode: {
      type: String,
      required: false,
    },
    tags: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Color", ColorSchema);
