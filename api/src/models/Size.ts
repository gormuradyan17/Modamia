const mongoose = require("mongoose");

export interface SizeInterface {
  name: string,
  fronturl?: string,
  backurl?: string,
}

const SizeSchema: SizeInterface = new mongoose.Schema(
  {
    size: {
      type: String,
      required: true,
    },
    bust_cm: {
      type: String,
      required: false,
    },
    waist_cm: {
      type: String,
      required: false,
    },
    hips_cm: {
      type: String,
      required: false,
    },
    height_cm: {
      type: String,
      required: false,
    },
    bust_in: {
      type: String,
      required: false,
    },
    waist_in: {
      type: String,
      required: false,
    },
    hips_in: {
      type: String,
      required: false,
    },
    height_in: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Size", SizeSchema);
