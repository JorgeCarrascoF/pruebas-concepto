const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: String,
    permission: String
});
const Role =mongoose.model('Role', roleSchema);
module.exports = Role;

