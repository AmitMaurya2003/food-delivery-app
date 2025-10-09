import mongoose from "mongoose"; 

export const connectDB = async () => {
    await mongoose.connect(process.env.ATLASDB_URL).then(()=> console.log("DB Connected"));
}