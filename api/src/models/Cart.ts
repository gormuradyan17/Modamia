const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        details: {
            type: JSON,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Cart", CartSchema);
