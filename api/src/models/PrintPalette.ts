const mongoose = require("mongoose");

export interface PrintPaletteInterface {
  print_id: string,
  variant_id: string,
}

const PrintPaletteSchema: PrintPaletteInterface = new mongoose.Schema(
  {
    print_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Print',
      required: true,
    },
    variant_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'prints_variants',
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    prints: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Print',
    }],
    variant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'prints_variants',
    }
  },
  { timestamps: true }
);

export default mongoose.model("Prints_palettes", PrintPaletteSchema);
