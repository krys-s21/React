import React, { useRef } from 'react';

function UseRef() {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = '';
    hexColor.current.value = '';
  };
  return (
    <div className="reducer">
      <h1>useRef</h1>
      <form onSubmit={submit}>
        <input ref={txtTitle} type="text" placeholder="color title..." />
        <input ref={hexColor} type="color" />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default UseRef;
