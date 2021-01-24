import { useEffect, useState } from "react";

function BtnEffect() {
  const [count, setCount ] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log('useEffect: NoDep> Page Load')
  },[]);          // no dependencies

  useEffect(() => {
    console.log('useEffect: [count]> Page Load or Click')
  },[count]);     // depends on variable count

  useEffect(() => {
    console.log('useEffect: > Page Load or Click')
    return () => console.log('useEffect{ret}: > Click')
  });             // tear down function

  useEffect(() => {
    console.log('useEffect: NoDep> Page Load')
    return () => console.log('useEffect{ret}: NoDep> (never)')
  },[]);             // tear down function

  //  // Infiniteloop (bad)
  // useEffect(() => {
  //   fetch('foo').then(() => setLoaded(true))
  // })
  
  //  // Fetch data 'loaded' when 'count' changes
  // useEffect(() => {
  //   fetch('foo').then(() => setLoaded(true))
  // }, [count])

  if (count < 2) {
    return (
      <button onClick={() => {
        console.log('BtnEffect Clicked');
        setCount(count+1);
      }}>
        {count}
      </button> 
    );
  } else
    return(<span>Not A Button</span>);
}

export default BtnEffect;