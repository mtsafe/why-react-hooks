import { useRef } from 'react';

function BtnUseRef() {
  const count = useRef(0);

  const myBtn = useRef(null);
  const clickIt = () => myBtn.current.click();

  return (
    <div>
      <button onClick={() => {
        count.current++;
        console.log("BtnUseRef: "+count.current);
      }}>
        {count.current}
      </button>
      <button ref={myBtn}>MT</button>
    </div>
  );
}

export default BtnUseRef;