import mongoose from 'mongoose';

const Theme = mongoose.Schema(
    {
        name: String,
        bgImage: String,
        bio: String,
        button: {
            text: String,
            bg: String,
        },
        font: string,
    },
    {
        versionKey: false,
    }
);

export default mongoose.model('Theme', Theme);
