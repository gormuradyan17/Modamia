const mongoose = require("mongoose");

export interface ColorInterface {
  name: string,
  hexcode: string,
  pantonecode?: string,
  tags?: string,
  colorVariant?: string,
}

const ColorSchema: ColorInterface = new mongoose.Schema(
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
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  },
  { timestamps: true }
);

export default mongoose.model("Color", ColorSchema);
