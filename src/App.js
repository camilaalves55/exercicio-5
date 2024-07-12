import React, { createContext, useState } from 'react';
import Login from './components/Login';
import './App.css';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  const loginUser = (userInfo) => {
    setUser(userInfo);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <header className="App-header">
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      <div className="App">
        <Login />
        {user && (
          <div>
            <p>Bem-vindo, {user.name}!</p>
            <button className='botaosair' onClick={logoutUser}>Desconectar</button>
          </div>
        )}
      </div>
    </UserContext.Provider>
    </header>
  );
}

export default App;
