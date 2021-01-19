import { useState } from 'react';

function BtnUseState() {

  const [count, setCount ] = useState(0);
  // count is the "reactive value"
  // setCount is the "setter"

  return (
    <button onClick={() => setCount(count+1)}>
      {count}
    </button>
  );
}

export default BtnUseState;