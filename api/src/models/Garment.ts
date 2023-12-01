const mongoose = require("mongoose");

export interface GarmentInterface {
    name: string,
    mannequin_id: string,
}

const GarmentSchema: GarmentInterface = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        mannequin_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Mannequin',
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Garment", GarmentSchema);
