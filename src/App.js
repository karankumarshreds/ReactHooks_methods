import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hooks from './Components/hook'
import Toggle from './Components/toggler'
import SimpleFormHook from './Components/hook2';
import SWMovies from './Components/useEffect/SWMovies';

function App() {
  return (
    <div className="App">
      {/* <Hooks />
      <Toggle />
      <SimpleFormHook /> */}
      <SWMovies />
    </div>
  );
}

export default App;
