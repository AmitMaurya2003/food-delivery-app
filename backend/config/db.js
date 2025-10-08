import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://amitmauryafzd90:amit2003@cluster0.asv6tqk.mongodb.net/?').then(()=> console.log("DB Connected"));
}