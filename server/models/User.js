const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto'); //crypto library that comes with Node.

const UserSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'] },
    email: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'] },
    course: { type: String, required: [true, "can't be blank"] },
    specialisation: { type: String, required: [true, "can't be blank"] },
    year: { type: Number, required: [true, "can't be blank"] },
    about: { type: String, required: [true, "can't be blank"] },
    dob: { type: Date, required: [true, "can't be blank"] },
    gender: { type: String, required: [true, "can't be blank"] },
    password: { type: String, required: [true, "can't be blank"] }
}, { timestamps: true });

UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        })
    })
})

UserSchema.methods.comparePassword = function (candidatePassword) {
    const user = this;
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err)
            }
            if (!isMatch) {
                return reject(err)
            }
            resolve(true)
        })
    })
}

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });
mongoose.model('User', UserSchema)
