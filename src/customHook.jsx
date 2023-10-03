import React, { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
}

function CustomHook() {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <div className="reducer">
      <h1>Custom Hook</h1>
      <form onSubmit={submit}>
        <input
          {...titleProps}
          type="text"
          placeholder="color title..."
        />
        <input
          {...colorProps}
          type="color"
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default CustomHook;
