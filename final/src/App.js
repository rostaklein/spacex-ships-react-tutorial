import React, { useState } from 'react';
import './App.css';

import { Button, Jumbotron } from 'react-bootstrap';
import Ships from './components/ShipsList';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addShipToCart = ship => {
    setCartItems([...cartItems, ship]);
  };

  const getJumbotronContent = () => {
    if (cartItems.length > 0) {
      return (
        <div>
          <h2>You have {cartItems.length} ships in your cart.</h2>
          <p>{cartItems.map(ship => ship.ship_name).join(', ')}</p>
          <p>
            <Button variant="light" size="sm" onClick={() => setCartItems([])}>
              Empty cart
            </Button>
          </p>
        </div>
      );
    }
    return (
      <div>
        <h2>Welcome to SpaceX Ships Ltd.!</h2>
        <p>
          Start shopping for the best spaceships today! See our offer below.
        </p>
      </div>
    );
  };

  return (
    <div className="App">
      <Jumbotron>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg"
          alt="spacex logo"
        />
        {getJumbotronContent()}
      </Jumbotron>
      <hr />
      <Ships onShipClick={addShipToCart} />
    </div>
  );
}

export default App;
