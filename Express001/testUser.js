const mongoose = require('./connections/db');
const User = require('./models/user');

async function runTest() {
    const user = new User({
        userName: 'Maria',
        password: '654321',
        roleId: null
    });

    await user.save();
    console.log('Usuario creado:', user);
}

runTest().catch(console.error);
