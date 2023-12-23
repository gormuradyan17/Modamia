const mongoose = require("mongoose");

export interface ColorVariantInterface {
  name: string,
}

const ColorVariantSchema: ColorVariantInterface = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  },
  { timestamps: true }
);

export default mongoose.model("colors_variants", ColorVariantSchema);
