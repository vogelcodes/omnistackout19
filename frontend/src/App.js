import React from 'react';
import './App.css';

import logo from './assets/logo.svg'

function App() {
  return (
    <div className="container">
      <img src={logo} alt="aircnclogo" srcset=""/>
      <div className="content">
        <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para seu time</p>  
      <form>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="Seu melhor e-mail"
        />
        <button className="btn" type="submit">Entrar</button>

      </form>
      </div>
      
      
    </div>
    
  );
}

export default App;
