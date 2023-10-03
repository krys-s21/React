import React, { useReducer } from 'react';

function UseReducer() {
  const [checked, setChecked] = useReducer((checkedValue) => !checkedValue, false);
  return (
    <div className="reducer">
      <h1>useReducer</h1>
      <input id="input" type="checkbox" value={checked} onChange={setChecked} />
      <label htmlFor="input">
        {checked ? 'checked' : 'not checked'}
      </label>
    </div>
  );
}

export default UseReducer;
