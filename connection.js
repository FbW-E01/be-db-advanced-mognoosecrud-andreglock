import mongoose from "mongoose";

export async function Connect(database) {
    const connectionString = `mongodb://mongoUser:password@localhost:27017/${database}`;
    await mongoose.connect(connectionString);
}

export async function Disconnect () {
    await mongoose.disconnect();
}