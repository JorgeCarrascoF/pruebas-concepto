const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    title: String,
    linkSentry: String,
    project: String,
    type: { type: String, enum: ['solved', 'unresolved'] },
    status: { type: String, enum: ['error', 'warning', 'info'] },
    platform: String,
    filename: String,
    function: String,
    priority: { type: String, enum: ['high', 'medium', 'low'] },
    count: Number,
    firstSeen: Date,
    lastSeen: Date,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

const Log = mongoose.model('Log', logSchema);
module.exports=Log;
