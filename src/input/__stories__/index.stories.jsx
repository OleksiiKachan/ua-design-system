import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Input from '../';

const props = {
  regular: () => {
    return {
      id: 'field',
      defaultValue: text(
        'Default value (defaultValue)',
        'This is not a default value'
      ),
      label: text('Label text (label)', 'Text Input label'),
      disabled: boolean('Disabled (disabled)', false),
      hideLabel: boolean('No label (hideLabel)', false),
      invalid: boolean('Show form validation UI (invalid)', false),
      invalidMessage: text(
        'Form validation UI content (invalidMessage)',
        'A valid value is required'
      ),
      helperMessage: text(
        'Helper text (helperMessage)',
        'Optional helper message.'
      ),
      onClick: action('onClick'),
      onChange: action('onChange'),
    };
  },
};

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
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
          <Input {...regularProps} />
        </div>
      );
    },
    {
      info: {
        text: `
          TODO. Input description
        `,
      },
    }
  );
