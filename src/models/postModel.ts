import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    text: {
        type: String,
        default: ""
    },
    media: {
        type: String,
        default: ""
    },
    likes: {
        type: Array,
        default: []
    },
}, {
    timestamps: true
});

let Dataset = mongoose.models.user || mongoose.model("user", userSchema);
export default Dataset;