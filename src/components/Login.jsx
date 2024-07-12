import React, { useState, useContext } from 'react';
import { UserContext } from '../App';

function Login() {
  const [name, setName] = useState('');
  const { loginUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      loginUser({ name });
      setName('');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
