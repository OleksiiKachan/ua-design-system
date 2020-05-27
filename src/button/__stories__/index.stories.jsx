import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Button from '../';

const props = {
  regular: () => {
    return {
      className: 'some-class',
      disabled: boolean('Disabled (disabled)', false),
      onClick: action('onClick'),
      onFocus: action('onFocus'),
    };
  },
};

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add(
    'Blue',
    () => {
      const regularProps = props.regular();
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Button.Blue {...regularProps} className="some-class">
            Button
          </Button.Blue>
          &nbsp;
          <Button.Blue {...regularProps} href="#" className="some-class">
            Link
          </Button.Blue>
        </div>
      );
    },
    {
      info: {
        text: `
          TODO. Blue button description
        `,
      },
    }
  )
  .add(
    'Yellow',
    () => {
      const regularProps = props.regular();
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Button.Yellow {...regularProps} className="some-class">
            Button
          </Button.Yellow>
          &nbsp;
          <Button.Yellow {...regularProps} href="#" className="some-class">
            Link
          </Button.Yellow>
        </div>
      );
    },
    {
      info: {
        text: `
          TODO. Yellow button description
        `,
      },
    }
  )
  .add(
    'Outline',
    () => {
      const regularProps = props.regular();
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Button.Outline {...regularProps} className="some-class">
            Button
          </Button.Outline>
          &nbsp;
          <Button.Outline {...regularProps} href="#" className="some-class">
            Link
          </Button.Outline>
        </div>
      );
    },
    {
      info: {
        text: `
          TODO. Outline button description
        `,
      },
    }
  );
