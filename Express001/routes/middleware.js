const jwt = require('jsonwebtoken');
const SECRET = 'clave_secreta';

function authMiddleware(req, res, next) {
  const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

  if (!token) return res.status(401).json({ msg: 'Token no proporcionado' });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ msg: 'Token inválido o expirado' });
  }
}

module.exports = authMiddleware;
