import React from 'react';

type IconPropTypes = {
  title: string;
  fill: string;
};

export default ({ title, fill }: IconPropTypes) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
    <title>{title}</title>
    <polygon
      fill={fill}
      points="23 14 16 14 16 7 14 7 14 14 7 14 7 16 14 16 14 23 16 23 16 16 23 16 23 14"
    />
  </svg>
);
