import React from 'react'; /* ADIM 0 */
import { useState } from 'react';

export default function Input() {
  const [state, setState] = useState('');
  /* ADIM 1 */

  const inputuDeğiştir = (evt) => {
    setState(evt.target.value);
  };
  const reset = () => {
    setState('');
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: state.length > 10 ? 'crimson' : 'royalblue' /* ADIM 2 */,
  };

  return (
    <div className="widget-input container">
      <h2>Input</h2>
      <div data-testid="output" style={stil}>
        {state.toUpperCase()}
      </div>

      <div>
        <input
          data-testid="input"
          type="text"
          onChange={inputuDeğiştir}
          value={state}
        />
        <button id="resetInput" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
