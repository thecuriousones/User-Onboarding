import './App.css';
import React, { useState, useEffect } from 'react'
import UserForm from './Form'

function App() {
  return (
    <div className='App'>
      <header><h1>User App</h1></header>

      <UserForm />
    </div>
  );
}

export default App;
