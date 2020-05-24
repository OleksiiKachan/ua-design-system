// import './styles.scss';
// import './polyfills';

import React, { useEffect } from 'react';

function Container({ story }) {
  useEffect(() => {
    // const originalDirection = document.documentElement.dir;
    // if (process.env.CARBON_REACT_STORYBOOK_USE_RTL === 'true') {
    //   document.documentElement.dir = 'rtl';
    // }
    // return () => {
    //   document.documentElement.dir = originalDirection;
    // };
  }, []);

  return (
    <React.StrictMode>
      <div
        data-floating-menu-container
        role="main"
        style={{
          padding: '3em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {story()}
      </div>
    </React.StrictMode>
  );
}

export default Container;
