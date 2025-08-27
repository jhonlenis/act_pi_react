const express = require('express');
const { auth, requireRole } = require('../middleware/auth');

const router = express.Router();

// Ruta protegida para usuarios autenticados
router.get('/user-data', auth, (req, res) => {
  res.json({
    message: 'Datos protegidos para usuarios autenticados',
    user: req.user,
    timestamp: new Date().toISOString()
  });
});

// Ruta protegida solo para administradores
router.get('/admin-data', auth, requireRole(['admin']), (req, res) => {
  res.json({
    message: 'Datos exclusivos para administradores',
    user: req.user,
    adminData: {
      totalUsers: 150,
      activeSessions: 23,
      systemStatus: 'OK'
    },
    timestamp: new Date().toISOString()
  });
});

// Ruta que puede ser accedida con o sin autenticación
router.get('/public-data', (req, res) => {
  const data = {
    message: 'Datos públicos',
    publicInfo: {
      serviceStatus: 'Online',
      version: '1.0.0'
    }
  };

  // Si el usuario está autenticado, agregar información adicional
  if (req.user) {
    data.userSpecificData = {
      personalized: true,
      userId: req.user._id
    };
  }

  res.json(data);
});

module.exports = router;