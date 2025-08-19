import mongoose from "mongoose";
import 'dotenv/config'; // Load environment variables

export const DBconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB is Connected");
    } catch (error) {
        console.log("DB is Not Connected", error);
    }
}