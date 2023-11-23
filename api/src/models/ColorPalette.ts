const mongoose = require("mongoose");

export interface ColorPaletteInterface {
  color_id: string,
  variant_id: string,
}

const ColorPaletteSchema: ColorPaletteInterface = new mongoose.Schema(
  {
    color_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Color',
      required: true,
    },
    variant_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'colors_variants',
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    colors: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Color',
    }],
    variant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'colors_variants',
    }
  },
  { timestamps: true }
);

export default mongoose.model("Colors_palettes", ColorPaletteSchema);
