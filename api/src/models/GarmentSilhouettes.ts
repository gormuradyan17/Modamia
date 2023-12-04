const mongoose = require("mongoose");

export interface GarmentSilhouetteInterface {
    garment_id: string,
    silhouette_id: string,
    silhouetteType: string,
}

const GarmentSilhouetteSchema: GarmentSilhouetteInterface = new mongoose.Schema(
    {
        garment_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Garment',
            required: true,
        },
        silhouette_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Silhouette',
            required: true,
        },
        silhouetteType: {
            type: String,
            required: true,
        },
        order: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("garments_silhouettes", GarmentSilhouetteSchema);
