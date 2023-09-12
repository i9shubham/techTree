import mongoose, { mongo } from 'mongoose';

mongoose.set('strictQuery', false);

const mongoConnection = () => {
    mongoose.connect(
        process.env.MongoURL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            socketTimeoutMS: 60000,
        },
        (err) => {
            if (err) console.log(`An error occured ${err}`);
            console.log('DB connected succesfylly');
        }
    );
};

export default mongoConnection;
