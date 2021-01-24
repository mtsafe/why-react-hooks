import { useEffect, useState } from "react";

function BtnEffect() {
  const [count, setCount ] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    alert('useEffect Hello! componentDidMount')
  },[]);          // no dependencies

  useEffect(() => {
    alert('useEffect Hello! componentDidUpdate')
  },[count]);     // depends on variable count

  useEffect(() => {
    alert('useEffect Hello! componentSomething')
    return () => alert('useEffect Hello! componentWillUnmount')
  });             // tear down function

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
      <button onClick={() => setCount(count+1)}>
        {count}
      </button> 
    );
  } else
    return(<span>Not A Button</span>);
}

export default BtnEffect;