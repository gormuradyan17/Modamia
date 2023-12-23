const mongoose = require("mongoose");

export interface PrintVariantInterface {
  name: string,
}

const PrintVariantSchema: PrintVariantInterface = new mongoose.Schema(
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

export default mongoose.model("prints_variants", PrintVariantSchema);
