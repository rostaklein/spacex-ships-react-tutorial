import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const Ships = () => {
  const [ships, setShips] = useState([]);

  const loadShips = async () => {
    const response = await fetch(
      'https://api.spacexdata.com/v3/ships?limit=5&active=true',
    );
    setShips(await response.json());
  };

  //   useEffect(() => {
  //     loadShips();
  //   }, []);

  return (
    <div>
      <h2>Ships list</h2>
      <Button onClick={loadShips}>Load ships</Button>
      <div className="ships-list">
        {ships.map(ship => (
          <Card key={ship.ship_id}>
            <Card.Img variant="top" src={ship.image} />
            <Card.Body>
              <Card.Title>{ship.ship_name}</Card.Title>
              <Card.Text>Home port: {ship.home_port}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Ships;
