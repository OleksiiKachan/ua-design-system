import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import addons from '@storybook/addons';
import { withInfo } from '@storybook/addon-info';
import { configureActions } from '@storybook/addon-actions';
import Container from './Container';
import PackageInfo from './../package.json';

const customPropertyPrefix = 'cds';

addDecorator(
  withInfo({
    styles: {
      children: {
        width: '100%',
      },
    },
    maxPropStringLength: 200, // Displays the first 200 characters in the default prop string
  })
);

addParameters({
  options: {
    // display in alphabetic order
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
    theme: {
      brandTitle: `UA Kit Components React v${PackageInfo.version}`,
      // brandUrl:
      //   'ole',
    },
  },
});

configureActions({
  depth: 3,
  limit: 10,
});

addDecorator((story) => <Container story={story} />);
// addDecorator(checkA11y);

// addons.getChannel().on(CARBON_CURRENT_THEME, (theme) => {
//   document.documentElement.setAttribute('storybook-carbon-theme', theme);
// });

// addons.getChannel().on(CARBON_TYPE_TOKEN, ({ tokenName, tokenValue }) => {
//   const root = document.documentElement;
//   const [fontSize, lineHeight] = tokenValue.split('-');
//   const rem = (px) =>
//     `${
//       px / parseFloat(getComputedStyle(document.documentElement).fontSize)
//     }rem`;
//   root.style.setProperty(
//     `--${customPropertyPrefix}-${tokenName}-font-size`,
//     rem(fontSize)
//   );
//   root.style.setProperty(
//     `--${customPropertyPrefix}-${tokenName}-line-height`,
//     rem(lineHeight)
//   );
// });

configure(require.context('../src', true, /\.stories\.jsx$/), module);
