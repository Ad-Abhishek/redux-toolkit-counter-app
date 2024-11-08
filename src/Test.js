import React from 'react';
import { useSelector } from 'react-redux';

const Test = () => {
    const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>Test component</h1>
      <h3>The current total count accessed from different component: </h3>
      <h1>{count}</h1>
    </div>
  );
}

export default Test;
