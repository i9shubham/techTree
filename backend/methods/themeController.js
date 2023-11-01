import themeModel from '../models/themeSchema.js';

export const getTheme = async (req, res) => {
    try {
        const data = await themeModel.findOne({ _id: req.params.id });
        if (!data) {
            res.status(400).send({
                code: 400,
                message: 'There is no such theme',
                success: false,
            });
        } else {
            res.status(200).send({
                code: 200,
                meesage: 'Theme getting successfully',
                success: true,
                data: data,
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
};

export const addTheme = async (req, res) => {
    try {
        const data = new themeModel(req.body);
        const response = await data.save();
        if (!response) {
            res.status(400).send({
                code: 400,
                message: 'There is no such theme',
                success: false,
            });
        } else {
            res.status(200).send({
                code: 200,
                meesage: 'Theme getting successfully',
                success: true,
                data: data,
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
};
