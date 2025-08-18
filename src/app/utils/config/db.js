import mongoose from "mongoose";

export const DBconnection = async ()=> {

    try {
        await mongoose.connect(process.env.THE_URI);
        console.log("DB is Connected");
        
    } catch (error) {
        console.log("DB is Not Connected",error);
        
    }
}