const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: String,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    logId: {type: mongoose.Schema.Types.ObjectId, ref: 'Log'}    

});

const Comment = mongoose.model('Comment', commentSchema);
module.exports=Comment;
