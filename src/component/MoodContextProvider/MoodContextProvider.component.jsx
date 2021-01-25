import { createContext, useContext } from "react";

//  // Context

// moods object to be shared
const moods = {
  happy: '😃',
  sad: '😭'
}
// create a context
const MoodContext = createContext(moods);
// use a context provider to scope the happy mood there
// any child component can inherit that value without
// needing to pass props


//  // Context Provider
function MoodContextProvider(props) {
  return (
    <MoodContext.Provider value={moods.happy}>
      <MoodEmoji />
    </MoodContext.Provider>
  );
}

//  // Context Consumer Hook

function MoodEmoji() {
  const mood = useContext(MoodContext);
  // consume the value from the nearest parent provider

  return <p>{ mood }</p>

  // The useContext hook is a cleaner replacement for
  // the consumer:
  // return <MoodContext.Consumer>
  // </MoodContext.consumer>
}

export default MoodContextProvider;