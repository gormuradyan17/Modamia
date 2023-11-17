const mongoose = require("mongoose");

export interface SilhouetteInterface {
  name: string,
  price: string,
  tags?: string,
  type: string,
  orientation: string,
}

const SilhouetteSchema: SilhouetteInterface = new mongoose.Schema(
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
    type: {
      type: String,
      required: true,
    },
    orientation: {
      type: String,
      required: true,
    },
    silhouetteurl: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Silhouette", SilhouetteSchema);
