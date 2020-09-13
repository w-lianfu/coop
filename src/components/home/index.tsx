import React from 'react';
import { Button } from '@material-ui/core';

const Home = () => {
  return (
    <div>
      <h3>Home Page!</h3>
      <ul>
        <li>
          <Button variant="contained" color="primary">Primary</Button>
        </li>
        <li>
          <Button variant="contained" color="secondary">Secondary</Button>
        </li>
        <li>
          <Button variant="contained">Default</Button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
