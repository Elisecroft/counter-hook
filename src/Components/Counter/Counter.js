import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <div className="counter">
        <label>Choisissez un nombre et appuyez sur Entrée</label>
        <input type="number" onKeyPress={(event) => {if (event.key === 'Enter') { setCount(Number(event.target.value)) }}} />
        <p>Le compteur est  à : {count} </p>
        <button onClick={() => setCount(count + 1)}>
          +1
        </button>
        <button onClick={() => setCount(count - 1)}>
          -1
        </button>
      </div>
    </div>
  );
}

export default Counter;
