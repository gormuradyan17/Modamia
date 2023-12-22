const mongoose = require("mongoose");

export interface PrintInterface {
  name: string,
  price: string,
  tags?: string,
  highresurl?: string,
  previewurl?: string,
}

const PrintSchema: PrintInterface = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tags: {
      type: String,
      required: false,
    },
    highresurl: {
      type: String,
      required: false,
    },
    previewurl: {
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

export default mongoose.model("Print", PrintSchema);
