const mongoose = require("mongoose");

export interface ColorPaletteInterface {
  color_id: string,
  variant_id: string,
}

const ColorPaletteSchema: ColorPaletteInterface = new mongoose.Schema(
  {
    color_id: {
      type: String,
      ref: 'Color',
      required: true,
    },
    variant_id: {
      type: String,
      ref: 'colors_variants',
      required: true,
    },
    order: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Colors_palettes", ColorPaletteSchema);
