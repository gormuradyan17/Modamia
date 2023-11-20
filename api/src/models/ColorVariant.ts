const mongoose = require("mongoose");

export interface ColorVariantInterface {
  name: string,
}

const ColorVariantSchema: ColorVariantInterface = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("colors_variants", ColorVariantSchema);
