const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    userAvatar: Buffer,
    password: String,
    roleId: {type: mongoose.Schema.Types.ObjectId, ref: 'Role'}
});

const User = mongoose.model('User', userSchema);
module.exports=User;
