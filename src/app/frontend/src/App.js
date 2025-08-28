import React, { useState } from 'react';
import Login from './Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        {user ? (
          <div className="welcome-container">
            <h2>¡Bienvenido, {user.name}!</h2>
            <p>Email: {user.email}</p>
            <button onClick={handleLogout} className="logout-btn">
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </header>
    </div>
  );
}

export default App;