
import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("MongoDB connected")
    })
    await mongoose.connect(`mongodb+srv://puneeth:puneeth@todo-next.qcsqp.mongodb.net/?retryWrites=true&w=majority&appName=todo-next`)
}

export default connectDB;