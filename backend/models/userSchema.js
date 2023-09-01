import mongoose from "mongoose";

const User = mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true
        },
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        },
        image: {
            type: String
        },
        socials: {
            linkedin: {
                type: String
            },
            twitter: {
                type: String
            },
            github: {
                type: String
            },
            instagram: {
                type: String
            },
            website: {
                type: String
            },
            other: {
                type: String
            }
        }
    }
)

export default mongoose.model('User', User);