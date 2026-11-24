import mongoose from 'mongoose'
import bcrypt, { genSalt } from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

userSchema.pre('save', async function (next) {

    // if passoword is not change leave it
    if (!this.isModified('password')) return next();

    // add hash
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)

})

// method to compare password
userSchema.methods.comparePassword = function (inputPassword) {
    return bcrypt.compare(inputPassword, this.password)
}

const user = mongoose.model('User', userSchema)

export default user;



