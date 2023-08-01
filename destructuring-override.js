import React from "react";

const App = () => {
  const sayHello = () => console.log('Hello');

  return <Button handleClick={sayHello} />;
};

const Button = ({ handleClick = () => console.log('Default') }) => (
  <button type='button' onClick={handleClick}>
    Button
  </button>
);

export default App;