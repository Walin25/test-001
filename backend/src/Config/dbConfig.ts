import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('DB Connected');
    } catch (err) {
        console.error(err);
    }
};

export default connectDB;
