import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    // Simulación de autenticación exitosa sin necesidad de servidor
    if (formData.email && formData.password) {
      // Para registro, también requerimos el nombre
      if (!isLogin && !formData.name) {
        setMessage('Por favor, ingresa tu nombre');
        return;
      }
      
      // Simular una respuesta exitosa después de un breve retraso
      setMessage(isLogin ? 'Iniciando sesión...' : 'Creando cuenta...');
      
      setTimeout(() => {
        const userData = {
          name: isLogin ? 'Usuario' : formData.name,
          email: formData.email
        };
        
        setMessage(isLogin ? '¡Inicio de sesión exitoso!' : '¡Cuenta creada exitosamente!');
        onLogin(userData);
      }, 1000);
    } else {
      setMessage('Por favor, completa todos los campos');
    }
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
      <p className="toggle-form">
        {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
        <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
          {isLogin ? 'Regístrate aquí' : 'Inicia sesión aquí'}
        </span>
      </p>
    </div>
  );
}

export default Login;