import React, { useState } from 'react';

function UseState() {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#000000');

  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle('');
    setColor('#000000');
  };
  return (
    <div className="reducer">
      <h1>useState</h1>
      <form onSubmit={submit}>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="color title..."
        />
        <input
          value={color}
          onChange={(event) => setColor(event.target.value)}
          type="color"
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default UseState;
