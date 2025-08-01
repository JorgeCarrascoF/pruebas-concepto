const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    email: {type: String, required: true, unique:true},
    password: String,
    userAvatar: Buffer,
    active: Boolean,
    createdAt: Date,
    updatedAt: Date,
    roleId: {type: mongoose.Schema.Types.ObjectId, ref: 'Role'}
});

const User = mongoose.model('User', userSchema);
module.exports=User;
