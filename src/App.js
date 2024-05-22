import React, { useState } from 'react';
import './App.css';

function GeradorDeSenha() {
  const [sliderValue, setSliderValue] = useState(15);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';

  const generatePassword = () => {
    let pass = '';
    for (let i = 0, n = charset.length; i < sliderValue; ++i) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setGeneratedPassword(pass);
    setIsPasswordVisible(true);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(generatedPassword);
    alert("Senha copiada com sucesso!");
  };

  return (
    <div className="App">
      <img className="logo" src='../logo.png' alt="Gerador senha logo" />

      <div className="container-input">
        <span>Tamanho <span id="valor">{sliderValue}</span> caracteres</span>
        <input
          id="slider"
          className="slider"
          type="range"
          min="5"
          max="25"
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
        />

        <button id="button" className="button-cta" onClick={generatePassword}>
          Gerar senha
        </button>
      </div>

      {isPasswordVisible && (
        <div
          id="container-password"
          className="container-password"
          onClick={copyPassword}
        >
          <span className="title">Sua senha gerada foi:</span>
          <span id="password" className="password">{generatedPassword}</span>
          <span className="tooltip">Clique na senha para copiar. 👆</span>
        </div>
      )}
    </div>
  );
}

export default GeradorDeSenha;
