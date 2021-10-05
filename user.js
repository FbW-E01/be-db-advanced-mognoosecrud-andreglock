import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: { type: String, minlength: 8 },
    role: { type: String, enumValues: ["User", "Admin", "Editor"] }
})

export const User = new mongoose.model("users", userSchema);