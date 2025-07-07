import React, { useState } from 'react';

const frasesDesculpas = [
  "O problema está funcionando na minha máquina.",
  "Parece um erro de configuração do ambiente.",
  "Acho que é cache, tenta limpar e rodar de novo.",
  "Essa parte do sistema foi feita por outro desenvolvedor.",
  "Isso nunca aconteceu antes.",
  "Vou investigar e te retorno.",
  "Pode ser algum problema de permissão.",
  "O servidor estava instável quando testei.",
  "Preciso de mais informações para reproduzir o bug.",
  "Em produção funciona diferente do ambiente de testes.",
];

export const DesculpaGenerator: React.FC = () => {
  const [desculpa, setDesculpa] = useState<string>('');

  const gerarDesculpa = () => {
    const index = Math.floor(Math.random() * frasesDesculpas.length);
    setDesculpa(frasesDesculpas[index]);
  };

  return (
    <div style={{ textAlign: 'center', margin: '2em' }}>
      <button onClick={gerarDesculpa} style={{ padding: '1em 2em', fontSize: '1.2em', cursor: 'pointer' }}>
        Gerar Desculpa
      </button>
      <div style={{ marginTop: '2em', minHeight: '2em', fontSize: '1.3em', fontWeight: 'bold' }}>
        {desculpa}
      </div>
    </div>
  );
};