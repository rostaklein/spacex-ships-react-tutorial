import React, { useState, useEffect } from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';

const Ships = ({ onShipClick }) => {
  const [ships, setShips] = useState([]);

  const loadShips = async () => {
    const response = await fetch(
      'https://api.spacexdata.com/v3/ships?limit=5&active=true',
    );
    setShips(await response.json());
  };

  useEffect(() => {
    loadShips();
  }, []);

  return (
    <div>
      <h2>Ships list</h2>
      <CardGroup>
        {ships.map(ship => (
          <Card key={ship.ship_id}>
            <Card.Img variant="top" src={ship.image} style={{ height: 120 }} />
            <Card.Body>
              <Card.Title>{ship.ship_name}</Card.Title>
              <Card.Text>Home port: {ship.home_port}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button size="sm" onClick={() => onShipClick(ship)}>
                Add to cart
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default Ships;
