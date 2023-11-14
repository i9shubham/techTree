import userModel from '../models/userSchema.js';
import bcrypt from 'bcrypt';
import Joi from 'joi';

const saltRounds = 10;
// import User from '../models/userModel.js'

const validateUserTree = (user) => {
    const JoiSchema = Joi.object({
        username: Joi.string().required(),
        name: Joi.string().required(),
        email: Joi.string()
            .email({ tlds: { allow: false } })
            .required(),
        image: Joi.string().allow(''),
        socials: Joi.object({
            linkedin: Joi.string().uri().label('linkedin').required().allow(''),
            twitter: Joi.string().uri().label('twitter').required().allow(''),
            github: Joi.string().uri().label('github').required().allow(''),
            leetcode: Joi.string().uri().label('leetcode').required().allow(''),
            instagram: Joi.string()
                .uri()
                .label('instagram')
                .required()
                .allow(''),
            website: Joi.string().uri().label('website').required().allow(''),
            other: Joi.string().uri().label('other').required().allow(''),
        }),
    });
    return JoiSchema.validate(user);
};

const functions = {
    signup: async (req, res) => {
        try {
            const { username, email, bio, password } = req.body;
            // console.log(req.body)
            if (!username || !email || !password)
                return res.status(200).send({
                    code: 400,
                    message: 'enter the all fields',
                    success: false,
                });
            const exists = await userModel.findOne({ email });
            if (exists)
                return res.status(200).send({
                    code: 400,
                    message: 'User is already exists please try to login',
                    success: false,
                });

            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const User = new userModel({
                username,
                email,
                bio,
                password: hashedPassword,
            });
            // console.log(User)
            await User.save();
            if (!User) {
                return res.status(200).send({
                    code: 400,
                    message: 'User not created',
                    success: false,
                });
            } else {
                return res.status(200).send({
                    code: 201,
                    message: `User ${User.username} created successfully`,
                    success: true,
                });
            }
        } catch (error) {
            // console.log(error);
            return res.status(500).send({
                code: 500,
                message: 'Internal Server Error',
                success: false,
            });
        }
    },

    login: async (req, res) => {
        try {
            const { username, email } = req.body;
            const userInput = username || email;
            const password = req.body.password;
            if (!userInput || !password) {
                res.json({
                    message: 'Username or email and password are required.',
                });
            }
            const exists = await userModel.findOne({
                $or: [{ username: userInput }, { email: userInput }],
            });
            if (!exists) return res.json({ message: 'please try to signup' });

            const passwordMatch = await bcrypt.compare(
                password,
                exists.password
            );
            if (!passwordMatch) {
                return res.json({ message: 'Incorrect password.' });
            }
            return res.json({ message: 'logged in' });
        } catch (error) {
            res.status(500).send({
                code: 500,
                message: 'Internal Server Error',
                success: false,
            });
        }
    },

    getUserById: async (req, res) => {
        try {
            const username = req.params.username;
            const user = await userModel
                .findOne({ username: username })
                .populate('theme')
                .exec();
            if (user) {
                res.status(200).send({
                    code: 200,
                    message: 'User details getting successfully',
                    docs: user,
                    success: true,
                });
            } else {
                res.status(400).send({
                    code: 400,
                    message: 'There is no user',
                    success: false,
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({
                code: 500,
                message: 'Internal Server Error',
                success: false,
            });
        }
    },

    createTree: async (req, res) => {
        try {
            // const response = validateUserTree(req.body);

            // if (response.error) {
            //     res.status(400).send({
            //         code: 400,
            //         message: 'Invalid data',
            //         error: response.error.details[0].message,
            //         type: 'error',
            //     });
            // } else {
            const exists = await userModel
                .findOne({ email: req.body.email })
                .exec();
            // console.log(exists);
            if (exists) {
                return res.status(400).send({
                    code: 400,
                    message: `Your tree is alredy exists kindly visit to url/${exists.username}`,
                    type: 'error',
                });
            }
            const dataObj = new userModel(req.body);

            await dataObj.save((error, docs) => {
                if (error) {
                    res.status(400).send({
                        code: 400,
                        message: 'error in creating the user tree',
                        error: error,
                        type: 'error',
                    });
                } else if (docs != null) {
                    res.status(201).send({
                        code: 201,
                        message: 'Your Tree created sucessfully',
                        type: 'success',
                    });
                } else {
                    res.status(400).send({
                        code: 400,
                        message: `Tree creation failed please try again`,
                        type: 'error',
                    });
                }
            });
            // }
        } catch (error) {
            console.log(error);
            res.status(500).send({
                code: 500,
                message: 'Internal Server Error',
                success: false,
            });
        }
    },

    changeTheme: async (req, res) => {
        try {
            const user = await userModel.findOneAndUpdate(
                { _id: req.body.id },
                req.body,
                { new: true }
            );
            if (!user || user === null) {
                res.status(400).send({
                    code: 400,
                    message: 'Error in theme chagning',
                    type: 'Error',
                });
            } else {
                res.status(201).send({
                    code: 201,
                    message: 'Theme Successfully changed',
                    type: 'success',
                    docs: user,
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({
                code: 500,
                message: 'Internal Server Error',
                success: false,
            });
        }
    },

    checkUserName: async (req, res) => {
        try {
            const data = await userModel
                .findOne({ username: req.params.username })
                .lean();
            // console.log(data);
            if (!data) {
                console.log('not data');
                res.status(200).send({
                    code: 200,
                    message: 'Username is available',
                    success: true,
                });
            } else {
                console.log('data');
                res.status(200).send({
                    code: 400,
                    message: 'Username is already taken',
                    success: false,
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({
                code: 500,
                message: 'Internal Server Error',
                success: false,
            });
        }
    },
};

export default functions;
