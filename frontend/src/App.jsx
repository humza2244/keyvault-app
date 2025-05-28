import { useState } from 'react';
import './App.css';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    // Here you would typically make an API call to authenticate
    console.log('Logging in with:', { username, password });
    
    // For demonstration purposes
    if (username === 'demo' && password === 'password') {
      // Success - you would navigate to the main app or set auth state
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <div className="draggable" />
      
      {/* Background grid */}
      <div className="background-grid"></div>
      
      {/* Corner line decorations */}
      <div className="line-decoration top-left">
        <div className="line-pattern">
          <div className="line horizontal"></div>
          <div className="line vertical"></div>
          <div className="line diagonal-1"></div>
          <div className="line diagonal-2"></div>
        </div>
      </div>
      
      <div className="line-decoration bottom-right">
        <div className="line-pattern">
          <div className="line horizontal"></div>
          <div className="line vertical"></div>
          <div className="line diagonal-1"></div>
          <div className="line diagonal-2"></div>
        </div>
      </div>
      
      {/* Side decorations */}
      <div className="side-decoration left">
        <div className="vertical-lines">
          <div className="v-line"></div>
          <div className="v-line"></div>
          <div className="v-line"></div>
        </div>
      </div>
      
      <div className="side-decoration right">
        <div className="vertical-lines">
          <div className="v-line"></div>
          <div className="v-line"></div>
          <div className="v-line"></div>
        </div>
      </div>
      
      {/* Top and bottom accent lines */}
      <div className="accent-line top"></div>
      <div className="accent-line bottom"></div>
      
      {/* Floating geometric shapes */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">KEYVAULT</h1>
          
          <form onSubmit={handleLogin} className="login-form">
            <div className="input-field">
              <input 
                type="text" 
                placeholder="USERNAME" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="input-field">
              <input 
                type="password" 
                placeholder="PASSWORD" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <button type="submit" className="login-btn">
              <span>LOGIN</span>
            </button>
          </form>
          
          <div className="register-text">
            New user? <span className="register-link">Create account</span>
          </div>
        </div>
      </div>
    </>
  );
}
