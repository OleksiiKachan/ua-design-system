import React from 'react';

import AcrobatIcon from './AcrobatIcon';
import AddIcon from './AddIcon';
import AdjustIcon from './AdjustIcon';

type PropTypes = {
  type: string;
  mode: 'dark' | 'light' | 'contrast';
  title?: string;
};

export default ({ type = 'acrobat', mode = 'dark', title }: PropTypes) => {
  const darkFillColor = '#224f91';
  const lightFillColor = '#eef5ff';
  const contrastFillColor = '#000';

  let fillColor: string;

  switch (mode) {
    case 'dark':
      fillColor = darkFillColor;
      break;
    case 'light':
      fillColor = lightFillColor;
      break;
    case 'contrast':
      fillColor = contrastFillColor;
      break;
    default:
      throw new Error('Invalid icon mode');
  }

  switch (type) {
    case 'acrobat':
      return <AcrobatIcon fill={fillColor} title={title || type} />;
    case 'add':
      return <AddIcon fill={fillColor} title={title || type} />;
    case 'adjust':
      return <AdjustIcon fill={fillColor} title={title || type} />;
    default:
      throw new Error('Invalid icon type');
  }
};
