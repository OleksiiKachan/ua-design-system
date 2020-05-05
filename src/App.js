import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { Button } from './elements';

function App() {
  return (
    <BrowserRouter>
      <div style={{ margin: `10px`, display: 'grid', gridRowGap: `20px` }}>
        <Button.Blue>Button</Button.Blue>
        <Button.Blue disabled>Button</Button.Blue>
      </div>
      <div style={{ margin: `10px`, display: 'grid', gridRowGap: `20px` }}>
        <Button.Yellow>Button</Button.Yellow>
        <Button.Yellow disabled>Button</Button.Yellow>
      </div>
      <div style={{ margin: `10px`, display: 'grid', gridRowGap: `20px` }}>
        <Button.Outline>Button</Button.Outline>
        <Button.Outline disabled>Button</Button.Outline>
      </div>
      <div style={{ margin: `10px`, display: 'grid', gridRowGap: `20px` }}>
        <Button.Blue href="https://design.gov.ua/">Button</Button.Blue>
      </div>
    </BrowserRouter>
  );
}

export default App;
