import React, { useState } from 'react';
import './App.css';

import { Button } from 'react-bootstrap';
import Ships from './components/ShipsList';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Counter number: {counter}</h1>
      <Button size={'sm'} onClick={() => setCounter(counter + 1)}>
        increment
      </Button>
      <Button size={'sm'} onClick={() => setCounter(counter - 1)}>
        decrement
      </Button>
      <hr />
      <Ships />
    </div>
  );
}

export default App;
