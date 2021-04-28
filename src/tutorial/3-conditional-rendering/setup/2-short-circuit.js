import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, setText]=useState('')
  return(<>
  {text || <h2> hola</h2>}
  </>)
};

export default ShortCircuit;
