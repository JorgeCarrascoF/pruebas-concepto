const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();
const SECRET= 'clave_secreta';

router.post('/register', async (req, res) => {
    const { userName, password }= req.body;
    try {
        const existe = await User.findOne({ userName });
        if (existe) return res.status(400).json({ msg: 'El usuario ya existe' });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ userName, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ msg: 'Usuario registrado correctamente' });
    } catch (err) {
        res.status(500).json({ msg: 'Error al registrar', error: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    try {
        const user = await User.findOne({ userName });
        if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });
        const isMatch= await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ msg: 'Contraseña incorrecta' });
        const token = jwt.sign({ id: user._id, userName: user.userName }, 
            SECRET, { expiresIn: '12h' });
            res.json({ token, user: { id: user._id, userName: user.userName } });
        } catch (err) {
            res.status(500).json({ msg: 'Error al iniciar sesión', error: err.message });
        }
    });
    
    module.exports= router;
