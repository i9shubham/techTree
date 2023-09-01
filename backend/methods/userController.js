import userSchema from '../models/userSchema.js';
import bcrypt from 'bcrypt';
const saltRounds = 10;
// import User from '../models/userSchema.js'

const functions = {
    signup: async (req, res) => {
        try {
            const { username, name, email, password } = req.body;
            // console.log(req.body)
            if (!username || !name || !email || !password)
                res.json({ message: 'enter the all fields' });
            const exists = await userSchema.findOne({ email });
            if (exists)
                return res.json({
                    message: 'User is already exists please try to login',
                });

            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const User = new userSchema({
                username,
                name,
                email,
                password: hashedPassword,
            });
            // console.log(User)
            await User.save();
            if (!User) {
                res.json({ message: 'User not created' });
            }
            res.json(`User ${User.username} created successfully`);
        } catch (error) {
            // console.log(error);
            res.status(500).send({
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
            const exists = await userSchema.findOne({
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
            const user = await userSchema.findOne({ _id: req.params.id }).exec();
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
            res.status(500).send({
                code: 500,
                message: 'Internal Server Error',
                success: false,
            });
        }
    },
};

export default functions;
