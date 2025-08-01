const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();
const SECRET= 'clave_secreta';
const { body, validationResult } = require('express-validator');


router.post('/register', async (req, res) => {
    const { userName, email, password }= req.body;
    const errores = validarRegistro(email, password);
    if (errores.length > 0) {
        return res.status(400).json({ msg: 'Validación fallida', errores });
    }
    try {
        const existe = await User.findOne({ email });
        if (existe) return res.status(400).json({ msg: 'El correo ya existe' });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ userName, email, password: hashedPassword, 
            active:true, createdAt: new Date(), updatedAt: new Date() });
        await newUser.save();
        res.status(201).json({ msg: 'Usuario registrado correctamente' });
    } catch (err) {
        res.status(500).json({ msg: 'Error al registrar', error: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: 'Email y contraseña son obligatorios' });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });
        const isMatch= await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ msg: 'Contraseña incorrecta' });
        const token = jwt.sign({ id: user._id, email: user.email, SECRET }, 
            SECRET, { expiresIn: '12h' });
            
            res.cookie('token', token, 
                {
                    httpOnly: true,
                    maxAge: 12 * 60 * 60 * 1000, //12h
                });

            res.json({ msg: 'Login exitoso', token, user: { id: user._id, email: user.email } });

        } catch (err) {
            res.status(500).json({ msg: 'Error al iniciar sesión', error: err.message });
        }
    });

router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ msg: 'Sesión cerrada correctamente' });
});

function validarRegistro(email, password) {
  const errores = [];

  if (!email || !email.includes('@')) {
    errores.push('El correo no es válido');
  }

  if (!password || password.length < 6) {
    errores.push('La contraseña debe tener al menos 6 caracteres');
  }

  return errores;
}
    
    module.exports= router;


    /**
 * @swagger
 * /register:
 *   post:
 *     summary: Registro de nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *               - email
 *               - password
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 minLength: 6
 *     responses:
 *       201:
 *         description: Usuario registrado correctamente
 *       400:
 *         description: Validación fallida o usuario existente
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Inicia sesión con email y contraseña
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso con token
 *       401:
 *         description: Contraseña incorrecta
 *       404:
 *         description: Usuario no encontrado
 */

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Cierra la sesión y elimina la cookie del token
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Sesión cerrada correctamente
 */


