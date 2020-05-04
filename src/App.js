import React from 'react';
import './App.css';

import BlueButton from './elements/button/BlueButton';
import YellowButton from './elements/button/YellowButton';
import OutlineButton from './elements/button/OutlineButton';

function App() {
  return (
    <>
      <div style={{ margin: `10px`, display: 'grid', gridRowGap: `20px` }}>
        <BlueButton>Button</BlueButton>
        <BlueButton disabled>Button</BlueButton>
      </div>
      <div style={{ margin: `10px`, display: 'grid', gridRowGap: `20px` }}>
        <YellowButton>Button</YellowButton>
        <YellowButton disabled>Button</YellowButton>
      </div>
      <div style={{ margin: `10px`, display: 'grid', gridRowGap: `20px` }}>
        <OutlineButton>Button</OutlineButton>
        <OutlineButton disabled>Button</OutlineButton>
      </div>
    </>
  );
}

export default App;
