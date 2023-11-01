import mongoose from 'mongoose';

const Theme = mongoose.Schema(
    {
        name: { type: String },
        bgImage: { type: String },
        bio: { type: String },
        button: {
            text: { type: String },
            bg: { type: String },
        },
        font: { type: String },
    },
    {
        versionKey: false,
    }
);

export default mongoose.model('theme', Theme);
