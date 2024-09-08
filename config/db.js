import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
        console.log("DB Connected!")
    }).catch((error) => {
        console.log("Error in DB Connection: ", error)
    })
}

export default connectDB;
