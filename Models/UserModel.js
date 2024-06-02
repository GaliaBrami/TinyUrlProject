import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "",
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    links: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Link'
    }], 
});

export default mongoose.model("users", UserSchema);
