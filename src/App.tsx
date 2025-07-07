import React from 'react';
import { DesculpaGenerator } from './components/DesculpaGenerator';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '2em' }}>Gerador de Desculpas do Programador</h1>
      <DesculpaGenerator />
    </div>
  );
}

export default App;