const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Generar JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secret_key', {
    expiresIn: '7d',
  });
};

// Registrar usuario
router.post('/register', async (req, res) => {
  try {
    const { email, password, role = 'user' } = req.body;

    // Validaciones
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Email y contraseña son requeridos' 
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ 
        message: 'La contraseña debe tener al menos 6 caracteres' 
      });
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        message: 'El usuario ya existe' 
      });
    }

    // Crear nuevo usuario
    const user = new User({ email, password, role });
    await user.save();

    // Actualizar último login
    await user.updateLastLogin();

    // Generar token
    const token = generateToken(user._id);

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      token,
      user: { 
        id: user._id, 
        email: user.email, 
        role: user.role,
        createdAt: user.createdAt 
      }
    });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ 
      message: 'Error en el servidor', 
      error: error.message 
    });
  }
});

// Login usuario
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validaciones
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Email y contraseña son requeridos' 
      });
    }

    // Buscar usuario
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ 
        message: 'Credenciales inválidas' 
      });
    }

    // Verificar si el usuario está activo
    if (!user.isActive) {
      return res.status(400).json({ 
        message: 'Cuenta desactivada. Contacte al administrador.' 
      });
    }

    // Verificar password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ 
        message: 'Credenciales inválidas' 
      });
    }

    // Actualizar último login
    await user.updateLastLogin();

    // Generar token
    const token = generateToken(user._id);

    res.json({
      message: 'Login exitoso',
      token,
      user: { 
        id: user._id, 
        email: user.email, 
        role: user.role,
        lastLogin: user.lastLogin 
      }
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ 
      message: 'Error en el servidor', 
      error: error.message 
    });
  }
});

// Verificar token (ruta protegida)
router.get('/verify', auth, async (req, res) => {
  try {
    res.json({
      valid: true,
      user: {
        id: req.user._id,
        email: req.user.email,
        role: req.user.role,
        lastLogin: req.user.lastLogin
      }
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al verificar token' 
    });
  }
});

// Obtener perfil del usuario (ruta protegida)
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener perfil' 
    });
  }
});

// Actualizar perfil del usuario (ruta protegida)
router.put('/profile', auth, async (req, res) => {
  try {
    // Excluir campos que no se pueden actualizar
    const { password, role, ...updateData } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.user._id,
      updateData,
      { new: true, runValidators: true }
    ).select('-password');

    res.json({
      message: 'Perfil actualizado exitosamente',
      user
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al actualizar perfil',
      error: error.message 
    });
  }
});

// Logout (en el cliente se elimina el token)
router.post('/logout', auth, async (req, res) => {
  try {
    // En una implementación más avanzada, podrías invalidar el token
    res.json({ 
      message: 'Sesión cerrada exitosamente' 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al cerrar sesión' 
    });
  }
});

module.exports = router;