const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Archivo para almacenar usuarios (simulando una base de datos)
const usersFile = path.join(__dirname, 'users.json');

// Leer usuarios desde el archivo
const readUsers = () => {
  try {
    const data = fs.readFileSync(usersFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Guardar usuarios en el archivo
const saveUsers = (users) => {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
};

// Ruta de login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  // Validar que se enviaron los datos necesarios
  if (!email || !password) {
    return res.status(400).json({ message: 'Email y contraseña son requeridos' });
  }
  
  const users = readUsers();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    res.json({ 
      success: true, 
      message: 'Login exitoso',
      user: { id: user.id, email: user.email, name: user.name }
    });
  } else {
    res.status(401).json({ 
      success: false, 
      message: 'Credenciales inválidas' 
    });
  }
});

// Ruta de registro
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  
  // Validar que se enviaron los datos necesarios
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Nombre, email y contraseña son requeridos' });
  }
  
  const users = readUsers();
  
  // Verificar si el usuario ya existe
  if (users.some(u => u.email === email)) {
    return res.status(400).json({ message: 'El usuario ya existe' });
  }
  
  // Crear nuevo usuario
  const newUser = {
    id: Date.now(),
    name,
    email,
    password
  };
  
  users.push(newUser);
  saveUsers(users);
  
  res.json({ 
    success: true, 
    message: 'Usuario registrado exitosamente',
    user: { id: newUser.id, email: newUser.email, name: newUser.name }
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});