const mongoose = require("mongoose");

export interface MannequinInterface {
  name: string,
  fronturl?: string,
  backurl?: string,
}

const MannequinSchema: MannequinInterface = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fronturl: {
      type: String,
      required: false,
    },
    backurl: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Mannequin", MannequinSchema);
