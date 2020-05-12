import React from 'react';

type IconPropTypes = {
  title: string;
  fill: string;
};

export default ({ title, fill }: IconPropTypes) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
    <title>{title}</title>
    <path
      fill={fill}
      d="M4,10H9.18a3,3,0,1,0,0-2H4a1,1,0,0,0,0,2Zm8-2a1,1,0,1,1-1,1A1,1,0,0,1,12,8Z"
    />
    <path
      fill={fill}
      d="M12,18a3,3,0,0,0-2.82,2H4a1,1,0,0,0,0,2H9.18A3,3,0,1,0,12,18Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,22Z"
    />
    <g style={{ opacity: 0.6 }}>
      <path
        fill={fill}
        d="M26,8H14l-.1,0a4.9,4.9,0,0,1,0,2l.1,0H26a1,1,0,0,0,0-2Z"
      />
      <path
        fill={fill}
        d="M26,14H21l-.1,0a4.9,4.9,0,0,1,0,2l.1,0h5a1,1,0,0,0,0-2Z"
      />
      <path
        fill={fill}
        d="M26,20H14l-.1,0a4.9,4.9,0,0,1,0,2l.1,0H26a1,1,0,0,0,0-2Z"
      />
    </g>
  </svg>
);
