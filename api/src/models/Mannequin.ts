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
  },
  { timestamps: true }
);

export default mongoose.model("Mannequin", MannequinSchema);
