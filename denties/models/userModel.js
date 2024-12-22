import { Schema, model } from "mongoose";

const userSchema = new Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phoneNo: {type: String, required: true, unique: true},
    referralCode: {type: String}
})

const user = new model("users", userSchema)

export {user}