import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/components.js'

function App() {
  return(
    <div className = "App">
      <PersonCard
      lastName = {"Doe"}
      firstName = {"Jane"}
      age = {26}
      hair = {"brown"}
    />
      <PersonCard
      lastName = {"Smith"}
      firstName = {"John"}
      age = {45}
      hair = {"Black"}
    />
    </div>
  );
}

export default App;
