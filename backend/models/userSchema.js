import mongoose from 'mongoose';

const User = mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
        },
        name: {
            type: String,
            require: true,
        },
        theme: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'theme',
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
        image: {
            type: String,
        },
        socials: [
            {
                _id: false,
                name: String,
                link: String,
            },
        ],
        theme: {
            bg: {
                type: String,
            },
            heading: {
                type: String,
            },
            txt: {
                type: String,
            },
        },
    },
    { versionKey: false }
);

export default mongoose.model('User', User);
