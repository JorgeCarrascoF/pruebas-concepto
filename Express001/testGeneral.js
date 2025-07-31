const mongoose = require('./connections/db');
const AlertConfig = require('./models/alert configuration');
const Comment = require('./models/comment');
const Component = require('./models/component');
const Log = require('./models/log');
const Notification = require('./models/notification');
const Role = require('./models/role');
const User = require('./models/user');

async function runTest() {
    try {
        const role = new Role({ 
            name: 'Administrador', 
            permission: 'full' 
        });
        await role.save();
        
        const user = new User({
            userName: 'Jorge',
            password: '123456',
            roleId: role._id
        });
        await user.save();
        
        const component = new Component({
            name: 'Component001',
            description: 'description component',
            responsibleTeam: 'DevOps',
            thresholdCount: 5,
            userId: user._id
        });
        await component.save();
        
        const log = new Log({
            title: 'Error 500 en login',
            linkSentry: 'https://sentry.io/project/123456',
            project: 'SistemaLogs',
            type: 'unresolved',
            status: 'error',
            platform: 'NodeJS',
            filename: 'auth.js',
            function: 'loginHandler',
            priority: 'high',
            count: 10,
            firstSeen: new Date(),
            lastSeen: new Date(),
            userId: user._id
        });
        await log.save();
        
        const alert = new AlertConfig({
            name: 'Alerta crítica',
            project: Buffer.from('SistemaLogs'),
            environment: 'Producción',
            thresholdCount: 10,
            createBy: 12345,
            createAt: new Date(),
            userId: user._id
        });
        await alert.save();
        
        const notification = new Notification({
            name: 'Notificación nueva',
            project: Buffer.from('SistemaLogs'),
            environment: 'Producción',
            thresholdCount: 2,
            createBy: 12345,
            createAt: new Date(),
            userId: user._id,
            logId: log._id
        });
        await notification.save();
        
        const comment = new Comment({
            comment: 'Este error ocurre en testing con frecuencia',
            userId: user._id,
            logId: log._id
        });
        await comment.save();
        
        console.log('Datos insertados correctamente');} 
    catch (error) 
    {
        console.error('Error al insertar datos:', error);
    } 
    finally 
    {
        mongoose.connection.close();
    }
}

runTest();