import React, { useState } from 'react';

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setTimeout(() => { // setTimeout is async
      setCount((prevState) => {
        return prevState + 1;
      });
    }, 3000);
  };
  return (
    <>
  <h2>useState "gotcha"</h2>
  <h3>{count}</h3>
  <button type="button" className='btn' onClick={handleClick}>click me</button>
  </>);
};

export default UseStateGotcha;
