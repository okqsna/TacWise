import React, { useState } from 'react';
import './CardSettings.scss';

function CardSettings() {
  const [numCards, setNumCards] = useState(10);
  const [shuffle, setShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Налаштування збережено:", { numCards, shuffle, repeatMode });
  };

  return (
    <div className="card-settings-container">
      <h1>Налаштування карток</h1>
      <form onSubmit={handleSubmit}>
        <div className="setting">
          <label>Кількість карток</label>
          <input 
            type="number" 
            value={numCards} 
            onChange={(e) => setNumCards(e.target.value)} 
          />
        </div>
        <div className="setting">
          <label>Перемішати картки</label>
          <input 
            type="checkbox" 
            checked={shuffle} 
            onChange={(e) => setShuffle(e.target.checked)} 
          />
        </div>
        <div className="setting">
          <label>Режим повторення</label>
          <input 
            type="checkbox" 
            checked={repeatMode} 
            onChange={(e) => setRepeatMode(e.target.checked)} 
          />
        </div>
        <button type="submit">Зберегти</button>
      </form>
    </div>
  );
}

export default CardSettings;
