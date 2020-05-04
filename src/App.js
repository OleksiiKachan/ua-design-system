import React from 'react';
import './App.css';

import { Button } from './elements';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
