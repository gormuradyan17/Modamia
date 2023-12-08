const mongoose = require("mongoose");

export interface GarmentPalettesInterface {
    garment_id: string,
    palette_id: string,
    palette_type: string,
}

const GarmentPalettesSchema: GarmentPalettesInterface = new mongoose.Schema(
    {
        garment_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Garment',
            required: true,
        },
        palette_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'colors_variants',
            required: true,
        },
        palette_type: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("garments_palettes", GarmentPalettesSchema);
